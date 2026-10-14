import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/data";

// Imagen para compartir (WhatsApp, LinkedIn, X): claim + wordmark del manual.
export const alt = `${site.name}: ${site.claim}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fonts = join(process.cwd(), "assets/fonts");

export default async function OpengraphImage() {
  const [black, medium] = await Promise.all([
    readFile(join(fonts, "Archivo-Black.ttf")),
    readFile(join(fonts, "Archivo-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#ffffff",
          color: "#292d33",
          fontFamily: "Archivo",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 24, color: "#69717c" }}>
          <div style={{ width: 48, height: 5, background: "#005bdb" }} />
          VIDEOS PARA STANDS DE FERIA · PANTALLAS LED · VIDEOWALLS
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 112,
            fontWeight: 900,
            lineHeight: 0.93,
            letterSpacing: -5,
            textTransform: "uppercase",
            maxWidth: 1000,
          }}
        >
          {site.claim}
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              fontSize: 56,
              fontWeight: 900,
              letterSpacing: -2.5,
              lineHeight: 0.8,
            }}
          >
            MANSALVA
            <div style={{ width: 14, height: 14, marginLeft: 0, background: "#005bdb" }} />
          </div>
          <div style={{ fontSize: 26, color: "#69717c" }}>{site.domain}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: black, weight: 900, style: "normal" },
        { name: "Archivo", data: medium, weight: 500, style: "normal" },
      ],
    }
  );
}
