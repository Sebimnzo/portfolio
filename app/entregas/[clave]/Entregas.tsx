"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Wordmark from "@/components/Wordmark";
import type { Archivo, Entrega, Grupo, Seccion } from "@/lib/entregas";

// Una sola página con todas las entregas de un cliente: cada sección muestra lo que
// hay en su carpeta de Drive y se abre en grande sin salir del sitio. Lo que todavía
// no está aprobado aparece como «En preparación», sin archivos.

const miniatura = (id: string, ancho: number) => `https://lh3.googleusercontent.com/d/${id}=w${ancho}`;
const enDrive = (id: string) => `https://drive.google.com/file/d/${id}/view`;
const reproductor = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

const fuente = (a: Archivo, ancho: number) => a.vista ?? miniatura(a.id, ancho);
const esVisual = (a: Archivo) => a.tipo === "imagen" || a.tipo === "video" || a.tipo === "pdf";
// Fondo oscuro para lo que no se vería sobre claro: logos blancos y videos sin miniatura.
const fondoOscuro = (a: Archivo) => a.tipo === "video" || /blanco|white/i.test(a.nombre);

const COLUMNAS: Record<string, string> = {
  "9/16": "grid-cols-3 sm:grid-cols-5 lg:grid-cols-8",
  "4/5": "grid-cols-3",
  "16/9": "grid-cols-1 sm:grid-cols-2",
};
const VARIOS = "grid-cols-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-4";

// Un archivo solo no se achica a una columna de la grilla.
function columnas(formato: string, cantidad: number) {
  if (cantidad === 1) return formato === "16/9" ? "grid-cols-1 max-w-[720px]" : "grid-cols-1 max-w-[280px]";
  return COLUMNAS[formato] ?? VARIOS;
}

const ENLACE = "inline-flex min-h-11 items-center text-[15px] font-medium text-azul transition-colors hover:text-cobalto";

function Miniatura({ archivo, formato, conNombre, alAbrir }: { archivo: Archivo; formato: string; conNombre: boolean; alAbrir: () => void }) {
  const [fallo, setFallo] = useState(false);
  const oscuro = fondoOscuro(archivo);
  return (
    <figure className="flex min-w-0 flex-col gap-2">
      <button
        type="button"
        onClick={alAbrir}
        aria-label={`Ver ${archivo.nombre}`}
        style={{ aspectRatio: formato.replace("/", " / ") }}
        className={`group relative block w-full cursor-zoom-in overflow-hidden rounded ring-1 ring-linea transition-shadow hover:ring-2 hover:ring-azul ${oscuro ? "bg-noche" : "bg-blanco"}`}
      >
        {fallo ? (
          // Drive tarda en generar la miniatura de un video recién subido: queda el botón de reproducir.
          archivo.tipo !== "video" && (
            <span className={`absolute inset-0 flex items-center justify-center p-2 text-center text-xs break-all ${oscuro ? "text-plata" : "text-gris"}`}>
              {archivo.nombre}
            </span>
          )
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={fuente(archivo, 640)}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setFallo(true)}
            className={`h-full w-full object-contain ${archivo.vista ? "p-[12%]" : ""}`}
          />
        )}
        {archivo.tipo === "video" && (
          <span aria-hidden className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blanco text-grafito transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-current"><path d="M7 4l13 8-13 8z" /></svg>
            </span>
          </span>
        )}
      </button>
      {conNombre && <figcaption className="truncate text-xs text-gris">{archivo.nombre}</figcaption>}
    </figure>
  );
}

function Copiar({ texto }: { texto: string }) {
  const [hecho, setHecho] = useState(false);
  return (
    <button
      type="button"
      className={ENLACE}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(texto);
          setHecho(true);
          setTimeout(() => setHecho(false), 2000);
        } catch {}
      }}
    >
      {hecho ? "Copiado" : "Copiar"}
    </button>
  );
}

function BloqueGrupo({ grupo, formato, conNombre, alAbrir }: { grupo: Grupo; formato: string; conNombre: boolean; alAbrir: (a: Archivo) => void }) {
  const visuales = grupo.archivos.filter(esVisual);
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <h3 className="text-base font-semibold">
        {grupo.nombre}
        {grupo.titulo && <span className="font-normal text-gris"> · {grupo.titulo}</span>}
      </h3>
      <div className={`grid gap-2 ${columnas(formato, visuales.length)}`}>
        {visuales.map((a) => (
          <Miniatura key={a.id} archivo={a} formato={formato} conNombre={conNombre} alAbrir={() => alAbrir(a)} />
        ))}
      </div>
      {grupo.texto && (
        <details className="group/texto">
          <summary className={`${ENLACE} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
            <span aria-hidden className="mr-2 inline-block transition-transform group-open/texto:rotate-90">›</span>
            Texto del posteo
          </summary>
          <div className="mt-1 flex flex-col gap-1 rounded bg-blanco p-4 ring-1 ring-linea">
            <p className="whitespace-pre-wrap text-[15px] leading-normal">{grupo.texto}</p>
            <div><Copiar texto={grupo.texto} /></div>
          </div>
        </details>
      )}
    </div>
  );
}

function BloqueSeccion({ seccion }: { seccion: Seccion }) {
  const [abierto, setAbierto] = useState<number | null>(null);
  const cerrar = useCallback(() => setAbierto(null), []);

  const { grupos, sueltos, formato } = seccion;
  const conNombre = formato === "1/1";
  const visuales = [...grupos.flatMap((g) => g.archivos), ...sueltos].filter(esVisual);
  const abrir = (a: Archivo) => setAbierto(visuales.findIndex((v) => v.id === a.id));
  const otros = sueltos.filter((a) => !esVisual(a));
  const sueltosVisuales = sueltos.filter(esVisual);

  if (!seccion.lista) {
    return (
      <section className="flex flex-col gap-1 border-t border-linea py-8">
        <h2 className="text-[clamp(1.5rem,3.4vw,32px)] font-extrabold leading-[1.05] text-gris">{seccion.titulo}</h2>
        <p className="text-[15px] text-gris">En preparación</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-6 border-t border-linea py-10">
      <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="flex min-w-0 flex-col gap-1">
          <h2 className="text-[clamp(1.5rem,3.4vw,32px)] font-extrabold leading-[1.05]">{seccion.titulo}</h2>
          {seccion.descripcion && <p className="max-w-[60ch] text-[15px] leading-normal text-gris">{seccion.descripcion}</p>}
        </div>
        {seccion.carpeta && (
          <a href={seccion.carpeta} target="_blank" rel="noopener" className={`${ENLACE} shrink-0`}>
            Abrir en Drive&nbsp;<span aria-hidden>→</span>
          </a>
        )}
      </header>

      {seccion.sinVista && (
        <p className="text-[15px] text-gris">La vista previa no cargó. Abrí la carpeta en Drive para ver los archivos.</p>
      )}

      {grupos.length > 0 && (
        <div className={`grid gap-10 ${formato === "4/5" ? "lg:grid-cols-2" : ""}`}>
          {grupos.map((g) => (
            <BloqueGrupo key={g.nombre} grupo={g} formato={formato} conNombre={conNombre} alAbrir={abrir} />
          ))}
        </div>
      )}

      {sueltosVisuales.length > 0 && (
        <div className={`grid gap-2 ${columnas(formato, sueltosVisuales.length)}`}>
          {sueltosVisuales.map((a) => (
            <Miniatura key={a.id} archivo={a} formato={formato} conNombre={conNombre} alAbrir={() => abrir(a)} />
          ))}
        </div>
      )}

      {otros.length > 0 && (
        <ul className="flex flex-col">
          {otros.map((a) => (
            <li key={a.id}>
              <a href={enDrive(a.id)} target="_blank" rel="noopener" className={`${ENLACE} break-all`}>
                {a.nombre}&nbsp;<span aria-hidden>→</span>
              </a>
            </li>
          ))}
        </ul>
      )}

      {abierto !== null && <Visor archivos={visuales} inicio={abierto} formato={formato} alCerrar={cerrar} />}
    </section>
  );
}

function Visor({ archivos, inicio, formato, alCerrar }: { archivos: Archivo[]; inicio: number; formato: string; alCerrar: () => void }) {
  const [i, setI] = useState(inicio);
  const [cargada, setCargada] = useState<string | null>(null);
  const botonCerrar = useRef<HTMLButtonElement>(null);
  const toqueX = useRef<number | null>(null);
  const total = archivos.length;
  const a = archivos[i];

  const mover = useCallback((d: number) => setI((n) => Math.min(total - 1, Math.max(0, n + d))), [total]);

  useEffect(() => {
    const previo = document.activeElement as HTMLElement | null;
    botonCerrar.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const teclas = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") alCerrar();
      else if (ev.key === "ArrowLeft") mover(-1);
      else if (ev.key === "ArrowRight") mover(1);
    };
    document.addEventListener("keydown", teclas);
    return () => {
      document.removeEventListener("keydown", teclas);
      document.body.style.overflow = overflow;
      previo?.focus();
    };
  }, [alCerrar, mover]);

  // En el celular van abajo, para no tapar la placa.
  const FLECHA = "absolute bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-grafito/80 text-2xl text-blanco transition-colors hover:bg-azul sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2";

  return (
    <div role="dialog" aria-modal="true" aria-label={a.nombre} className="fixed inset-0 z-[60] flex flex-col bg-[#0d1117]">
      <div className="flex min-h-14 items-center gap-4 px-4 text-blanco">
        <p className="min-w-0 flex-1 truncate text-sm">
          {total > 1 && <span className="mr-3 tabular-nums text-plata">{i + 1} / {total}</span>}
          {a.grupo ? `${a.grupo} · ` : ""}{a.nombre}
        </p>
        <a href={enDrive(a.id)} target="_blank" rel="noopener" className="inline-flex min-h-11 shrink-0 items-center text-sm font-medium text-azul-claro hover:text-blanco">
          Abrir en Drive&nbsp;<span aria-hidden>→</span>
        </a>
        <button ref={botonCerrar} type="button" onClick={alCerrar} aria-label="Cerrar" className="flex h-11 w-11 shrink-0 items-center justify-center text-2xl leading-none hover:text-azul-claro">
          ×
        </button>
      </div>

      <div
        className="relative min-h-0 flex-1 px-2 pb-2 sm:px-16 sm:pb-6"
        onTouchStart={(ev) => { toqueX.current = ev.touches[0].clientX; }}
        onTouchEnd={(ev) => {
          if (toqueX.current === null) return;
          const dx = ev.changedTouches[0].clientX - toqueX.current;
          toqueX.current = null;
          if (Math.abs(dx) > 50) mover(dx < 0 ? 1 : -1);
        }}
      >
        {a.tipo === "imagen" ? (
          <>
            {cargada !== a.id && (
              <p className="absolute inset-0 flex items-center justify-center text-sm text-plata">Cargando…</p>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={a.id}
              src={fuente(a, 1600)}
              alt={a.nombre}
              referrerPolicy="no-referrer"
              onLoad={() => setCargada(a.id)}
              className={`relative mx-auto h-full w-full object-contain ${a.vista ? `rounded p-[8%] ${fondoOscuro(a) ? "" : "bg-blanco"}` : ""}`}
            />
          </>
        ) : (
          // El reproductor toma la forma del video: uno vertical no se recorta en un marco ancho.
          <iframe
            key={a.id}
            src={reproductor(a.id)}
            title={a.nombre}
            allow="autoplay; fullscreen"
            allowFullScreen
            style={a.tipo === "video" ? { aspectRatio: formato.replace("/", " / ") } : undefined}
            className={`mx-auto block h-full max-w-full rounded bg-black ${a.tipo === "video" ? "" : "w-full"}`}
          />
        )}
        {i > 0 && (
          <button type="button" onClick={() => mover(-1)} aria-label="Anterior" className={`${FLECHA} left-2`}>‹</button>
        )}
        {i < total - 1 && (
          <button type="button" onClick={() => mover(1)} aria-label="Siguiente" className={`${FLECHA} right-2`}>›</button>
        )}
      </div>
    </div>
  );
}

export default function Entregas({ entrega }: { entrega: Entrega }) {
  const { cliente, secciones } = entrega;
  const listas = secciones.filter((s) => s.lista).length;
  return (
    <main id="main" className="mx-auto w-full max-w-[1200px] px-5 pb-12 pt-6 sm:px-12 sm:pt-10">
      <Wordmark className="text-2xl" />
      <header className="flex flex-col gap-3 pb-10 pt-10 sm:pt-14">
        <h1 className="text-[clamp(2.5rem,7vw,72px)] font-black uppercase leading-[0.93] tracking-[-0.045em]">{cliente}</h1>
        <p className="max-w-[52ch] text-base leading-normal text-gris">
          Cada entrega con su vista previa. Para bajarla, abrí su carpeta en Drive.
        </p>
        <p className="text-sm font-medium">Listas: {listas} de {secciones.length}</p>
      </header>
      {secciones.map((s) => (
        <BloqueSeccion key={s.titulo} seccion={s} />
      ))}
    </main>
  );
}
