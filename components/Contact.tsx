import { site } from "@/lib/data";
import BriefForm from "./BriefForm";

export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 border-t border-linea">
      <div className="mx-auto grid max-w-[1552px] grid-cols-1 gap-10 px-5 py-14 sm:px-12 lg:grid-cols-[1fr_minmax(0,640px)] lg:gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="text-[clamp(2.25rem,5vw,56px)] font-extrabold leading-[1.02]">
            {site.contactHeadline}
          </h2>
          <p className="max-w-[46ch] text-[15px] leading-[1.5] text-gris">{site.contactText}</p>
          <a
            href={`mailto:${site.email}`}
            className="break-all text-[clamp(1.125rem,2vw,22px)] text-azul hover:text-cobalto"
          >
            {site.email} <span aria-hidden>→</span>
          </a>
        </div>
        <BriefForm />
      </div>
    </section>
  );
}
