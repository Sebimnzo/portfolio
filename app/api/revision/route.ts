import { NextResponse, type NextRequest } from "next/server";
import { claveValida, escribir, leer, type Nota } from "@/lib/revision";

// Puente entre la página de revisión y la planilla de Sebastián (lib/revision.ts).
// GET  ?clave=…&version=…              → notas de esa versión
// POST {accion:"crear", clave, nota}   → guarda una nota (el número lo pone el script)
// POST {accion:"marcar", clave, id, hecha} / {accion:"borrar", clave, id}

const privado = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" };
const mal = (status: number) => NextResponse.json({ ok: false }, { status, headers: privado });

export async function GET(req: NextRequest) {
  const clave = req.nextUrl.searchParams.get("clave") ?? "";
  const version = req.nextUrl.searchParams.get("version") ?? "";
  if (!claveValida(clave) || !version) return mal(400);
  try {
    const r = await leer<{ notas: Nota[] }>({ accion: "notas", clave, version });
    if (!r.ok) return mal(404);
    return NextResponse.json({ ok: true, notas: r.notas }, { headers: privado });
  } catch {
    return mal(502);
  }
}

export async function POST(req: NextRequest) {
  let cuerpo: Record<string, unknown>;
  try {
    cuerpo = await req.json();
  } catch {
    return mal(400);
  }
  const { accion, clave } = cuerpo;
  if (typeof clave !== "string" || !claveValida(clave)) return mal(400);
  if (accion !== "crear" && accion !== "marcar" && accion !== "borrar") return mal(400);
  try {
    const r = await escribir<Record<string, unknown>>(cuerpo);
    if (!r.ok) return mal(r.error === "clave" ? 404 : 400);
    return NextResponse.json(r, { headers: privado });
  } catch {
    return mal(502);
  }
}
