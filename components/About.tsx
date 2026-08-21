import { site } from "@/lib/data";

const skills = ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Illustrator"];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative scroll-mt-24 overflow-hidden border-y-2 border-ink bg-mustard px-6 py-24"
    >
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -left-10 -z-0 h-56 w-56"
        viewBox="0 0 200 200"
      >
        <polygon points="0,200 0,0 200,200" fill="var(--color-brick)" opacity="0.85" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 -z-0 h-72 w-72"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="100" fill="var(--color-teal)" opacity="0.9" />
        <circle cx="100" cy="100" r="72" fill="none" stroke="var(--color-cream)" strokeWidth="9" />
        <circle cx="100" cy="100" r="46" fill="var(--color-brick)" />
        <circle cx="100" cy="100" r="20" fill="var(--color-cream)" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute right-10 bottom-10 -z-0 hidden h-20 w-20 md:block"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-ink)" strokeWidth="4" opacity="0.5" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="var(--color-ink)" strokeWidth="4" opacity="0.5" />
        <circle cx="50" cy="50" r="14" fill="none" stroke="var(--color-ink)" strokeWidth="4" opacity="0.5" />
      </svg>
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-baseline gap-3 border-t-2 border-ink/30 pt-4">
          <span className="text-sm font-bold text-ink/50">02</span>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
            Sobre mí
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="mt-6 text-ink/80">
              Soy {site.name}, {site.role.toLowerCase()} con base en {site.location}.
              Trabajo en la edición y el motion graphics de piezas para marcas,
              agencias y creadores, cuidando ritmo, narrativa y detalle visual en
              cada proyecto.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink/70">
              Herramientas
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border-2 border-ink bg-cream px-4 py-2 text-sm font-semibold text-ink"
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
