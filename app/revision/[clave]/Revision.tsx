"use client";

import { useEffect, useRef } from "react";
import Wordmark from "@/components/Wordmark";
import type { Nota, Pieza } from "@/lib/revision";

// El cliente pausa el video, toca el punto del cuadro y escribe la nota. Cada nota
// guarda escena, número, cuadro exacto, segundo y posición (en % y en píxeles del
// original), igual que el JSON del corrector interno. Se guardan en la planilla de
// Sebastián a través de /api/revision; la lista se refresca sola cada 8 s.

const T = {
  es: {
    otro: "English", cargando: "Cargando el video…", sinVideo: "Todavía no hay un video para revisar.", errVideo: "No se pudo cargar el video. Recargá la página.",
    guiaInicio: "Dale <b>play</b> y pausá donde quieras cambiar algo.", guiaCorre: "Tocá el video para <b>pausar</b>.", guiaPausa: "Tocá el punto del cuadro que querés cambiar.", guiaNota: "Escribí qué cambiarías y guardá la nota.",
    escena: "Escena", cuadro: "cuadro", notas: "Notas", abiertas: (n: number) => `${n} ${n === 1 ? "abierta" : "abiertas"}`, resueltas: (n: number) => `${n} ${n === 1 ? "resuelta" : "resueltas"}`,
    vacio: "Todavía no hay notas. Pausá el video y tocá el cuadro para dejar la primera.",
    placeholder: "Qué cambiarías en este cuadro", guardar: "Guardar nota", cancelar: "Cancelar", guardando: "Guardando…", guardada: "Guardada",
    errGuardar: "No se pudo guardar. Revisá la conexión y probá de nuevo.",
    resolver: "Marcar resuelta", reabrir: "Reabrir", borrar: "Borrar", borrarQ: (n: string) => `¿Borrar la nota ${n}?`, no: "No",
    pie: "Cada nota le llega a Sebastián en cuanto la guardás.",
    nTitulo: "¿Cómo te llamás?", nSub: "Así sabemos de quién es cada nota.", nPh: "Tu nombre", nBoton: "Entrar", cambiarNombre: (n: string) => `${n} · cambiar`,
    a: { escAnt: "Escena anterior", ant: "Un cuadro atrás", play: "Reproducir o pausar", sig: "Un cuadro adelante", escSig: "Escena siguiente", sonido: "Sonido", version: "Versión" },
  },
  en: {
    otro: "Español", cargando: "Loading the video…", sinVideo: "There is no video to review yet.", errVideo: "The video did not load. Reload the page.",
    guiaInicio: "Press <b>play</b> and pause wherever you want something changed.", guiaCorre: "Tap the video to <b>pause</b>.", guiaPausa: "Tap the spot in the frame you want changed.", guiaNota: "Write what you would change and save the note.",
    escena: "Scene", cuadro: "frame", notas: "Notes", abiertas: (n: number) => `${n} open`, resueltas: (n: number) => `${n} resolved`,
    vacio: "No notes yet. Pause the video and tap the frame to leave the first one.",
    placeholder: "What would you change in this frame?", guardar: "Save note", cancelar: "Cancel", guardando: "Saving…", guardada: "Saved",
    errGuardar: "The note was not saved. Check your connection and try again.",
    resolver: "Mark resolved", reabrir: "Reopen", borrar: "Delete", borrarQ: (n: string) => `Delete note ${n}?`, no: "Keep it",
    pie: "Sebastián gets each note as soon as you save it.",
    nTitulo: "What’s your name?", nSub: "So we know who left each note.", nPh: "Your name", nBoton: "Continue", cambiarNombre: (n: string) => `${n} · change`,
    a: { escAnt: "Previous scene", ant: "One frame back", play: "Play or pause", sig: "One frame forward", escSig: "Next scene", sonido: "Sound", version: "Version" },
  },
};
type Lang = keyof typeof T;

const leerLS = (k: string) => { try { return localStorage.getItem(k); } catch { return null; } };
const escribirLS = (k: string, v: string) => { try { localStorage.setItem(k, v); } catch {} };

function iniciar(raiz: HTMLElement, clave: string, pieza: Pieza) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const $ = (id: string) => raiz.querySelector<HTMLElement>("#" + id) as any;
  // Todo lo que se escucha se suelta junto al desmontar (en desarrollo React monta dos veces).
  const fin = new AbortController();
  const escuchar = <E extends Event>(el: EventTarget, tipo: string, fn: (ev: E) => void) =>
    el.addEventListener(tipo, fn as EventListener, { signal: fin.signal });
  const v = $("v") as HTMLVideoElement, capa = $("capa") as HTMLElement, linea = $("linea") as HTMLElement;

  let lang: Lang = location.hash === "#en" ? "en" : ((leerLS("rev_lang") as Lang) || "es");
  if (!T[lang]) lang = "es";
  const t = () => T[lang];

  const versiones = pieza.versiones || {};
  let verSel: string | null = versiones[pieza.actual] ? pieza.actual : Object.keys(versiones).pop() || null;
  let info = verSel ? versiones[verSel] : null;
  let FPS = 60, total = 1, frame = 0;
  let notas: Nota[] = [], sel: string | null = null, confirmar: string | null = null;
  let borrador: { frame: number; x: number; y: number } | null = null;
  let nombre = leerLS("rev_nombre") || "";
  let autorId = leerLS("rev_autor");
  if (!autorId) { autorId = Math.random().toString(36).slice(2, 12); escribirLS("rev_autor", autorId); }
  let escribiendo = 0, vivo = true, yaCorrio = false;

  const escenas = () => (info && info.escenas?.length ? info.escenas : [{ n: "1", t: 0 }]);
  const escenaDe = (f: number) => { const s = f / FPS; let e = escenas()[0].n; for (const x of escenas()) if (s >= x.t) e = x.n; return e; };
  const mmss = (f: number) => { const s = Math.floor(f / FPS); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
  const proximoN = (esc: string) => 1 + Math.max(0, ...notas.filter((n) => n.escena === esc).map((n) => n.n || 0));

  /* ---------- textos ---------- */
  function textos() {
    document.documentElement.lang = lang;
    $("bIdioma").textContent = t().otro; $("bIdioma").lang = lang === "es" ? "en" : "es";
    const a = t().a;
    ([["bEscAnt", a.escAnt], ["bAnt", a.ant], ["bPlay", a.play], ["bSig", a.sig], ["bEscSig", a.escSig], ["bSonido", a.sonido], ["selVersion", a.version]] as const)
      .forEach(([id, l]) => { $(id).setAttribute("aria-label", l); $(id).title = l; });
    $("tNotas").textContent = t().notas; $("pie").textContent = t().pie;
    $("rTexto").placeholder = t().placeholder; $("rGuardar").textContent = t().guardar; $("rCancelar").textContent = t().cancelar;
    $("nTitulo").textContent = t().nTitulo; $("nSub").textContent = t().nSub; $("nInput").placeholder = t().nPh; $("nBoton").textContent = t().nBoton;
    $("bNombre").hidden = !nombre; $("bNombre").textContent = nombre ? t().cambiarNombre(nombre) : "";
    armarLinea(); pintar(); listar(); guia();
  }
  $("bIdioma").onclick = () => { lang = lang === "es" ? "en" : "es"; escribirLS("rev_lang", lang); textos(); };

  /* ---------- nombre ---------- */
  function pedirNombre() { $("nInput").value = nombre; $("velo").hidden = false; setTimeout(() => $("nInput").focus(), 0); }
  escuchar($("fNombre"), "submit", (ev: Event) => {
    ev.preventDefault(); const n = $("nInput").value.trim(); if (!n) return;
    nombre = n; escribirLS("rev_nombre", n); $("velo").hidden = true; textos();
    if (borrador) setTimeout(() => $("rTexto").focus(), 0);
  });
  $("bNombre").onclick = pedirNombre;

  /* ---------- video ---------- */
  function ir(f: number) {
    frame = Math.max(0, Math.min(total - 1, Math.round(f)));
    if (!v.paused) v.pause();
    v.currentTime = (frame + 0.5) / FPS; // mitad del cuadro: evita caer en el anterior por redondeo
    pintar(); guia();
  }
  function play() { if (v.paused) { borrador = null; $("redactor").hidden = true; v.play().catch(() => {}); } else { v.pause(); ir(Math.floor(v.currentTime * FPS)); } }
  function saltarEscena(dir: number) {
    const s = frame / FPS; let k = 0; escenas().forEach((x, i) => { if (s >= x.t) k = i; });
    const j = Math.max(0, Math.min(escenas().length - 1, k + dir)); ir(Math.ceil(escenas()[j].t * FPS));
  }
  function iconoSonido() {
    $("icoSonido").innerHTML = v.muted
      ? '<path d="M4 9h4l5-4v14l-5-4H4zM16 9l5 6M21 9l-5 6" stroke="currentColor" stroke-width="2" fill="none"/><path d="M4 9h4l5-4v14l-5-4H4z"/>'
      : '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12" stroke="currentColor" stroke-width="2" fill="none"/>';
  }
  $("bSonido").onclick = () => { v.muted = !v.muted; iconoSonido(); };
  $("bPlay").onclick = play;
  $("bAnt").onclick = () => ir(frame - 1);
  $("bSig").onclick = () => ir(frame + 1);
  $("bEscAnt").onclick = () => saltarEscena(-1);
  $("bEscSig").onclick = () => saltarEscena(1);

  escuchar(v, "play", () => {
    yaCorrio = true;
    $("icoPlay").innerHTML = '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>'; capa.classList.add("corre"); guia();
    const tick = () => {
      if (v.paused) return;
      frame = Math.min(total - 1, Math.floor(v.currentTime * FPS)); pintar();
      if (v.requestVideoFrameCallback) v.requestVideoFrameCallback(tick); else requestAnimationFrame(tick);
    };
    tick();
  });
  escuchar(v, "pause", () => { $("icoPlay").innerHTML = '<path d="M7 4l13 8-13 8z"/>'; capa.classList.remove("corre"); guia(); });
  escuchar(v, "ended", () => ir(total - 1));
  escuchar(v, "loadedmetadata", () => { total = Math.max(1, Math.round(v.duration * FPS)); $("aviso").textContent = ""; armarLinea(); ir(Math.min(frame, total - 1)); });
  escuchar(v, "error", () => { if (v.getAttribute("src")) $("aviso").textContent = t().errVideo; });

  function cargarVersion() {
    info = verSel ? versiones[verSel] || null : null;
    notas = []; borrador = null; sel = null; $("redactor").hidden = true;
    if (!info) { v.removeAttribute("src"); $("aviso").textContent = t().sinVideo; return; }
    FPS = info.fps || 60; total = Math.max(1, Math.round((info.duracion || 1) * FPS));
    $("titulo").textContent = info.titulo || pieza.titulo || "";
    if (v.getAttribute("src") !== info.video) { $("aviso").textContent = t().cargando; v.src = info.video; frame = 0; }
    armarLinea(); pintar(); listar(); guia();
    traerNotas();
  }
  $("selVersion").onchange = (ev: Event) => { verSel = (ev.target as HTMLSelectElement).value; cargarVersion(); };

  /* ---------- línea de tiempo ---------- */
  function armarLinea() {
    linea.querySelectorAll(".esc,.marca").forEach((n) => n.remove());
    const dur = total / FPS, E = escenas();
    E.forEach((x, i) => {
      const fin = i + 1 < E.length ? E[i + 1].t : dur, d = document.createElement("div");
      d.className = "esc"; d.dataset.e = x.n; d.style.left = (x.t / dur) * 100 + "%"; d.style.width = ((fin - x.t) / dur) * 100 + "%"; d.textContent = x.n;
      linea.insertBefore(d, linea.firstChild);
    });
    notas.forEach((no) => { const m = document.createElement("div"); m.className = "marca" + (no.hecha ? " hecha" : ""); m.style.left = (no.frame / total) * 100 + "%"; linea.appendChild(m); });
  }
  const scrub = (ev: PointerEvent) => { const r = linea.getBoundingClientRect(); ir(((ev.clientX - r.left) / r.width) * total); };
  escuchar<PointerEvent>(linea, "pointerdown", (ev) => { linea.setPointerCapture(ev.pointerId); scrub(ev); linea.onpointermove = scrub; });
  escuchar(linea, "pointerup", () => { linea.onpointermove = null; });
  escuchar(linea, "pointercancel", () => { linea.onpointermove = null; });

  /* ---------- cuadro ---------- */
  function pintar() {
    const e = escenaDe(frame);
    $("tc").innerHTML = `${t().escena} <b>${e}</b> · ${mmss(frame)} · ${t().cuadro} <b>${frame}</b>`;
    $("cabezal").style.left = (frame / total) * 100 + "%";
    linea.querySelectorAll<HTMLElement>(".esc").forEach((d) => d.classList.toggle("act", d.dataset.e === e));
    capa.innerHTML = "";
    notas.forEach((no) => {
      const dist = Math.abs(no.frame - frame); if (dist > FPS / 2) return; // se ve medio segundo antes y después, tenue
      const p = document.createElement("button");
      p.type = "button"; p.className = "pin" + (dist ? " lejos" : "") + (no.hecha ? " hecha" : "") + (sel === no.id ? " sel" : "");
      p.style.left = no.x + "%"; p.style.top = no.y + "%"; p.textContent = `${no.escena}.${no.n}`; p.setAttribute("aria-label", `${t().escena} ${no.escena}, nota ${no.n}`);
      p.onclick = (ev) => { ev.stopPropagation(); elegir(no.id, true); };
      capa.appendChild(p);
    });
    if (borrador && borrador.frame === frame) {
      const p = document.createElement("div"); p.className = "pin borrador"; p.style.left = borrador.x + "%"; p.style.top = borrador.y + "%"; capa.appendChild(p);
    }
  }

  escuchar<MouseEvent>(capa, "click", (ev) => {
    if (!v.paused) { play(); return; }
    if (!info) return;
    const r = capa.getBoundingClientRect(), x = ((ev.clientX - r.left) / r.width) * 100, y = ((ev.clientY - r.top) / r.height) * 100;
    borrador = { frame, x: +x.toFixed(2), y: +y.toFixed(2) }; sel = null;
    abrirRedactor();
  });

  function abrirRedactor() {
    if (!borrador) return;
    const esc = escenaDe(borrador.frame);
    $("rNum").textContent = `${esc}.${proximoN(esc)}`;
    $("rMeta").textContent = `${t().escena} ${esc} · ${mmss(borrador.frame)} · ${t().cuadro} ${borrador.frame}`;
    $("rEstado").textContent = ""; $("rEstado").className = "estado";
    $("redactor").hidden = false; $("rGuardar").disabled = !$("rTexto").value.trim(); pintar(); listar(); guia();
    if (!nombre) { pedirNombre(); return; }
    $("rTexto").focus({ preventScroll: true }); // dentro del toque, así el celular abre el teclado
    $("redactor").scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  function cerrarRedactor() { borrador = null; $("rTexto").value = ""; $("redactor").hidden = true; pintar(); guia(); }
  $("rCancelar").onclick = cerrarRedactor;
  escuchar($("rTexto"), "input", () => { $("rGuardar").disabled = !$("rTexto").value.trim(); });

  async function api(cuerpo: Record<string, unknown>) {
    escribiendo++;
    try {
      const res = await fetch("/api/revision", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ clave, ...cuerpo }) });
      const j = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !j.ok) throw new Error("api");
      return j;
    } finally { escribiendo--; }
  }

  escuchar($("redactor"), "submit", async (ev: Event) => {
    ev.preventDefault();
    const texto = $("rTexto").value.trim(); if (!texto || !borrador || !info || !verSel) return;
    if (!nombre) { pedirNombre(); return; }
    const escena = escenaDe(borrador.frame), W = info.ancho || 1920, H = info.alto || 1080;
    const nota = {
      version: verSel, escena, frame: borrador.frame, tiempo: +(borrador.frame / FPS).toFixed(3),
      x: borrador.x, y: borrador.y, px: [Math.round((borrador.x / 100) * W), Math.round((borrador.y / 100) * H)] as [number, number],
      texto, autor: nombre, autorId,
    };
    $("rGuardar").disabled = true; $("rEstado").className = "estado"; $("rEstado").textContent = t().guardando;
    try {
      const r = await api({ accion: "crear", nota });
      notas = [...notas, { ...nota, id: r.id, n: r.n, hecha: false, creado: new Date().toISOString() } as Nota];
      sel = r.id; $("rTexto").value = ""; borrador = null; $("redactor").hidden = true;
      $("rEstado").textContent = t().guardada; armarLinea(); guia(); pintar(); listar();
      traerNotas();
    } catch {
      $("rGuardar").disabled = false;
      $("rEstado").className = "estado mal"; $("rEstado").textContent = t().errGuardar;
    }
  });

  /* ---------- lista ---------- */
  function elegir(id: string, mover: boolean) { sel = id; const no = notas.find((n) => n.id === id); if (no && mover) ir(no.frame); listar(); pintar(); }
  function listar() {
    const L = $("lista") as HTMLElement; L.innerHTML = "";
    const abiertas = notas.filter((n) => !n.hecha).length, hechas = notas.length - abiertas;
    $("cuenta").textContent = notas.length ? [abiertas ? t().abiertas(abiertas) : "", hechas ? t().resueltas(hechas) : ""].filter(Boolean).join(" · ") : "";
    if (!notas.length) { const p = document.createElement("p"); p.className = "vacio"; p.textContent = info ? t().vacio : ""; L.appendChild(p); return; }
    const orden = [...notas].sort((a, b) => a.frame - b.frame || a.n - b.n);
    let grupo: HTMLElement | null = null, esc: string | null = null;
    orden.forEach((no) => {
      if (no.escena !== esc || !grupo) {
        esc = no.escena; grupo = document.createElement("div"); grupo.className = "escena";
        const h = document.createElement("h3"); h.textContent = `${t().escena} ${esc}`; grupo.appendChild(h); L.appendChild(grupo);
      }
      const d = document.createElement("article"); d.className = "nota" + (no.hecha ? " hecha" : "") + (sel === no.id ? " sel" : "");
      const fila = document.createElement("div"); fila.className = "fila";
      const num = document.createElement("button"); num.className = "num"; num.type = "button"; num.textContent = `${no.escena}.${no.n}`; num.onclick = () => elegir(no.id, true);
      const meta = document.createElement("span"); meta.className = "meta"; meta.textContent = `${no.autor || ""} · ${mmss(no.frame)} · ${t().cuadro} ${no.frame}`;
      fila.append(num, meta);
      const tx = document.createElement("p"); tx.className = "texto"; tx.textContent = no.texto || "";
      const ac = document.createElement("div"); ac.className = "acciones";
      if (confirmar === no.id) {
        const q = document.createElement("span"); q.className = "confirma"; q.textContent = t().borrarQ(`${no.escena}.${no.n}`);
        const si = document.createElement("button"); si.className = "link peligro"; si.type = "button"; si.textContent = t().borrar; si.onclick = () => borrarNota(no);
        const nn = document.createElement("button"); nn.className = "link"; nn.type = "button"; nn.textContent = t().no; nn.onclick = () => { confirmar = null; listar(); };
        ac.append(q, si, nn);
      } else {
        const r = document.createElement("button"); r.className = "link"; r.type = "button"; r.textContent = no.hecha ? t().reabrir : t().resolver; r.onclick = () => marcar(no);
        const b = document.createElement("button"); b.className = "link peligro"; b.type = "button"; b.textContent = t().borrar; b.onclick = () => { confirmar = no.id; listar(); };
        ac.append(r, b);
      }
      d.append(fila, tx, ac); grupo.appendChild(d);
      if (sel === no.id) setTimeout(() => d.scrollIntoView({ block: "nearest" }), 0);
    });
  }
  async function marcar(no: Nota) {
    no.hecha = !no.hecha; armarLinea(); pintar(); listar();
    try { await api({ accion: "marcar", id: no.id, hecha: no.hecha }); } catch { no.hecha = !no.hecha; armarLinea(); pintar(); listar(); }
  }
  async function borrarNota(no: Nota) {
    confirmar = null;
    const antes = notas;
    notas = notas.filter((n) => n.id !== no.id); if (sel === no.id) sel = null;
    armarLinea(); pintar(); listar();
    try { await api({ accion: "borrar", id: no.id }); } catch { notas = antes; armarLinea(); pintar(); listar(); }
  }

  function guia() {
    // Hasta que el video corre una vez (o se mueve de cuadro), la primera indicación es darle play.
    $("guia").innerHTML = borrador ? t().guiaNota : !v.paused ? t().guiaCorre : !yaCorrio && frame === 0 ? t().guiaInicio : t().guiaPausa;
  }

  /* ---------- datos ---------- */
  function armarSelector() {
    const S = $("selVersion") as HTMLSelectElement, ids = Object.keys(versiones).sort((a, b) => (versiones[a].orden || 0) - (versiones[b].orden || 0));
    S.innerHTML = ""; ids.forEach((id) => { const o = document.createElement("option"); o.value = id; o.textContent = id; S.appendChild(o); });
    S.hidden = ids.length < 2; if (verSel) S.value = verSel;
  }
  async function traerNotas() {
    if (!verSel || escribiendo) return;
    const pedida = verSel;
    try {
      const res = await fetch(`/api/revision?${new URLSearchParams({ clave, version: pedida })}`, { cache: "no-store" });
      const j = await res.json();
      if (!vivo || !j.ok || pedida !== verSel || escribiendo) return;
      if (JSON.stringify(j.notas) === JSON.stringify(notas)) return; // sin cambios: no se redibuja bajo el dedo
      notas = j.notas as Nota[];
      if (sel && !notas.some((n) => n.id === sel)) sel = null;
      if (confirmar && !notas.some((n) => n.id === confirmar)) confirmar = null;
      if (borrador) $("rNum").textContent = `${escenaDe(borrador.frame)}.${proximoN(escenaDe(borrador.frame))}`;
      armarLinea(); pintar(); listar();
    } catch {}
  }
  const reloj = setInterval(() => { if (document.visibilityState === "visible") traerNotas(); }, 8000);
  const alVolver = () => { if (document.visibilityState === "visible") traerNotas(); };
  escuchar(document, "visibilitychange", alVolver);

  const teclas = (ev: KeyboardEvent) => {
    const el = ev.target as HTMLElement;
    if (el.closest && el.closest("textarea, input, select")) { if (ev.key === "Escape" && borrador) cerrarRedactor(); return; }
    const k = ev.key, d = ev.shiftKey ? 10 : 1;
    if (k === "ArrowLeft") { ev.preventDefault(); ir(frame - d); }
    else if (k === "ArrowRight") { ev.preventDefault(); ir(frame + d); }
    else if (k === " " && (el === document.body || el.tagName === "MAIN")) { ev.preventDefault(); play(); }
    else if (k === "Escape") { cerrarRedactor(); sel = null; listar(); pintar(); }
  };
  escuchar(document, "keydown", teclas);

  iconoSonido();
  $("aviso").textContent = t().cargando;
  if (!nombre) pedirNombre();
  armarSelector();
  textos();
  cargarVersion();

  return () => {
    vivo = false; clearInterval(reloj); fin.abort();
    v.pause();
  };
}

export default function Revision({ clave, pieza }: { clave: string; pieza: Pieza }) {
  const raiz = useRef<HTMLElement>(null);
  useEffect(() => (raiz.current ? iniciar(raiz.current, clave, pieza) : undefined), [clave, pieza]);

  return (
    <main id="main" ref={raiz} className="rev">
      <div className="top">
        <Wordmark className="logo" />
        <div className="pieza">
          <h1 id="titulo">{pieza.titulo}</h1>
          <select id="selVersion" className="chip" hidden />
        </div>
        <div className="topder">
          <button className="link" id="bNombre" type="button" hidden />
          <button className="link" id="bIdioma" type="button" lang="en">English</button>
        </div>
      </div>

      <div className="stagewrap">
        <div className="stage">
          <div className="marco">
            <video id="v" preload="auto" muted playsInline />
            <div className="capa" id="capa" />
            <div className="aviso" id="aviso" />
          </div>
          <div className="barra">
            <div className="grupo">
              <button className="bt" id="bEscAnt" type="button"><svg viewBox="0 0 24 24"><path d="M6 5h2v14H6zM20 5v14L9 12z" /></svg></button>
              <button className="bt" id="bAnt" type="button">−1</button>
            </div>
            <button className="bt play" id="bPlay" type="button"><svg viewBox="0 0 24 24" id="icoPlay"><path d="M7 4l13 8-13 8z" /></svg></button>
            <div className="grupo">
              <button className="bt" id="bSig" type="button">+1</button>
              <button className="bt" id="bEscSig" type="button"><svg viewBox="0 0 24 24"><path d="M16 5h2v14h-2zM4 5v14l11-7z" /></svg></button>
            </div>
            <button className="bt" id="bSonido" type="button"><svg viewBox="0 0 24 24" id="icoSonido" /></button>
            <span className="tc" id="tc" />
          </div>
          <div className="linea" id="linea"><div className="cabezal" id="cabezal" /></div>
        </div>
        <p className="guia" id="guia" aria-live="polite" />
        <form className="redactor" id="redactor" hidden>
          <div className="cab"><b id="rNum" /><span id="rMeta" /></div>
          <textarea id="rTexto" rows={3} maxLength={2000} />
          <div className="acciones">
            <button className="primario" id="rGuardar" type="submit" />
            <button className="link" id="rCancelar" type="button" />
            <span className="estado" id="rEstado" aria-live="polite" />
          </div>
        </form>
      </div>

      <section className="panel">
        <header><h2 id="tNotas" /><span className="cuenta" id="cuenta" /></header>
        <div id="lista" />
        <p className="pie" id="pie" />
      </section>

      <div className="velo" id="velo" hidden>
        <form id="fNombre">
          <h2 id="nTitulo" />
          <p id="nSub" />
          <input id="nInput" autoComplete="name" maxLength={60} required />
          <button className="primario" type="submit" id="nBoton" />
        </form>
      </div>
    </main>
  );
}
