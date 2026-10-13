import Image from "next/image";
import { site } from "@/lib/data";
import Reveal from "./Reveal";

const tools = ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Illustrator"];
const personalityStyles = [
  "bg-blanco text-grafito",
  "bg-azul text-blanco",
  "bg-grafito text-blanco",
];

export default function About() {
  const { founder } = site;

  return (
    <section id="sobre-mi" className="scroll-mt-16 border-t-2 border-grafito bg-blanco px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-grafito pb-4">
            <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.045em]">
              Quiénes somos
            </h2>
            <span className="font-mono text-xs uppercase text-grafito/60">02 / Estudio</span>
          </div>
        </Reveal>

        <Reveal className="mt-10 grid grid-cols-1 border-2 border-grafito md:grid-cols-2">
          <div className="p-6 md:border-r-2 md:border-grafito">
            <p className="text-lg">{site.tagline}</p>
            <p className="mt-4 text-grafito/70">
              <span className="font-mono text-xs uppercase text-azul">Propósito — </span>
              {site.purpose}
            </p>
          </div>
          <ul className="border-t-2 border-grafito md:border-t-0">
            {site.services.map((service, i) => {
              const isLast = i === site.services.length - 1;
              return (
                <li
                  key={service}
                  className={`flex items-center justify-between px-6 py-4 text-sm font-extrabold uppercase ${
                    isLast ? "bg-azul text-blanco" : "border-b-2 border-grafito"
                  }`}
                >
                  {service}
                  <span className="font-mono text-xs font-normal">
                    {String.fromCharCode(65 + i)}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal className="mt-10 grid grid-cols-1 border-2 border-grafito md:grid-cols-3">
          {site.personality.map((trait, i) => (
            <div
              key={trait.name}
              className={`flex min-h-56 flex-col justify-between p-6 ${personalityStyles[i]} ${
                i > 0 ? "border-t-2 border-grafito md:border-t-0 md:border-l-2" : ""
              }`}
            >
              <span className="font-mono text-xs">/{String.fromCharCode(65 + i)}</span>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-[-0.045em]">
                  {trait.name}
                </h3>
                <p className="mt-2 text-sm opacity-80">{trait.text}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-6 border-2 border-grafito p-6 sm:flex-row sm:items-center">
            <Image
              src={founder.photo}
              alt={founder.name}
              width={120}
              height={120}
              className="h-24 w-24 shrink-0 object-cover sm:h-28 sm:w-28"
            />
            <div className="min-w-0 flex-1">
              <p className="font-mono text-xs uppercase text-azul">Fundador</p>
              <p className="mt-1 text-2xl font-black uppercase tracking-[-0.045em]">
                {founder.name}
              </p>
              <p className="text-sm text-grafito/70">{founder.title}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="border border-grafito/30 px-2 py-1 font-mono text-[11px] uppercase text-grafito/80"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noreferrer"
              className="self-start font-mono text-xs uppercase text-grafito transition-colors hover:text-azul sm:self-center"
            >
              LinkedIn <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
