import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Ícono para la pantalla de inicio de iOS: inicial del wordmark + punto azul.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const black = await readFile(join(process.cwd(), "assets/fonts/Archivo-Black.ttf"));

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
          fontSize: 118,
          fontWeight: 900,
          letterSpacing: -5,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", lineHeight: 0.8 }}>
          M
          <div style={{ width: 28, height: 28, marginLeft: 6, background: "#5b9bff" }} />
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Archivo", data: black, weight: 900, style: "normal" }] }
  );
}
