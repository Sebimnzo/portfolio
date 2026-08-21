import Image from "next/image";
import { site } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-cream px-6 pb-16 pt-28 sm:min-h-screen sm:pb-6 sm:pt-24">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1000 1000"
      >
        {/* concentric sunburst / target, top right */}
        <circle cx="860" cy="150" r="240" fill="var(--color-mustard)" />
        <circle cx="860" cy="150" r="190" fill="none" stroke="var(--color-cream)" strokeWidth="14" />
        <circle cx="860" cy="150" r="140" fill="var(--color-rust)" />
        <circle cx="860" cy="150" r="90" fill="none" stroke="var(--color-cream)" strokeWidth="12" />
        <circle cx="860" cy="150" r="45" fill="var(--color-teal)" />

        <polygon points="1000,1000 1000,650 700,1000" fill="var(--color-teal)" />

        {/* spiral, bottom left */}
        <path
          d="M90 880 m0,-150 a150,150 0 1 1 -1,0 m-30,0 a120,120 0 1 0 1,0 m-25,0 a95,95 0 1 1 -1,0 m-20,0 a75,75 0 1 0 1,0"
          fill="none"
          stroke="var(--color-rust)"
          strokeWidth="14"
          strokeLinecap="round"
        />

        <rect x="-60" y="380" width="180" height="180" fill="var(--color-brick)" transform="rotate(15 30 470)" />

        {/* scattered dots for texture */}
        <circle cx="520" cy="80" r="16" fill="var(--color-rust)" opacity="0.8" />
        <circle cx="590" cy="40" r="9" fill="var(--color-teal)" opacity="0.8" />
        <circle cx="470" cy="900" r="22" fill="var(--color-teal)" opacity="0.6" />
        <circle cx="560" cy="950" r="12" fill="var(--color-mustard)" opacity="0.9" />
      </svg>
      <div className="relative mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-rust">
          {site.role}
        </p>
        <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
          <Image
            src="/profile.jpg"
            alt={site.name}
            width={88}
            height={88}
            priority
            className="h-16 w-16 shrink-0 rounded-full border-2 border-ink object-cover sm:h-22 sm:w-22"
          />
          <h1 className="min-w-0 max-w-3xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-7xl">
            {site.name}
          </h1>
        </div>
        <p className="mt-6 max-w-xl text-lg text-ink/80">{site.tagline}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton
            href="#trabajos"
            className="border-2 border-ink bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream hover:bg-rust hover:border-rust"
          >
            Ver trabajos
          </MagneticButton>
          <MagneticButton
            href="#contacto"
            className="border-2 border-ink bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:bg-ink hover:text-cream"
          >
            Contactarme
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
