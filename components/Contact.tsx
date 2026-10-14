import { site } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24">
      <div className="mx-auto grid max-w-[1552px] grid-cols-1 gap-8 px-5 py-14 sm:px-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="text-[clamp(2.25rem,5vw,56px)] font-extrabold leading-[1.02]">
            {site.contactHeadline}
          </h2>
          <p className="mt-3 text-[15px] text-gris">{site.contactText}</p>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href={`mailto:${site.email}`}
            className="break-all text-[clamp(1.125rem,2vw,22px)] text-azul hover:text-cobalto"
          >
            {site.email} <span aria-hidden>→</span>
          </a>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Pedido de propuesta")}`}
              className="rounded bg-azul px-4 py-2.5 text-sm font-medium text-blanco transition-colors hover:bg-cobalto"
            >
              Pedir propuesta
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium transition-colors hover:text-azul"
            >
              WhatsApp <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
