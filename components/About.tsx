import Image from "next/image";
import { site } from "@/lib/data";
import Reveal from "./Reveal";

const skills = ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Illustrator"];

export default function About() {
  const { founder } = site;

  return (
    <section id="sobre-mi" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-medium text-white/40">02</span>
          <h2 className="font-display text-3xl text-white sm:text-4xl">El estudio</h2>
        </div>
        <Reveal className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="text-white/70">
              <span translate="no">{site.name}</span> es un estudio de edición de video
              y motion graphics con base en {site.location}. Hacemos spots, contenido
              para redes, videos institucionales y piezas animadas para marcas,
              agencias y creadores, cuidando ritmo, narrativa y detalle visual en cada
              proyecto.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-white/50">
              Herramientas
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal className="mt-12">
          <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 sm:max-w-xl">
            <Image
              src={founder.photo}
              alt={founder.name}
              width={96}
              height={96}
              className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-white/20 sm:h-24 sm:w-24"
            />
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                Founder
              </p>
              <p className="mt-1 text-lg font-semibold text-white">{founder.name}</p>
              <p className="text-sm text-white/60">{founder.title}</p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                LinkedIn <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
