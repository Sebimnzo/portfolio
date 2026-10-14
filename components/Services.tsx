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
      <div className="mx-auto grid max-w-[1552px] grid-cols-1 gap-12 px-5 py-9 sm:px-12 lg:grid-cols-[356px_1fr]">
        <div id="estudio" className="flex scroll-mt-24 flex-col gap-[18px]">
          <p className="font-mono text-[11px] uppercase text-azul-claro">{site.studioLabel}</p>
          <h2 className="text-[clamp(2rem,4vw,39px)] font-extrabold leading-[1.02]">
            {site.studioTitle}
          </h2>
          <p className="text-[15px] leading-[1.45] text-plata">{site.studioText}</p>
          <div className="flex items-center gap-3.5 pt-3.5">
            <Image
              src={founder.photo}
              alt={founder.name}
              width={80}
              height={88}
              className="h-[88px] w-20 shrink-0 object-cover"
            />
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
        </div>

        <div className="flex min-w-0 flex-col gap-5">
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

          {tab === "Servicios" ? (
            <div className="grid grid-cols-1 gap-x-7 gap-y-5 sm:grid-cols-2">
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
          ) : (
            <div className="grid grid-cols-1 gap-x-7 gap-y-5 sm:grid-cols-2">
              <Item title="Propósito" text={site.purpose} />
              {site.personality.map((p) => (
                <Item key={p.name} title={p.name} text={p.text} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
