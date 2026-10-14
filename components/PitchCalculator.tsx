"use client";

import { useId, useState } from "react";

const pitches = [1.5, 1.9, 2.5, 2.9, 3.9, 4.8];

// Divide por el máximo común divisor para mostrar la proporción (ej. 5:2).
function ratio(w: number, h: number) {
  const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
  const g = gcd(w, h) || 1;
  const rw = w / g;
  const rh = h / g;
  if (rw <= 64 && rh <= 64) return `${rw}:${rh}`;
  return `${(w / h).toLocaleString("es-AR", { maximumFractionDigits: 2 })}:1`;
}

const parse = (v: string) => Number(v.replace(",", "."));

// Calculadora de la guía: resolución = medida en mm ÷ pixel pitch.
export default function PitchCalculator() {
  const id = useId();
  const [width, setWidth] = useState("5");
  const [height, setHeight] = useState("2");
  const [pitch, setPitch] = useState("2,5");

  const w = parse(width);
  const h = parse(height);
  const p = parse(pitch);
  const valid = w > 0 && h > 0 && p > 0;
  const px = valid ? Math.round((w * 1000) / p) : 0;
  const py = valid ? Math.round((h * 1000) / p) : 0;

  const field =
    "mt-2 w-full rounded border border-linea bg-blanco px-3 py-3 text-lg font-extrabold focus-visible:border-azul focus-visible:outline-none";

  return (
    <div className="rounded-[18px] bg-humo p-5 sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <label className="text-sm font-medium" htmlFor={`${id}-w`}>
          Ancho de la pantalla (m)
          <input
            id={`${id}-w`}
            inputMode="decimal"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className={field}
          />
        </label>
        <label className="text-sm font-medium" htmlFor={`${id}-h`}>
          Alto de la pantalla (m)
          <input
            id={`${id}-h`}
            inputMode="decimal"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={field}
          />
        </label>
        <label className="text-sm font-medium" htmlFor={`${id}-p`}>
          Pixel pitch (mm)
          <input
            id={`${id}-p`}
            inputMode="decimal"
            list={`${id}-pitches`}
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            className={field}
          />
          <datalist id={`${id}-pitches`}>
            {pitches.map((v) => (
              <option key={v} value={String(v).replace(".", ",")} />
            ))}
          </datalist>
        </label>
      </div>

      <dl aria-live="polite" className="mt-6 grid grid-cols-1 gap-4 border-t border-linea pt-6 sm:grid-cols-3">
        <div>
          <dt className="font-mono text-[11px] uppercase text-gris">Resolución para animar</dt>
          <dd className="mt-1 text-[clamp(1.75rem,4vw,40px)] font-black leading-none tracking-[-0.03em] text-azul">
            {valid ? `${px} × ${py} px` : "—"}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase text-gris">Proporción</dt>
          <dd className="mt-1 text-2xl font-extrabold">{valid ? ratio(px, py) : "—"}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase text-gris">Distancia mínima de visión</dt>
          <dd className="mt-1 text-2xl font-extrabold">
            {valid ? `≈ ${p.toLocaleString("es-AR")} m` : "—"}
          </dd>
        </div>
      </dl>
      <p className="mt-4 text-[13px] leading-[1.45] text-gris">
        Es un cálculo nominal. La medida final la da el mapa de píxeles del proveedor, porque la
        pantalla se arma con gabinetes de tamaño fijo.
      </p>
    </div>
  );
}
