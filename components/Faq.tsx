import { site } from "@/lib/data";

// Preguntas visibles; las mismas se publican como FAQPage en StructuredData.
export default function Faq() {
  return (
    <section id="preguntas" aria-labelledby="faq-title" className="scroll-mt-24">
      <div className="mx-auto grid max-w-[1552px] grid-cols-1 gap-8 px-5 py-14 sm:px-12 lg:grid-cols-[380px_1fr] lg:gap-12">
        <h2
          id="faq-title"
          className="text-[clamp(1.75rem,4vw,38px)] font-extrabold leading-[1.05]"
        >
          {site.faqTitle}
        </h2>
        <div>
          {site.faq.map((item) => (
            <details key={item.q} className="group border-t border-linea last:border-b">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 transition-colors hover:text-azul [&::-webkit-details-marker]:hidden">
                <h3 className="text-[19px] font-extrabold leading-[1.2]">{item.q}</h3>
                <span
                  aria-hidden
                  className="relative mt-1 size-4 shrink-0 transition-transform duration-200 group-open:rotate-45"
                >
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-current" />
                  <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-current" />
                </span>
              </summary>
              <p className="max-w-[68ch] pb-6 text-[15px] leading-[1.55] text-gris">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
