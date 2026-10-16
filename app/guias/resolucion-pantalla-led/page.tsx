import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import PitchCalculator from "@/components/PitchCalculator";
import { getGuide, guideMetadata, pitchTable } from "@/lib/guides";

const guide = getGuide("resolucion-pantalla-led");

export const metadata: Metadata = guideMetadata(guide);

const fmt = (n: number) => n.toLocaleString("es-AR");

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function LedGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <p className={body}>
          Una pantalla LED no tiene una resolución estándar como un monitor. Depende de dos datos:
          cuánto mide y qué <strong>pixel pitch</strong> tiene. Si el video no se anima a esa medida
          exacta, el reproductor lo reescala y los textos finos se ven borrosos o cortados.
        </p>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La fórmula</h2>
            <p className={body}>
              Dividí el ancho y el alto de la pantalla, en milímetros, por el pixel pitch:
            </p>
            <p className="rounded-[14px] border border-linea px-5 py-4 font-medium text-[15px]">
              píxeles = medida en mm ÷ pitch en mm
            </p>
            <p className={body}>
              Una pantalla de 5 × 2 m con pitch de 2,5 mm tiene 5000 ÷ 2,5 = <strong>2000 px</strong> de
              ancho y 2000 ÷ 2,5 = <strong>800 px</strong> de alto. Ese es el tamaño del lienzo que hay
              que animar: 2000 × 800 px, una proporción de 5:2 que no tiene nada que ver con el 16:9 de
              un video común.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className={h2}>Calculadora</h2>
            <PitchCalculator />
          </section>

          <section className="flex flex-col gap-4">
            <h2 className={h2}>Tabla de pitch más comunes</h2>
            <p className={body}>Resoluciones para una pantalla de 5 × 2 m, calculadas con el pitch nominal.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                  <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                    <th className="py-3 pr-4 font-normal">Pitch</th>
                    <th className="py-3 pr-4 font-normal">Píxeles por metro</th>
                    <th className="py-3 pr-4 font-normal">Pantalla de 5 × 2 m</th>
                    <th className="py-3 pr-4 font-normal">Distancia mínima</th>
                    <th className="py-3 font-normal">Dónde se suele usar</th>
                  </tr>
                </thead>
                <tbody>
                  {pitchTable.map((row) => (
                    <tr key={row.pitch} className="border-b border-linea">
                      <td className="py-3 pr-4 font-extrabold">P{fmt(row.pitch)}</td>
                      <td className="py-3 pr-4">{fmt(Math.round(1000 / row.pitch))}</td>
                      <td className="py-3 pr-4">
                        {fmt(Math.round(5000 / row.pitch))} × {fmt(Math.round(2000 / row.pitch))} px
                      </td>
                      <td className="py-3 pr-4">≈ {fmt(row.pitch)} m</td>
                      <td className="py-3 text-gris">{row.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className={h2}>Distancia de visión</h2>
            <p className={body}>
              El pitch también dice desde qué distancia se ve bien la pantalla. La regla práctica: la
              distancia mínima en metros es parecida al pitch en milímetros. Una P2,5 se ve limpia desde
              unos 2,5 m; más cerca empiezan a notarse los puntos. Para que el contenido se lea cómodo,
              conviene que el público esté al doble o al triple de esa distancia.
            </p>
            <p className={body}>
              En un stand eso define el diseño: si la gente pasa a 3 m, los textos tienen que ser grandes
              y pocos, y el mensaje tiene que entenderse en los 10 a 30 segundos que dura el loop.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué pedirle al proveedor de la pantalla</h2>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>
                <strong>El mapa de píxeles:</strong> la resolución real. La pantalla se arma con gabinetes
                de tamaño fijo (por ejemplo, de 500 × 500 mm), así que la medida final puede diferir del
                cálculo nominal.
              </li>
              <li>
                <strong>Cuadros por segundo y códec</strong> que acepta el reproductor o el procesador
                (MP4 H.264 o H.265, a veces ProRes).
              </li>
              <li>
                <strong>Cuántas salidas tiene:</strong> en videowalls y stands con varias pantallas, si hay
                que entregar un archivo por salida o un lienzo único.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className="text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]">
              ¿Ya tenés las medidas de tu pantalla?
            </h2>
            <p className="text-[15px] leading-[1.5] text-plata">
              Mandanos el mapa de píxeles y te armamos el video de tu stand a esa medida exacta, sin
              reescalar.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Pedir una propuesta
            </Link>
          </section>
    </GuideArticle>
  );
}
