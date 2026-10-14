"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";
import Tilt from "./Tilt";

const tabs = ["Servicios", "El estudio"] as const;

function Item({ title, text, href }: { title: string; text: string; href?: string }) {
  return (
    <Tilt className="group/item">
      <div className="tilt-rotate border-t border-linea-oscura pt-[18px] transition-colors [--tilt:7deg] group-hover/item:border-azul-claro">
        <h3 className="text-[19px] font-extrabold text-blanco">
          {href ? (
            <Link href={href} className="hover:text-azul-claro">
              {title} <span aria-hidden className="text-azul-claro">→</span>
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className="mt-2 text-[13px] leading-[1.45] text-plata">{text}</p>
      </div>
    </Tilt>
  );
}

export default function Services() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Servicios");
  const { founder } = site;

  return (
    <section id="servicios" className="scroll-mt-24 bg-grafito text-blanco">
      {/* En escritorio la foto del fundador ocupa toda la columna izquierda y se
          recorta para medir lo mismo que el texto y los servicios de la derecha. */}
      <div className="mx-auto grid max-w-[1552px] grid-cols-1 gap-x-12 gap-y-10 px-5 py-9 sm:px-12 lg:grid-cols-[356px_1fr] lg:py-14">
        <div id="estudio" className="flex scroll-mt-24 flex-col gap-[18px] lg:col-start-2 lg:row-start-1">
          <p className="font-mono text-[11px] uppercase text-azul-claro">{site.studioLabel}</p>
          <h2 className="text-[clamp(2rem,4vw,39px)] font-extrabold leading-[1.02]">
            {site.studioTitle}
          </h2>
          <p className="max-w-[62ch] text-[15px] leading-[1.45] text-plata">{site.studioText}</p>
        </div>

        <div className="flex flex-col gap-3.5 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <figure className="flex flex-col gap-3.5 lg:flex-1">
            <div className="relative aspect-[3/4] w-full max-w-[356px] overflow-hidden lg:aspect-auto lg:min-h-[400px] lg:flex-1">
              <Image
                src={founder.photo}
                alt={founder.photoAlt}
                fill
                sizes="(min-width: 640px) 356px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="font-mono text-[11px] text-plata">{founder.photoCaption}</figcaption>
          </figure>
          <div className="flex min-w-0 flex-col gap-1.5">
            <p className="font-extrabold">{founder.name}</p>
            <p className="text-xs leading-[1.35] text-plata">Fundador · {founder.title}</p>
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-azul-claro hover:underline"
            >
              Conoceme en LinkedIn <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-5 lg:col-start-2 lg:row-start-2">
          <div className="no-scrollbar flex overflow-x-auto border-b border-linea-oscura">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={tab === t}
                onClick={() => setTab(t)}
                className={`-mb-px shrink-0 border-b-2 px-6 py-3 text-sm transition-colors ${
                  tab === t
                    ? "border-azul-claro font-semibold text-azul-claro"
                    : "border-transparent text-plata hover:text-blanco"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Las dos pestañas ocupan la misma celda: la oculta guarda el lugar,
              así el alto (y la foto) no cambia al pasar de una a otra. */}
          <div className="grid">
            <div
              className={`col-start-1 row-start-1 grid grid-cols-1 content-start gap-x-7 gap-y-5 sm:grid-cols-2 ${
                tab === "Servicios" ? "" : "invisible"
              }`}
            >
              {site.services.map((s) => (
                <Item
                  key={s.name}
                  title={s.name}
                  text={s.text}
                  href={s.name === "Stands de feria" ? "/videos-para-stands" : "/motion-graphics"}
                />
              ))}
              <div className="border-t border-linea-oscura pt-[18px]">
                <p className="font-medium">¿No sabés qué formato necesitás?</p>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Quiero contarles una idea")}`}
                  className="mt-3 inline-block text-[15px] text-azul-claro hover:underline"
                >
                  Contanos tu idea y lo pensamos juntos <span aria-hidden>→</span>
                </a>
              </div>
            </div>
            <div
              className={`col-start-1 row-start-1 grid grid-cols-1 content-start gap-x-7 gap-y-5 sm:grid-cols-2 ${
                tab === "El estudio" ? "" : "invisible"
              }`}
            >
              <Item title="Propósito" text={site.purpose} />
              {site.personality.map((p) => (
                <Item key={p.name} title={p.name} text={p.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
