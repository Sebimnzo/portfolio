import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/como-preparar-un-video-para-videowall.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("como-preparar-un-video-para-videowall");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function ComoPrepararUnVideoParaVideowallGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>Ramiro prende el videowall de su stand a las 8:40 y lo primero que ve es una nariz cortada en dos. Pongamos que Ramiro es gerente de una agencia de viajes corporativos. Arma viajes de incentivo y congresos para empresas. Hoy expone en un congreso de turismo de negocios que abre a las 10.</p>
            <p className={body}>El stand tiene un videowall de nueve monitores: tres columnas, tres filas. La productora mandó el video el viernes. Es la directora de la agencia hablando en un panel, encuadrada como en una entrevista. En la pared, su cara cae justo sobre el cruce de dos marcos. Un ojo en un monitor, el otro en el de al lado, la boca partida por una franja negra.</p>
            <p className={body}>Alrededor suena el pabellón: taladros que terminan un stand, carritos con cajas, alguien probando un micrófono. Ramiro tiene una hora y veinte. Pagó el espacio, pagó la pared, y lo que se ve desde el pasillo es un rompecabezas mal armado.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Por qué el video se ve bien en la compu y partido en la pared</h2>
            <p className={body}>El video no está roto. Está pensado para una sola pantalla. Ramiro lo abrió en su notebook el viernes y se veía perfecto. Nadie le preguntó a la productora para qué pared era.</p>
            <p className={body}><strong>Un videowall no es una pantalla grande: son varias pantallas con bordes, y el video tiene que saber dónde están esos bordes.</strong> Esa es toda la diferencia. Si el archivo no la contempla, la pared la muestra sin piedad.</p>
            <p className={body}>Este artículo es para el que tiene que entregar el archivo, no para el que instala el equipo. Si todavía estás decidiendo qué mostrar en la pared, empezá por la guía sobre <Link href="/guias/videowall-para-stand-de-feria" className="text-azul underline underline-offset-2 hover:text-cobalto">qué poner en un videowall para stand de feria</Link>. Acá vamos a lo técnico.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Nueve monitores suman una resolución que nadie te dijo</h2>
            <p className={body}>Ramiro llama al proveedor de la pared. Le pregunta qué resolución tiene. La respuesta es la primera pista.</p>
            <p className={body}>La resolución de un videowall se calcula así: <strong>columnas × resolución horizontal de cada monitor, por filas × resolución vertical de cada monitor.</strong> Un videowall 2×2 de monitores Full HD suma 3840×2160. El de Ramiro, 3×3 de monitores Full HD, suma 5760×3240.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Disposición</th>
                  <th className="py-3 pr-4 font-normal">Monitores Full HD</th>
                  <th className="py-3 pr-4 font-normal">Resolución total</th>
                  <th className="py-3 font-normal">Proporción</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">2×2</td>
                  <td className="py-3 pr-4">4</td>
                  <td className="py-3 pr-4">3840×2160</td>
                  <td className="py-3">16:9</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">3×3</td>
                  <td className="py-3 pr-4">9</td>
                  <td className="py-3 pr-4">5760×3240</td>
                  <td className="py-3">16:9</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">3×2 (tres columnas, dos filas)</td>
                  <td className="py-3 pr-4">6</td>
                  <td className="py-3 pr-4">5760×2160</td>
                  <td className="py-3">8:3</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">1×3 (una columna, tres filas)</td>
                  <td className="py-3 pr-4">3</td>
                  <td className="py-3 pr-4">1920×3240</td>
                  <td className="py-3">vertical</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>Fijate en la proporción. Un 2×2 y un 3×3 mantienen el 16:9 de un video común. Un 3×2 no. Si mandás un 16:9 a una pared 3×2, el controlador lo estira, lo recorta o le pone franjas negras. Ninguna de las tres opciones la elegís vos.</p>
            <p className={body}>El video de Ramiro venía en Full HD. La pared lo estiró nueve veces su superficie. Además de partido, se ve blando.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Los marcos se comen justo lo que importa</h2>
            <p className={body}>Los marcos entre monitores tapan parte de la imagen. Son el borde físico de cada pantalla, y en una pared de nueve hay dos franjas verticales y dos horizontales cruzando todo el lienzo.</p>
            <p className={body}>Ahora mirá dónde caen. En un 3×3, los marcos dividen la imagen en tercios exactos. Y los tercios son donde cualquier camarógrafo pone la cara de una persona. La regla de los tercios, que funciona en una pantalla, en esta pared manda los ojos de la directora directo a los bordes.</p>
            <p className={body}>Lo mismo pasa con el texto. Un título que cruza un marco pierde letras o queda partido en dos renglones visuales. El visitante que pasa por el pasillo mira de reojo. No va a reconstruir una palabra cortada.</p>
            <p className={body}>Algunos controladores compensan el marco: esconden los píxeles que quedarían detrás del borde, para que una línea recta siga recta de un monitor al otro. La imagen ya no se parte, pero esa franja directamente no se ve. Preguntale al instalador si la compensación está activada y cuánto mide cada marco en milímetros.</p>
            <p className={body}>Las safe areas de un videowall se piensan por monitor:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>La cara, el logo y cada palabra viven dentro de un solo monitor, con margen hasta su borde.</li>
              <li>El centro de la pared es seguro en un 3×3 (cae en el monitor del medio) y peligroso en un 2×2 (cae en el cruce de cuatro marcos).</li>
              <li>Lo que cruza marcos tiene que soportar el corte: fondos, texturas, color, movimiento continuo.</li>
            </ul>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Un solo lienzo o nueve copias: lo decide el controlador</h2>
            <p className={body}>Ramiro vuelve a llamar. El proveedor le dice que puede &quot;poner el video en cada pantalla&quot;. Ramiro casi acepta. Sería peor.</p>
            <p className={body}>El controlador del videowall reparte la señal entre los monitores. Según cómo esté configurado, hace una de estas cosas:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>Un solo lienzo.</strong> Toma un archivo a resolución total y le da a cada monitor su pedazo. Es el modo que pide un video armado para la pared.</li>
              <li><strong>Réplica.</strong> Muestra el mismo video en cada monitor. Un video pensado para un monitor se ve partido en nueve copias. La pared pierde escala y parece una vidriera de electrodomésticos.</li>
              <li><strong>Mosaico.</strong> Cada monitor recibe un archivo distinto, sincronizado con los demás. Algunos reproductores lo piden así: nueve archivos recortados en lugar de uno.</li>
            </ol>
            <p className={body}>Antes de exportar, tenés que saber cuál de los tres usa tu pared. Es una pregunta de un minuto al instalador. Sin esa respuesta, cualquier video es una apuesta.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que pedís antes de exportar y cómo entregás</h2>
            <p className={body}>A las 9:15, Ramiro ya entiende el problema. Le falta lo que la productora nunca pidió. Esta es la lista que se manda al proveedor de la pared antes de abrir el programa de edición:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Disposición: cuántas columnas y cuántas filas.</li>
              <li>Resolución de cada monitor y resolución total que espera el controlador.</li>
              <li>Ancho de cada marco y si hay compensación de marcos activada.</li>
              <li>Modo de reproducción: lienzo único, réplica o mosaico.</li>
              <li>Reproductor: qué formatos acepta, si reproduce en loop y si necesita un archivo o varios.</li>
              <li>Orientación de los monitores: horizontales o girados.</li>
            </ul>
            <p className={body}>Con eso armás el lienzo a la medida exacta y dibujás la grilla de marcos como capa guía. Todo lo importante se acomoda dentro de las celdas.</p>
            <p className={body}>Para la entrega:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>MP4 H.264, que es lo que aceptan casi todos los reproductores.</li>
              <li>Resolución total exacta, o un archivo por monitor si el reproductor trabaja en mosaico.</li>
              <li>Sin audio: en un pabellón no se escucha.</li>
              <li>Loop cerrado, de 10 a 30 segundos, donde el último cuadro empalma con el primero. Sin fundido a negro.</li>
              <li>Nombre de archivo con la resolución, para que nadie cargue la versión equivocada.</li>
            </ul>
            <p className={body}>Si además tenés una pantalla LED en el stand, las reglas cambian: la guía de <Link href="/guias/formato-de-video-para-pantalla-led-de-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">formato de video para pantalla LED de stand</Link> explica cómo se entrega.</p>
            <p className={body}>Un consejo de oficio: antes del video final, mandá una placa de prueba. Una imagen a resolución total con la grilla dibujada y cada celda numerada del 1 al 9. Si en la pared el 1 aparece arriba a la izquierda y las líneas coinciden con los marcos, el video va a caer donde lo pensaste.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La próxima pared de Ramiro</h2>
            <p className={body}>Esa mañana no hay tiempo para rehacer nada. Ramiro pide que pongan una placa fija con el logo de la agencia, centrada en el monitor del medio. Se ve limpia. No frena a nadie, pero tampoco da vergüenza.</p>
            <p className={body}>El congreso siguiente lo encara al revés. Primero la lista al proveedor, después el video. La directora ya no habla a cámara. Aparece en el monitor central, entera, mientras los ocho monitores de alrededor muestran destinos en movimiento continuo. Cada frase corta ocupa una fila completa de celdas, con palabras que nunca tocan un marco.</p>
            <p className={body}>Tampoco tiene audio, porque en el pabellón nadie lo iba a escuchar. La placa de prueba pasó primero, y los nueve números cayeron en su lugar.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos el loop para la pared que tenés, no para una pantalla genérica:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Pedimos los datos del videowall y armamos el lienzo a su resolución total.</li>
              <li>Diseñamos con la grilla de marcos a la vista: caras, logos y texto dentro de cada monitor.</li>
              <li>Entregamos MP4 H.264 en el modo que pide tu controlador: un archivo o uno por monitor.</li>
              <li>Loops de 10 a 30 segundos, sin audio, con texto legible a 10 metros y sin cortes a negro.</li>
              <li>Plazos cortos, porque la feria no espera.</li>
            </ul>
            <p className={body}>Mirá cómo trabajamos la <Link href="/animacion-videowall" className="text-azul underline underline-offset-2 hover:text-cobalto">animación para videowall</Link> y qué necesitamos de vos para arrancar.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado, a la medida exacta de tu videowall. Contanos cuántos monitores tiene tu pared y hablemos de tu próximo evento: escribinos a <GuideCta slug="como-preparar-un-video-para-videowall" className="font-medium text-azul-claro hover:underline">manzo@mansalvadesign.com</GuideCta>.</p>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/videowall-para-stand-de-feria" className="text-azul underline underline-offset-2 hover:text-cobalto">qué mostrar en un videowall para stand de feria</Link> · <Link href="/guias/formato-de-video-para-pantalla-led-de-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">formato de video para pantalla LED de stand</Link></p>
    </GuideArticle>
  );
}
