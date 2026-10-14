"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { categories, projects, site, type Project } from "@/lib/data";
import VideoModal from "./VideoModal";

const pad = (n: number) => String(n).padStart(2, "0");
const youtubeUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const categoryText = (p: Project) => (p.detail ? `${p.category} · ${p.detail}` : p.category);
// Miniatura grande: los verticales tienen la de 9:16 (960 × 1920), los horizontales la de 16:9.
const thumbnail = (p: Project) =>
  `https://i.ytimg.com/vi/${p.youtubeId}/${p.orientation === "vertical" ? "oardefault" : "maxresdefault"}.jpg`;

// Curva del carrusel: cuanto más lejos del centro, más gira la tarjeta hacia
// adentro y más grande se ve, como si las tarjetas rodearan a quien mira.
const MAX_ROTATE = 30; // grados en el borde
const MAX_GROW = 0.24; // escala extra en el borde
// Con 4 o más trabajos la franja es infinita: se dibuja 3 veces y, cuando el
// scroll se acerca a un extremo, salta una vuelta entera (no se nota porque
// las copias son idénticas). Así siempre está llena de punta a punta.
const LOOP_MIN = 4;

export default function Works() {
  const [filter, setFilter] = useState<Project["category"] | null>(null);
  const [active, setActive] = useState(0);
  // Posición de la tarjeta centrada dentro de la franja (incluye las copias).
  const slot = useRef(0);
  const [centered, setCentered] = useState(0);
  // Destino de un desplazamiento en curso: los clics rápidos en las flechas
  // suman pasos desde acá y no desde la tarjeta que pasa por el centro.
  const target = useRef<number | null>(null);
  const idle = useRef<number | undefined>(undefined);
  const [playing, setPlaying] = useState<Project | null>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const frame = useRef(0);
  // Arrastre con mouse: posición inicial y si ya se movió lo suficiente para no contar como clic.
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);

  const visible = filter ? projects.filter((p) => p.category === filter) : projects;
  const n = visible.length;
  const loop = n >= LOOP_MIN;
  const cards = loop ? [...visible, ...visible, ...visible] : visible;
  const current = visible[Math.min(active, n - 1)];
  const tabs = [
    { key: null, label: "Todos", count: projects.length },
    ...categories
      .map((c) => ({
        key: c.key,
        label: c.label,
        count: projects.filter((p) => p.category === c.key).length,
      }))
      .filter((t) => t.count > 0),
  ];

  const layout = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.clientWidth / 2;
    const center = track.scrollLeft + half;
    let closest = 0;
    let closestDistance = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const card = child as HTMLElement;
      const offset = card.offsetLeft + card.offsetWidth / 2 - center;
      const d = Math.max(-1.25, Math.min(1.25, offset / half));
      card.style.transform = `perspective(1100px) rotateY(${(-d * MAX_ROTATE).toFixed(2)}deg) scale(${(1 + MAX_GROW * d * d).toFixed(3)})`;
      card.style.zIndex = String(10 - Math.round(Math.abs(d) * 5));
      if (Math.abs(offset) < closestDistance) {
        closestDistance = Math.abs(offset);
        closest = i;
      }
    });
    slot.current = closest;
    setCentered(closest);
    setActive(closest % track.children.length % n);
  }, [n]);

  // Ancho de una vuelta completa (de la tarjeta 1 a su primera copia).
  const loopWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track || !loop) return 0;
    const a = track.children[0] as HTMLElement;
    const b = track.children[n] as HTMLElement;
    return b.offsetLeft - a.offsetLeft;
  }, [loop, n]);

  const centerOn = useCallback((k: number, smooth: boolean) => {
    const track = trackRef.current;
    const card = track?.children[k] as HTMLElement | undefined;
    if (!track || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.current = smooth && !reduce ? k : null;
    track.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2,
      behavior: smooth && !reduce ? "smooth" : "auto",
    });
  }, []);

  const onScroll = useCallback(() => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(layout);
    // Al quedar quieto, si se alejó de la copia del medio, salta una vuelta.
    window.clearTimeout(idle.current);
    idle.current = window.setTimeout(() => {
      target.current = null;
      const track = trackRef.current;
      const w = loopWidth();
      if (!track || !w || drag.current) return;
      if (track.scrollLeft < w * 0.5) track.scrollLeft += w;
      else if (track.scrollLeft > w * 1.5) track.scrollLeft -= w;
    }, 160);
  }, [layout, loopWidth]);

  useEffect(() => {
    // Arranca con el primer trabajo de la copia del medio en el centro.
    centerOn(loop ? n : 0, false);
    layout();
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame.current);
      window.clearTimeout(idle.current);
    };
  }, [layout, onScroll, centerOn, loop, n, filter]);

  // Lleva el trabajo i al centro, usando la copia más cercana a la actual.
  function goTo(i: number) {
    if (!loop) return centerOn(Math.max(0, Math.min(i, n - 1)), true);
    const from = target.current ?? slot.current;
    const candidates = [i, i + n, i + 2 * n];
    const k = candidates.reduce((a, b) => (Math.abs(b - from) < Math.abs(a - from) ? b : a));
    centerOn(k, true);
  }

  function step(delta: number) {
    const k = (target.current ?? slot.current) + delta;
    if (loop) centerOn(Math.max(0, Math.min(k, 3 * n - 1)), true);
    else goTo(active + delta);
  }

  function selectFilter(key: Project["category"] | null) {
    setFilter(key);
    setActive(0);
  }

  function onCardClick(k: number) {
    if (drag.current?.moved) return;
    if (k === slot.current) setPlaying(cards[k]);
    else centerOn(k, true);
  }

  function dragStart(e: PointerEvent<HTMLUListElement>) {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    drag.current = { x: e.clientX, left: trackRef.current.scrollLeft, moved: false };
  }

  function dragMove(e: PointerEvent<HTMLUListElement>) {
    const track = trackRef.current;
    if (!drag.current || !track) return;
    const dx = e.clientX - drag.current.x;
    if (!drag.current.moved && Math.abs(dx) < 6) return;
    if (!drag.current.moved) {
      drag.current.moved = true;
      track.setPointerCapture(e.pointerId);
      track.dataset.dragging = "true";
    }
    track.scrollLeft = drag.current.left - dx;
  }

  function dragEnd() {
    const track = trackRef.current;
    if (!drag.current || !track) return;
    const wasDragging = drag.current.moved;
    delete track.dataset.dragging;
    if (wasDragging) centerOn(slot.current, true);
    // El clic llega después del pointerup: se libera en el próximo ciclo.
    setTimeout(() => (drag.current = null), 0);
  }

  return (
    <section id="trabajos" className="scroll-mt-24 overflow-hidden border-t border-linea">
      <div className="mx-auto flex max-w-[1552px] flex-col gap-[18px] px-5 pb-9 pt-7 sm:px-12">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-[clamp(1.75rem,4vw,38px)] font-extrabold leading-tight">
            {site.worksTitle}
          </h2>
          <p className="font-mono text-[11px] uppercase text-gris">
            {projects.length} proyectos / distintos formatos
          </p>
        </div>

        <div className="no-scrollbar flex overflow-x-auto border-b border-linea">
          {tabs.map((tab) => {
            const selected = filter === tab.key;
            return (
              <button
                key={tab.label}
                type="button"
                aria-pressed={selected}
                onClick={() => selectFilter(tab.key)}
                className={`-mb-px min-h-12 shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-sm transition-colors sm:px-6 ${
                  selected
                    ? "border-azul font-semibold text-azul"
                    : "border-transparent text-gris hover:text-grafito"
                }`}
              >
                {tab.label} · {tab.count}
              </button>
            );
          })}
        </div>
      </div>

      <ul
        ref={trackRef}
        onScroll={onScroll}
        onPointerDown={dragStart}
        onPointerMove={dragMove}
        onPointerUp={dragEnd}
        onPointerCancel={dragEnd}
        aria-label="Trabajos"
        className="curve-track no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto py-10 select-none data-[dragging]:cursor-grabbing data-[dragging]:snap-none sm:gap-4 lg:cursor-grab"
      >
        {cards.map((project, k) => {
          const isActive = k === centered;
          // Las copias del loop no se anuncian ni reciben foco: solo la del medio.
          const copy = loop && Math.floor(k / n) !== 1;
          return (
            <li
              key={`${project.slug}-${k}`}
              aria-hidden={copy || undefined}
              className="shrink-0 snap-center will-change-transform"
            >
              <button
                type="button"
                tabIndex={copy ? -1 : undefined}
                onClick={() => onCardClick(k)}
                onFocus={() => !copy && centerOn(k, true)}
                aria-label={`${isActive ? "Reproducir" : "Ver"} ${project.title}: ${categoryText(project)}`}
                className="group/card relative block aspect-[3/4] w-full overflow-hidden rounded-[22px] bg-grafito transition-transform duration-300 ease-out hover:-translate-y-1.5"
              >
                <Image
                  src={thumbnail(project)}
                  alt={project.description}
                  fill
                  draggable={false}
                  loading={loop && Math.abs(k - n) < 4 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 250px, 190px"
                  className="object-cover transition-transform duration-500 group-hover/card:scale-[1.04]"
                />
                <span
                  className={`absolute bottom-3 left-3 flex size-10 items-center justify-center bg-azul transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-0.5 size-5 fill-blanco">
                    <path d="M7 4v16l13-8z" />
                  </svg>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mx-auto flex max-w-[1552px] flex-col gap-[18px] px-5 pb-9 sm:px-12">
        {current && (
          <div aria-live="polite" className="mx-auto flex max-w-[560px] flex-col items-center gap-2 text-center">
            <h3 className="text-[clamp(1.25rem,2.4vw,26px)] font-extrabold leading-[1.15]">
              {current.title}
            </h3>
            <p className="text-[13px] text-gris">{categoryText(current)}</p>
            <p className="text-[15px] leading-[1.45] text-gris">{current.description}</p>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-x-6">
              <button
                type="button"
                onClick={() => setPlaying(current)}
                className="inline-flex min-h-12 items-center gap-3 text-sm font-medium text-azul hover:text-cobalto"
              >
                <span aria-hidden className="h-[3px] w-8 bg-azul" />
                Reproducir acá
              </button>
              <a
                href={youtubeUrl(current.youtubeId)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center text-sm text-gris hover:text-grafito"
              >
                Ver en YouTube <span aria-hidden>&nbsp;→</span>
              </a>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <p className="font-mono text-xs text-azul">
              {pad(active + 1)} / {pad(n)}
            </p>
            <div className="relative h-[3px] w-[110px] bg-linea sm:w-[248px]">
              <div
                className="absolute inset-y-0 left-0 bg-azul transition-[width] duration-300"
                style={{ width: `${((active + 1) / n) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="hidden text-[13px] text-gris sm:block">Arrastrá o recorré los proyectos</p>
            {[
              { label: "Trabajo anterior", arrow: "←", delta: -1, disabled: !loop && active === 0 },
              {
                label: "Trabajo siguiente",
                arrow: "→",
                delta: 1,
                disabled: !loop && active === n - 1,
              },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                aria-label={b.label}
                disabled={b.disabled}
                onClick={() => step(b.delta)}
                className="flex size-12 items-center justify-center rounded-full border-2 border-grafito text-lg transition-[background-color,color,transform] hover:bg-grafito hover:text-blanco active:scale-95 disabled:pointer-events-none disabled:opacity-30"
              >
                <span aria-hidden>{b.arrow}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <VideoModal project={playing} onClose={() => setPlaying(null)} />
    </section>
  );
}
