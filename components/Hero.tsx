import Image from "next/image";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, rgba(124,58,237,0.25), transparent 70%)," +
            "radial-gradient(40% 40% at 80% 70%, rgba(6,182,212,0.15), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
          {site.role}
        </p>
        <div className="mt-4 flex items-center gap-5">
          <Image
            src="/profile.jpg"
            alt={site.name}
            width={88}
            height={88}
            priority
            className="h-16 w-16 rounded-full object-cover ring-2 ring-white/20 sm:h-22 sm:w-22"
          />
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] text-white sm:text-7xl">
            {site.name}
          </h1>
        </div>
        <p className="mt-6 max-w-xl text-lg text-white/70">{site.tagline}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#trabajos"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Ver trabajos
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
          >
            Contactarme
          </a>
        </div>
      </div>
    </section>
  );
}
