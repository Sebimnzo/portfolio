import { site } from "@/lib/data";

const skills = ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Illustrator"];

export default function About() {
  return (
    <section id="sobre-mi" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Sobre mí</h2>
            <p className="mt-6 text-white/70">
              Soy {site.name}, {site.role.toLowerCase()} con base en {site.location}.
              Trabajo en la edición y el motion graphics de piezas para marcas,
              agencias y creadores, cuidando ritmo, narrativa y detalle visual en
              cada proyecto.
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
        </div>
      </div>
    </section>
  );
}
