import Image from "next/image";
import { site } from "@/lib/data";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden px-6 pb-16 pt-28 sm:min-h-screen sm:pb-6 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 15%, rgba(124,58,237,0.32), transparent 70%)," +
            "radial-gradient(45% 45% at 88% 78%, rgba(6,182,212,0.20), transparent 70%)," +
            "radial-gradient(35% 35% at 6% 88%, rgba(236,72,153,0.16), transparent 70%)," +
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 100% 100%, 100% 100%, 44px 44px, 44px 44px",
          WebkitMaskImage:
            "radial-gradient(80% 70% at 50% 30%, black 40%, transparent 100%)",
          maskImage: "radial-gradient(80% 70% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
          {site.role}
        </p>
        <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
          <Image
            src="/profile.jpg"
            alt={site.name}
            width={88}
            height={88}
            priority
            className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-white/20 sm:h-22 sm:w-22"
          />
          <h1 className="min-w-0 max-w-3xl font-display text-4xl leading-[1.05] text-white sm:text-7xl">
            {site.name}
          </h1>
        </div>
        <p className="mt-6 max-w-xl text-lg text-white/70">{site.tagline}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton
            href="#trabajos"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
          >
            Ver trabajos
          </MagneticButton>
          <MagneticButton
            href="#contacto"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white/40"
          >
            Contactarme
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
