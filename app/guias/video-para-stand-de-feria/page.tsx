import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/video-para-stand-de-feria.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("video-para-stand-de-feria");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function VideoParaStandDeFeriaGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>Gonzalo pidió un video para el stand y le entregaron exactamente lo que pidió. Ese fue el problema.</p>
            <p className={body}>Imaginá a Gonzalo, gerente comercial en una fábrica de equipos de riego por goteo para cultivos intensivos. Es un ejemplo, pero la escena se repite en cada feria. Es miércoles, mediodía, primer día de una feria de agroindustria en Mendoza. La carpa huele a tierra seca. Afuera una motobomba de exhibición arranca y se apaga. Adentro zumban los generadores y alguien prueba un micrófono que nadie entiende.</p>
            <p className={body}>En el fondo del stand hay una pantalla LED armada con módulos, más ancha que alta. Corre el video que Gonzalo encargó hace un mes: cuatro minutos, locución, música de guitarra y el dueño de la empresa hablando al lado de un cabezal de riego. Los productores de vid y frutales pasan por el pasillo con el mate en la mano. Miran de reojo. Siguen.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El video llegó y era exactamente lo que pidió</h2>
            <p className={body}>El mail que Gonzalo mandó al productor tenía dos renglones: &quot;Necesitamos un video para el stand de la feria. Algo que muestre la empresa y la línea nueva&quot;. El productor hizo un buen trabajo con eso. Filmó la planta, grabó al dueño, puso drone sobre una finca con las cintas tendidas.</p>
            <p className={body}>Pero la pantalla no tiene la forma de un televisor. El video entra con dos franjas negras a los costados. Alguien del armado lo estiró para tapar las franjas. Ahora la bomba se ve achatada y los caños redondos son óvalos.</p>
            <p className={body}>El audio no existe. Los parlantes del stand compiten con los generadores y pierden. El dueño mueve la boca en silencio durante cuatro minutos.</p>
            <p className={body}>Gonzalo pagó el espacio, la carpa, el armado, la pantalla y el video. <strong>Nada de eso falló por separado. Falló el pedido.</strong></p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Por qué el institucional no frena a nadie en el pasillo</h2>
            <p className={body}>Gonzalo intenta lo habitual. Saca el audio para que no moleste. Pone folletos en el mostrador. Le pide al vendedor que salude a todo el que pase. El pasillo sigue de largo.</p>
            <p className={body}>El institucional se pensó para otra situación. Lo mira alguien sentado, que eligió verlo, con sonido, desde el principio. En una feria pasa lo contrario. El visitante camina. No eligió nada. Entra al video en cualquier segundo y le dedica una mirada de costado de uno a pocos segundos (<a href="https://www.sixteen-nine.net/2019/02/18/how-to-maximize-dwell-time-for-digital-signage/" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">mediciones recopiladas por Sixteen:Nine, 2019</a>).</p>
            <p className={body}>Esa diferencia separa dos piezas que se parecen pero hacen trabajos distintos:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal"></th>
                  <th className="py-3 pr-4 font-normal">Video institucional</th>
                  <th className="py-3 font-normal">Loop para el stand</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Quién lo mira</td>
                  <td className="py-3 pr-4">Alguien que eligió verlo</td>
                  <td className="py-3">Alguien que camina por el pasillo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Duración</td>
                  <td className="py-3 pr-4">Minutos</td>
                  <td className="py-3">10 a 30 segundos, se repite</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Sonido</td>
                  <td className="py-3 pr-4">Locución y música</td>
                  <td className="py-3">Ninguno</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Mensaje</td>
                  <td className="py-3 pr-4">La historia de la empresa</td>
                  <td className="py-3">Una idea por escena</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Trabajo</td>
                  <td className="py-3 pr-4">Explicar</td>
                  <td className="py-3">Hacer que el visitante frene y pregunte</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>El institucional no está mal. Está en el lugar equivocado. Para el stand, Gonzalo necesitaba un activo que trabaje en el pasillo, no un resumen de la empresa. Si no sabés qué hacer con el institucional que ya tenés, en la guía de <Link href="/guias/videos-para-ferias-de-negocios" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para ferias de negocios</Link> está dónde sí te sirve.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El productor no sabía nada de la pantalla, y Gonzalo tampoco</h2>
            <p className={body}>A la una de la tarde el pasillo se llena. El stand de al lado tiene una pantalla más chica. Pasa una animación corta: una hilera de vid vista desde arriba, con gotas que caen de la cinta y oscurecen la tierra al pie de cada planta. No hay texto chico ni personas hablando. La gente frena, señala, entra.</p>
            <p className={body}>Gonzalo se pregunta qué hicieron distinto. La respuesta incómoda es que el otro stand pidió algo concreto.</p>
            <p className={body}>En un video de stand intervienen tres partes que casi nunca hablan entre sí:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>El armador del stand</strong> sabe dónde va la pantalla y a qué altura.</li>
              <li><strong>El proveedor de la pantalla LED</strong> sabe cuántos módulos tiene, qué pixel pitch usa y qué resolución en píxeles da eso.</li>
              <li><strong>Quien hace el video</strong> no sabe nada de lo anterior, salvo que alguien se lo diga.</li>
            </ul>
            <p className={body}>Gonzalo era el único que podía juntar esos datos. No lo hizo porque nadie le dijo que hacían falta. El productor tampoco preguntó. Y una LED se diseña a su resolución exacta: no hay &quot;formato estándar&quot; que la cubra.</p>
            <p className={body}>La <Link href="/guias/formato-de-video-para-pantalla-led-de-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">guía sobre formato de video para pantalla LED de stand</Link> explica qué datos técnicos pedirle al proveedor de la pantalla. Acá va lo que tenés que pasarle a quien hace el video.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El brief de 5 puntos que Gonzalo no mandó</h2>
            <p className={body}>Este es el pedido que hubiera cambiado el miércoles. Cinco puntos. Ninguno exige saber de animación.</p>
            <p className={body}><strong>1. Duración: un loop corto que vuelva al principio sin cortar.</strong> Pedí entre 10 y 30 segundos. El último cuadro tiene que empalmar con el primero, sin fundido a negro. El visitante entra en cualquier momento. Si el video tiene &quot;principio&quot;, la mayoría se lo pierde. La <Link href="/guias/duracion-ideal-de-un-video-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">guía sobre duración ideal de un video para stand</Link> desarrolla cómo elegir el largo según el pasillo.</p>
            <p className={body}><strong>2. Formato: la orientación nativa de la pantalla.</strong> Decí si la pantalla es horizontal, vertical o con una proporción rara, como la de Gonzalo. Una pantalla vertical no es una horizontal recortada. Si la recortás, se pierde lo que estaba a los costados. Si la estirás, la bomba se deforma.</p>
            <p className={body}><strong>3. Legibilidad: texto grande, una idea por escena.</strong> Pedí texto legible a 10 metros, contraste alto y pocas palabras por pantalla. El visitante lee una frase al pasar, no un párrafo. Si la pantalla va al sol o bajo una carpa clara, avisalo: cambia cuánto contraste hace falta.</p>
            <p className={body}><strong>4. Sin audio: todo se entiende muteado.</strong> Escribilo así, sin vueltas: &quot;el video no va a tener sonido&quot;. Eso cambia todo el guion. Nada de locución que después se subtitula en letra chica. El texto en pantalla es el mensaje, no una traducción de la voz.</p>
            <p className={body}><strong>5. Medida exacta: la resolución en píxeles de esa pantalla.</strong> No &quot;Full HD&quot;, no &quot;lo que sea estándar&quot;. El número exacto de píxeles de ancho y de alto que te da el proveedor de la LED. Si no lo tenés, pedíselo antes de encargar nada. La página sobre <Link href="/guias/resolucion-pantalla-led" className="text-azul underline underline-offset-2 hover:text-cobalto">resolución de pantalla LED</Link> explica de dónde sale ese número.</p>
            <p className={body}>Hay un sexto dato que no es técnico y ordena los otros cinco: qué querés que haga el visitante después de mirar. Acercarse al equipo, preguntar por la línea nueva, pedir una demo. Si lo decís en el pedido, quien hace el video sabe qué escena va al final.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El mail que Gonzalo manda para la próxima feria</h2>
            <p className={body}>Esa noche, en el hotel, Gonzalo escribe dos mails. El primero va al proveedor de la pantalla. Pregunta la resolución exacta, la orientación y qué tipo de archivo acepta el reproductor. Al otro día tiene la respuesta.</p>
            <p className={body}>El segundo mail es para la próxima feria. Ya no tiene dos renglones:</p>
            <blockquote className="flex flex-col gap-2 border-l-[3px] border-azul pl-5 text-gris">
              <p className="text-[15px] leading-[1.55]"><strong>Video para el stand de la feria de marzo</strong></p>
              <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] leading-[1.55]">
                <li>Duración: loop de 20 segundos, sin corte a negro al volver al inicio.</li>
                <li>Pantalla: LED horizontal, más ancha que un televisor. Resolución exacta: la que pasa el proveedor (adjunta).</li>
                <li>Sin audio. Nada de locución.</li>
                <li>Texto: una frase por escena, legible desde el pasillo, contraste alto. La pantalla va bajo carpa.</li>
                <li>Mensaje: el gotero nuevo riega parejo de punta a punta de la hilera. Queremos que el visitante se acerque a verlo.</li>
                <li>Entrega: archivo listo para el reproductor, a la medida exacta.</li>
              </ul>
            </blockquote>
            <p className={body}>El productor responde con una sola pregunta: qué color tiene la carpa. Ya no hay franjas negras ni caños ovalados. El loop muestra el gotero de cerca, una gota que cae sobre la tierra seca, una frase y el logo. Vuelve a empezar sin que se note.</p>
            <p className={body}>Gonzalo no sabe todavía cuánta gente va a frenar. Sabe que esta vez la pantalla va a mostrar lo que se pensó para ella.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> hacemos loops para pantallas de stand. Es lo único que hacemos, y por eso empezamos por el mismo brief que armó Gonzalo:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Loops de 10 a 30 segundos</strong> que se repiten todo el día sin corte a negro.</li>
              <li><strong>Sin audio.</strong> El mensaje se entiende con la pantalla muteada.</li>
              <li><strong>Una idea por escena</strong>, con texto grande legible a 10 metros y contraste alto.</li>
              <li><strong>Entrega a la medida exacta</strong> de tu pantalla LED, tótem o videowall, según su resolución y orientación.</li>
              <li><strong>Plazos cortos</strong>, para cuando la feria ya está en el calendario.</li>
            </ul>
            <p className={body}>Si no tenés los datos de la pantalla, te decimos qué pedirle al proveedor. Mirá cómo trabajamos en <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y para cuándo es la feria. Hablemos de tu próximo evento: <GuideCta slug="video-para-stand-de-feria" className="font-medium text-azul-claro hover:underline">escribinos a manzo@mansalvadesign.com</GuideCta>.</p>
          </section>
    </GuideArticle>
  );
}
