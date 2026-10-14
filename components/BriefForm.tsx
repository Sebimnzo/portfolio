"use client";

import { useId, useRef, type FormEvent } from "react";
import { site } from "@/lib/data";

const screens = ["Pantalla LED", "Videowall", "Tótem digital", "Varias pantallas", "Todavía no sé"];

// Brief para pedir propuesta. No guarda nada: arma un mail o un WhatsApp con
// las respuestas y lo abre en la app de la persona.
export default function BriefForm() {
  const id = useId();
  const form = useRef<HTMLFormElement>(null);

  function message() {
    const data = new FormData(form.current!);
    const line = (label: string, key: string) => {
      const v = String(data.get(key) ?? "").trim();
      return v ? `${label}: ${v}` : "";
    };
    return [
      "Hola, quiero pedir una propuesta.",
      "",
      line("Nombre / empresa", "nombre"),
      line("Feria y fecha", "feria"),
      line("Tipo de pantalla", "pantalla"),
      line("Medidas o resolución", "medidas"),
      line("Cantidad de piezas", "piezas"),
      line("Detalle", "detalle"),
    ]
      .filter((l, i) => i < 2 || l)
      .join("\n");
  }

  function byEmail(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Pedido de propuesta");
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(message())}`;
  }

  function byWhatsApp() {
    if (!form.current?.reportValidity()) return;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message())}`, "_blank", "noopener");
  }

  const label = "flex flex-col gap-2 text-sm font-medium";
  const input =
    "min-h-12 rounded border border-linea bg-blanco px-3 py-2.5 text-[15px] font-normal focus-visible:border-azul focus-visible:outline-none";

  return (
    <form ref={form} onSubmit={byEmail} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <label className={label} htmlFor={`${id}-nombre`}>
        Nombre o empresa
        <input id={`${id}-nombre`} name="nombre" required autoComplete="organization" className={input} />
      </label>
      <label className={label} htmlFor={`${id}-feria`}>
        Feria y fecha
        <input id={`${id}-feria`} name="feria" placeholder="Ej.: Expoagro, marzo" className={input} />
      </label>
      <label className={label} htmlFor={`${id}-pantalla`}>
        Tipo de pantalla
        <select id={`${id}-pantalla`} name="pantalla" defaultValue="" className={input}>
          <option value="" disabled>
            Elegí una opción
          </option>
          {screens.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className={label} htmlFor={`${id}-medidas`}>
        Medidas o resolución
        <input id={`${id}-medidas`} name="medidas" placeholder="Ej.: 5 × 2 m, pitch 2,5" className={input} />
      </label>
      <label className={label} htmlFor={`${id}-piezas`}>
        Cantidad de piezas
        <input id={`${id}-piezas`} name="piezas" inputMode="numeric" placeholder="Ej.: 3 loops" className={input} />
      </label>
      <label className={`${label} sm:col-span-2`} htmlFor={`${id}-detalle`}>
        Contanos la idea
        <textarea id={`${id}-detalle`} name="detalle" rows={3} className={`${input} resize-y`} />
      </label>
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center rounded bg-azul px-5 text-sm font-medium text-blanco transition-[background-color,transform] hover:bg-cobalto active:scale-[0.97]"
        >
          Enviar por mail
        </button>
        <button
          type="button"
          onClick={byWhatsApp}
          className="inline-flex min-h-12 items-center text-sm font-medium transition-colors hover:text-azul"
        >
          Enviar por WhatsApp <span aria-hidden>&nbsp;→</span>
        </button>
      </div>
    </form>
  );
}
