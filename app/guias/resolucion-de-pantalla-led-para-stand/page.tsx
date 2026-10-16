import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/resolucion-de-pantalla-led-para-stand.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("resolucion-de-pantalla-led-para-stand");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function ResolucionDePantallaLedParaStandGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>El mejor video que tiene la bodega de Agustina es el que peor se ve en la feria, y la culpa no es del video.</p>
            <p className={body}>Pongamos que Agustina es la responsable comercial de una bodega que vende a distribuidores y restaurantes. Es miércoles, siete de la tarde, día de armado en una feria de vinos para el canal profesional en Mendoza. El pabellón huele a cartón y a madera de cajón. Alguien acomoda copas contra la luz. Un técnico enciende la pantalla LED del fondo del stand.</p>
            <p className={body}>Hace dos semanas, el proveedor le escribió por mensaje: &quot;La pantalla es de 4 por 2&quot;. Agustina hizo lo lógico. Mandó el mejor archivo que tenía: el video de la finca en 4K, el de la web, con la cosecha, las barricas y el logo al final.</p>
            <p className={body}>Ahora lo ve en grande. Los viñedos están estirados. La etiqueta del malbec quedó ancha y baja, como aplastada. Al logo del final le falta la parte de abajo. Mañana a las diez entran los compradores.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>&quot;4 por 2&quot; es una medida, no una resolución</h2>
            <p className={body}>El proveedor habló en metros. El video habla en píxeles. Nadie hizo la traducción entre una cosa y la otra.</p>
            <p className={body}>Agustina no se equivocó por descuido. Hizo lo que haría cualquiera: si la pantalla es grande, se manda el archivo más grande. Tiene sentido en una tele. En una pantalla LED, no.</p>
            <p className={body}>Lo que está en juego es concreto. Agustina pagó el espacio, el armado, la pantalla y los pasajes del equipo comercial. Mañana pasan por el pasillo distribuidores con una lista de bodegas para visitar y compradores de restaurantes que arman la carta del año. Todos van a mirar la pantalla de reojo. <strong>Lo que vean en esa mirada es la etiqueta deformada de su vino.</strong></p>
            <p className={body}>En el vino, la etiqueta es el producto que el comprador recuerda. Es lo que va a buscar después en la carta o en la góndola. Verla deforme no lo hace frenar. Le dice que en ese stand algo quedó a medias.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que la pantalla hace con un video que no es de su medida</h2>
            <p className={body}>Una pantalla LED es una grilla de luces. Cada luz es un píxel. La cantidad de píxeles está fija: no crece si le mandás un archivo más pesado.</p>
            <p className={body}>Cuando el video no coincide con esa grilla, el reproductor decide por vos. Tiene tres salidas, y ninguna es buena:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Estira.</strong> Llena toda la pantalla y deforma la imagen. Es lo que le pasó a Agustina con la etiqueta.</li>
              <li><strong>Pone franjas negras.</strong> Respeta la proporción y deja bandas apagadas a los costados o arriba y abajo. La pantalla se ve rota o a medio usar.</li>
              <li><strong>Recorta.</strong> Llena la pantalla y corta lo que sobra. Ahí se fue la parte de abajo del logo.</li>
            </ul>
            <p className={body}>El fondo del problema es la proporción. El 4K tiene 3840 × 2160 píxeles, una proporción de 16:9, la de una tele. La pantalla de Agustina mide 4 × 2 metros: es el doble de ancha que de alta, 2:1. Las dos formas no encajan. Pase lo que pase, una de las tres salidas ocurre.</p>
            <p className={body}>Agustina le pide al técnico que lo arregle. El técnico prueba las tres opciones del reproductor. Con la que no deforma, la finca aparece chica, rodeada de negro. Son las ocho de la noche.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La cuenta que le faltó a Agustina</h2>
            <p className={body}>La distancia entre el centro de una luz y la siguiente se llama pixel pitch y se mide en milímetros. Para saber cuántos píxeles tiene una pantalla, dividís la medida por el pitch: <strong>píxeles = medida en mm ÷ pitch en mm</strong>. Una vez para el ancho y otra para el alto.</p>
            <p className={body}>Un stand interior suele usar pitch 2,5 mm. Una pantalla de 5 × 2 metros con ese pitch da 5000 ÷ 2,5 = 2000 píxeles de ancho y 2000 ÷ 2,5 = 800 de alto: 2000 × 800. Si la de Agustina fuera de pitch 2,5, sus 4 × 2 metros darían 1600 × 800. Ni cerca de 3840 × 2160.</p>
            <p className={body}>Agustina nunca preguntó el pitch. El proveedor nunca lo mencionó. Con ese dato y una división, el problema se veía dos semanas antes.</p>
            <p className={body}>Para tu pantalla no hace falta hacer la cuenta a mano. En la <Link href="/guias/resolucion-pantalla-led" className="text-azul underline underline-offset-2 hover:text-cobalto">guía de resolución de pantalla LED, con calculadora y tabla de pitch</Link>, ponés la medida y el pitch y te devuelve los píxeles exactos.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Por qué más píxeles no arreglan nada</h2>
            <p className={body}>La idea de que &quot;más resolución siempre es mejor&quot; viene de la tele y del celular. En una pantalla LED funciona al revés. La pantalla muestra los píxeles que tiene. Todo lo que sobra, el reproductor lo tira.</p>
            <p className={body}>Y al tirarlo, rompe cosas. Para pasar de 3840 a 1600 píxeles de ancho, el reproductor junta varios píxeles en uno. Los trazos finos se pierden. La letra chica del varietal titila o desaparece. Los detalles de la etiqueta, que en la web se ven nítidos, se vuelven una mancha.</p>
            <p className={body}>Hay un segundo problema que el 4K esconde. Ese video se hizo para la web: dura tres minutos, tiene locución y música, y deja el logo para el final. En el pabellón no se escucha nada. El visitante que mira de reojo no se queda tres minutos esperando el logo. Qué códec, qué cuadros por segundo y qué duración pide una LED lo explica la guía de <Link href="/guias/formato-de-video-para-pantalla-led-de-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">formato de video para pantalla LED de stand</Link>. Cuánto tiene que durar el loop está en <Link href="/guias/duracion-ideal-de-un-video-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">la duración ideal de un video para stand</Link>.</p>
            <p className={body}>Es jueves a la mañana. El pasillo se llena. En el stand de enfrente, otra bodega pasa un loop corto: una botella que gira, el nombre del vino en letras grandes, el logo siempre a la vista. La imagen ocupa la pantalla de borde a borde. Dos distribuidores frenan ahí. Agustina mira su pantalla con franjas negras.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que Agustina pide antes de la próxima feria</h2>
            <p className={body}>Para esta feria, Agustina elige la salida menos mala: el video sin estirar, con franjas negras. Se ve chico, pero se ve derecho. La etiqueta vuelve a ser la etiqueta.</p>
            <p className={body}>Para la próxima, cambia el orden de las cosas. Primero el número, después el video. Esto es lo que hace con la resolución de su pantalla LED, y lo que te conviene hacer a vos:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>Pedí la resolución en píxeles.</strong> Escribile al proveedor: &quot;¿Cuántos píxeles tiene de ancho y de alto?&quot;. Si no tiene ese dato, pedí la medida exacta en milímetros y el pitch, y hacé la cuenta en la calculadora.</li>
              <li><strong>Preguntá qué hace el reproductor.</strong> Si el equipo escala la imagen, pedí que lo configuren para mostrar el archivo píxel por píxel, sin ajustes.</li>
              <li><strong>Diseñá a esa medida desde el primer cuadro.</strong> Nada de adaptar el video de la web. Una pieza pensada para una pantalla de 2:1 ubica la botella y el logo donde esa forma los muestra mejor.</li>
              <li><strong>No reescales.</strong> Ni vos, ni el editor, ni el reproductor. El archivo final tiene los mismos píxeles que la pantalla, ni uno más.</li>
              <li><strong>Probá un cuadro antes del día de armado.</strong> Una imagen fija a la medida exacta, con un texto chico en cada borde. Si los cuatro textos se ven enteros y derechos, la medida es la correcta.</li>
            </ol>
            <p className={body}>La próxima feria, el proveedor responde con dos números en lugar de &quot;4 por 2&quot;. El loop llega con esos dos números. La etiqueta del malbec se ve con su forma real, de borde a borde, desde el pasillo. Eso no le asegura un pedido. Le asegura que el comprador que mira de reojo ve el vino como es.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos loops para pantallas LED, videowalls y tótems de stand. Lo que le faltó a Agustina es lo primero que te pedimos:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>La resolución de tu pantalla en píxeles</strong>, o la medida y el pitch para calcularla con vos.</li>
              <li><strong>Un loop diseñado a esa medida exacta</strong>, sin reescalar ni recortar un video horizontal.</li>
              <li><strong>Loops de 10 a 30 segundos, sin audio</strong>, con un mensaje por escena.</li>
              <li><strong>Texto grande, legible a 10 metros</strong>, contraste alto y movimiento continuo, sin cortes a negro.</li>
              <li><strong>Plazos cortos</strong>, para cuando la feria ya está encima.</li>
            </ul>
            <p className={body}>Si querés ver cómo trabajamos, mirá nuestro <Link href="/contenido-pantallas-led" className="text-azul underline underline-offset-2 hover:text-cobalto">contenido para pantallas LED</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">¿Tenés una feria en el calendario? Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado, a la medida exacta de tu pantalla. Mandanos los píxeles o los metros y el pitch, y hablemos de tu próximo evento: <GuideCta slug="resolucion-de-pantalla-led-para-stand" className="font-medium text-azul-claro hover:underline">manzo@mansalvadesign.com</GuideCta>.</p>
          </section>
    </GuideArticle>
  );
}
