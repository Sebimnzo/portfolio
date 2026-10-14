import { iconMark } from "@/lib/icon-mark";

// Favicon "M.": 32 px para la pestaña del navegador y 192 px para Android.
// app/favicon.ico es el mismo dibujo (16, 32 y 48 px) para quien pide /favicon.ico.
const sizes = [32, 192];

export function generateImageMetadata() {
  return sizes.map((px) => ({
    id: String(px),
    contentType: "image/png",
    size: { width: px, height: px },
  }));
}

export default async function Icon({ id }: { id: Promise<string> }) {
  return iconMark(Number(await id), 1.18);
}
