"use client";

import { useRef, useState, type UIEvent } from "react";
import Image from "next/image";
import { categories, projects, site, type Project } from "@/lib/data";
import VideoThumb from "./VideoThumb";

const pad = (n: number) => String(n).padStart(2, "0");
const youtubeUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const categoryText = (p: Project) => (p.detail ? `${p.category} · ${p.detail}` : p.category);

export default function Works() {
  const [filter, setFilter] = useState<Project["category"] | null>(null);
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  // Mientras el carrusel se desplaza por un clic, el scroll no pisa la selección:
  // se guarda la posición destino y se libera al llegar (o tras un tiempo máximo).
  const targetRef = useRef<number | null>(null);
  const unlockTimer = useRef<number | undefined>(undefined);

  const visible = filter ? projects.filter((p) => p.category === filter) : projects;
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

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.max(0, Math.min(index, visible.length - 1));
    const card = track.children[i] as HTMLElement | undefined;
    if (!card) return;
    setActive(i);
    const target = Math.min(card.offsetLeft, track.scrollWidth - track.clientWidth);
    targetRef.current = target;
    window.clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(() => {
      // Si la persona desplazó el carrusel a mano mientras se movía, se toma la posición real.
      const moved = Math.abs(track.scrollLeft - target) >= 2;
      targetRef.current = null;
      if (moved) syncActive(track);
    }, 2000);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target, behavior: reduce ? "auto" : "smooth" });
  }

  function handleScroll(e: UIEvent<HTMLDivElement>) {
    const track = e.currentTarget;
    if (targetRef.current !== null) {
      if (Math.abs(track.scrollLeft - targetRef.current) < 2) targetRef.current = null;
      return;
    }
    syncActive(track);
  }

  function syncActive(track: HTMLDivElement) {
    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;
    const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
    const step = first.offsetWidth + 16;
    setActive(atEnd ? visible.length - 1 : Math.round(track.scrollLeft / step));
  }

  function selectFilter(key: Project["category"] | null) {
    setFilter(key);
    setActive(0);
    trackRef.current?.scrollTo({ left: 0 });
  }

  return (
    <section id="trabajos" className="scroll-mt-24 border-t border-linea">
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
                className={`-mb-px shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-sm transition-colors sm:px-6 ${
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

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto"
        >
          {visible.map((project) => (
            <article key={project.slug} className="w-[280px] shrink-0 snap-start sm:w-[352px]">
              <VideoThumb project={project} />
              <div className="mt-3.5 flex flex-col gap-[7px]">
                <h3 className="text-[19px] font-extrabold leading-[1.15]">
                  <a
                    href={youtubeUrl(project.youtubeId)}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-azul"
                  >
                    {project.title} <span aria-hidden>→</span>
                  </a>
                </h3>
                <p className="text-[13px] text-gris">{categoryText(project)}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <p className="font-mono text-xs text-azul">
              {pad(active + 1)} / {pad(visible.length)}
            </p>
            <div className="relative h-[3px] w-[110px] bg-linea sm:w-[248px]">
              <div
                className="absolute inset-y-0 left-0 bg-azul transition-[width] duration-300"
                style={{ width: `${((active + 1) / visible.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="hidden text-[13px] text-gris sm:block">Recorré los proyectos</p>
            {[
              { label: "Trabajo anterior", arrow: "←", to: active - 1, disabled: active === 0 },
              {
                label: "Trabajo siguiente",
                arrow: "→",
                to: active + 1,
                disabled: active === visible.length - 1,
              },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                aria-label={b.label}
                disabled={b.disabled}
                onClick={() => goTo(b.to)}
                className="flex size-10 items-center justify-center rounded-full border-2 border-grafito text-lg transition-colors hover:bg-grafito hover:text-blanco disabled:pointer-events-none disabled:opacity-30"
              >
                <span aria-hidden>{b.arrow}</span>
              </button>
            ))}
          </div>
        </div>

        <ul className="hidden grid-cols-7 gap-2 lg:grid">
          {visible.map((project, i) => (
            <li key={project.slug}>
              <button
                type="button"
                aria-current={i === active}
                onClick={() => goTo(i)}
                className={`flex h-[86px] w-full gap-2 rounded-[4px] border p-2 text-left transition-colors ${
                  i === active
                    ? "border-azul bg-humo"
                    : "border-linea bg-blanco hover:border-gris"
                }`}
              >
                <span className="relative size-11 shrink-0 overflow-hidden bg-grafito">
                  <Image
                    src={`https://i.ytimg.com/vi/${project.youtubeId}/hqdefault.jpg`}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="line-clamp-3 text-xs font-medium leading-[1.2]">
                    {project.title}
                  </span>
                  <span className="text-[10px] leading-[1.2] text-gris">
                    {categoryText(project)}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
