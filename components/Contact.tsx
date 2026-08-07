import { site } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Contacto</h2>
      <p className="mt-4 max-w-xl text-white/60">
        ¿Tenés un proyecto en mente? Escribime y lo charlamos.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <MagneticButton
          href={`mailto:${site.email}`}
          className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:opacity-90"
        >
          {site.email}
        </MagneticButton>
        <MagneticButton
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Escribime por WhatsApp"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white hover:border-white/40"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.004 2c-5.514 0-9.997 4.478-9.997 9.997 0 1.762.462 3.484 1.34 5.002L2 22l5.13-1.345a9.96 9.96 0 0 0 4.874 1.243h.004c5.514 0 9.997-4.478 9.997-9.998C21.998 6.478 17.518 2 12.004 2zm0 18.163h-.003a8.153 8.153 0 0 1-4.157-1.14l-.298-.177-3.045.799.813-2.968-.194-.305a8.15 8.15 0 0 1-1.253-4.375c0-4.508 3.669-8.176 8.18-8.176 2.186 0 4.24.852 5.785 2.398a8.13 8.13 0 0 1 2.394 5.785c0 4.508-3.67 8.16-8.222 8.16z" />
          </svg>
          WhatsApp
        </MagneticButton>
      </div>
      <ul className="mt-8 flex flex-wrap gap-6 text-sm text-white/60">
        {site.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
