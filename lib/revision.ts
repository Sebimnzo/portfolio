// Páginas de revisión para clientes (/revision/<clave>).
// Las piezas, las claves y las notas no viven en este repositorio (es público):
// están en la planilla «Revisiones Mansalva» de Sebastián, detrás de un Apps
// Script publicado como app web. El sitio le habla solo desde el servidor
// (app/api/revision/route.ts y la página), así el navegador del cliente nunca
// sale de mansalvadesign.com. Sin una clave que exista en la hoja «piezas», el
// script no devuelve ni guarda nada.
const SCRIPT_URL =
  process.env.REVISION_SCRIPT_URL ??
  "https://script.google.com/macros/s/AKfycbx8M-k0vaUFJ4ZO9GCdn5Rkl1D0vhqna9C8_smvPhdW5yVGFk22o578PNfM4hT3mNtiBQ/exec";

export type Version = {
  titulo?: string;
  video: string;
  fps: number;
  ancho: number;
  alto: number;
  duracion: number;
  escenas: { n: string; t: number }[];
  orden?: number;
};

export type Pieza = {
  cliente: string;
  titulo: string;
  actual: string;
  versiones: Record<string, Version>;
};

export type Nota = {
  id: string;
  version: string;
  escena: string;
  n: number;
  frame: number;
  tiempo: number;
  x: number;
  y: number;
  px: [number, number];
  texto: string;
  hecha: boolean;
  autor: string;
  creado: string;
};

// 20 a 64 letras, números, guiones: lo que genera nueva_clave() en el script.
export const claveValida = (clave: string) => /^[A-Za-z0-9_-]{20,64}$/.test(clave);

type Respuesta<T> = ({ ok: true } & T) | { ok: false; error?: string };

export async function leer<T>(params: Record<string, string>): Promise<Respuesta<T>> {
  const url = `${SCRIPT_URL}?${new URLSearchParams(params)}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return { ok: false, error: `http ${res.status}` };
  return res.json();
}

export async function escribir<T>(cuerpo: Record<string, unknown>): Promise<Respuesta<T>> {
  // Apps Script responde un 302 a googleusercontent.com; fetch lo sigue solo.
  // text/plain evita que Google pida una verificación previa del navegador.
  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(cuerpo),
    cache: "no-store",
  });
  if (!res.ok) return { ok: false, error: `http ${res.status}` };
  return res.json();
}

export async function pieza(clave: string): Promise<Pieza | null> {
  if (!claveValida(clave)) return null;
  try {
    const r = await leer<{ pieza: Pieza }>({ accion: "pieza", clave });
    return r.ok ? r.pieza : null;
  } catch {
    return null;
  }
}
