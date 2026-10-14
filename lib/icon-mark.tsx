import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// "M." del wordmark (Archivo Black + punto cuadrado azul) sobre grafito, para
// el favicon y el ícono de iOS. Las medidas están pensadas a 180 px y escalan;
// `zoom` agranda la marca dentro del cuadro (en la pestaña conviene más llena).
export async function iconMark(px: number, zoom = 1) {
  const black = await readFile(join(process.cwd(), "assets/fonts/Archivo-Black.ttf"));
  const u = (px / 180) * zoom;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#292d33",
          color: "#ffffff",
          fontFamily: "Archivo",
          fontSize: 118 * u,
          fontWeight: 900,
          letterSpacing: -5 * u,
        }}
      >
        {/* marginBottom apoya el punto en la base de la M (no en el borde de la
            línea de texto); marginRight compensa el margen interno de la M para centrar. */}
        <div style={{ display: "flex", alignItems: "flex-end", lineHeight: 0.8, marginRight: 8 * u }}>
          M
          <div
            style={{
              width: 28 * u,
              height: 28 * u,
              marginLeft: 6 * u,
              marginBottom: 8 * u,
              background: "#5b9bff",
            }}
          />
        </div>
      </div>
    ),
    { width: px, height: px, fonts: [{ name: "Archivo", data: black, weight: 900, style: "normal" }] }
  );
}
