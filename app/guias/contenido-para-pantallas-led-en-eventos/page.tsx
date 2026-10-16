import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/contenido-para-pantallas-led-en-eventos.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("contenido-para-pantallas-led-en-eventos");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function ContenidoParaPantallasLedEnEventosGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>La pantalla más cara del pabellón está pasando un video que nadie escucha. Es la de Valeria.</p>
            <p className={body}>Pongamos que Valeria es gerenta comercial en una empresa que instala energía solar para industrias. Es martes, once de la mañana, en una feria de energía y eficiencia. El pabellón zumba. Jefes de planta y gerentes de mantenimiento caminan con la credencial colgada y el celular en la mano.</p>
            <p className={body}>Detrás del mostrador, una pantalla LED de cuatro metros de ancho pasa el video institucional. Es el mismo que la empresa subió a YouTube el año pasado. Dura tres minutos. El director técnico habla a cámara, con música, voz en off y subtítulos chiquitos abajo.</p>
            <p className={body}>Nadie frena. La empresa pagó el espacio, el armado, los pasajes del equipo comercial y el alquiler de esa pantalla. Valeria tiene que volver con leads. La feria dura tres días. Por ahora tiene dos tarjetas. Y un folleto que vio terminar en el tacho de la entrada.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El video que en YouTube funcionaba</h2>
            <p className={body}>Valeria no eligió mal por descuido. El video está bien hecho. En YouTube lo mira gente que hizo clic, con auriculares, sentada, dispuesta a darle tres minutos.</p>
            <p className={body}>En el pasillo no hay nada de eso. El visitante no hizo clic. No tiene auriculares. No está sentado. Camina hacia otro stand y mira de reojo.</p>
            <p className={body}><strong>El contenido para pantallas LED en eventos no es un video pasado en una pantalla grande. Es otra pieza, con otras reglas.</strong> Valeria todavía no lo sabe. Lo va a entender a lo largo del día.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que el pasillo le hace a un video de tres minutos</h2>
            <p className={body}>A las doce, Valeria se para en el pasillo, de espaldas al stand de enfrente, y mira el suyo como un visitante. Lo que ve la incomoda.</p>
            <p className={body}>Primero, el audio. En una feria suenan los parlantes de otros stands, las conversaciones, el micrófono que anuncia una charla. La voz del director no llega ni al mostrador. Todo lo que el video dice en palabras habladas se pierde.</p>
            <p className={body}>Segundo, el tiempo. Un visitante cruza el frente de un stand en pocos segundos. Si en esos segundos la pantalla muestra una toma aérea de paneles sobre un techo, sin texto, no se lleva nada. El mensaje importante aparece en el minuto dos. Para entonces el visitante está tres stands más allá.</p>
            <p className={body}>Tercero, la entrada a mitad de camino. Nadie ve el video desde el principio. Cada persona lo agarra en un punto cualquiera. Un video con introducción, desarrollo y cierre solo funciona para quien lo ve entero. En el pasillo, nadie lo ve entero.</p>
            <p className={body}>Por eso una pantalla de feria pide un loop. Es una pieza corta, de 10 a 30 segundos, que se repite sin principio ni final visibles. Cada escena dice una sola cosa. Cualquier segundo sirve como entrada. La guía sobre <Link href="/guias/animacion-en-loop-sin-sonido-para-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">animación en loop sin sonido para eventos</Link> explica cómo se arma una pieza así.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Una pantalla LED no es un televisor grande</h2>
            <p className={body}>A la una, el stand de al lado frena gente. Su LED es más chica que la de Valeria. Pero se lee desde lejos, y la de Valeria no. La diferencia no está en el tamaño. Está en cómo se diseñó lo que pasa adentro.</p>
            <p className={body}>Una pantalla LED está hecha de módulos con diodos de luz. La distancia entre diodos se llama pixel pitch. Ese dato, junto con la cantidad de módulos, define cuántos píxeles reales tiene la pantalla. Y casi nunca coincide con la resolución de un video estándar de YouTube.</p>
            <p className={body}>Cuando el video no coincide, el procesador de la pantalla lo reescala. Estira o achica la imagen para que entre. Ahí aparecen los problemas que Valeria ve desde el pasillo:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Texto borroso.</strong> Los subtítulos finos se desarman al reescalar. A distancia son una mancha.</li>
              <li><strong>Líneas que titilan.</strong> Los bordes delgados y las tramas finas vibran sobre la grilla de diodos.</li>
              <li><strong>Bandas negras o recortes.</strong> Si la proporción no coincide, la pantalla rellena con negro o le corta la cabeza al director.</li>
              <li><strong>Cortes a negro que parecen fallas.</strong> En una LED, el negro son diodos apagados. Un fundido a negro entre escenas se ve como una pantalla rota. El visitante que miraba en ese segundo se va.</li>
            </ul>
            <p className={body}>La regla de oficio es simple: se diseña a la resolución exacta de la pantalla, píxel por píxel. Para saber cuál es la de tu LED y cómo se calcula, mirá la guía de <Link href="/guias/resolucion-de-pantalla-led-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">resolución de pantalla LED para stand</Link>.</p>
            <p className={body}>El stand de al lado cumple dos reglas más. La primera es contraste alto. El pabellón tiene luz de techo, y esa luz lava los colores suaves. Fondos llenos y texto claro sobre oscuro, o al revés. La segunda es texto grande. Una frase de pocas palabras que se lea a 10 metros, no un párrafo.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Video corporativo o activo de conversión</h2>
            <p className={body}>A las tres, Valeria entiende el error de fondo. El video no es malo. Tiene otro trabajo.</p>
            <p className={body}>El video institucional existe para que alguien interesado conozca la empresa. La pantalla de feria existe para que frene alguien que no estaba buscando nada. Son dos trabajos distintos. Piden dos piezas distintas.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal"></th>
                  <th className="py-3 pr-4 font-normal">Video corporativo</th>
                  <th className="py-3 font-normal">Loop para pantalla de stand</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Quién lo mira</td>
                  <td className="py-3 pr-4">Alguien que eligió verlo</td>
                  <td className="py-3">Alguien que pasa caminando</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Duración</td>
                  <td className="py-3 pr-4">Minutos</td>
                  <td className="py-3">10 a 30 segundos, en repetición</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Audio</td>
                  <td className="py-3 pr-4">Voz, música, entrevistas</td>
                  <td className="py-3">Ninguno: todo se lee</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Estructura</td>
                  <td className="py-3 pr-4">Principio, desarrollo y cierre</td>
                  <td className="py-3">Sin principio visible</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Texto</td>
                  <td className="py-3 pr-4">Subtítulos de apoyo</td>
                  <td className="py-3">Una frase grande por escena</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Transiciones</td>
                  <td className="py-3 pr-4">Fundidos y cortes a negro</td>
                  <td className="py-3">Movimiento continuo, sin negro</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Formato</td>
                  <td className="py-3 pr-4">16:9 estándar</td>
                  <td className="py-3">La medida exacta de la pantalla</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Qué se mide</td>
                  <td className="py-3 pr-4">Reproducciones</td>
                  <td className="py-3">Gente que frena y conversaciones en el stand</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>El movimiento continuo cumple una función concreta. La vista de alguien que camina reacciona al movimiento en el borde del campo visual. Una pantalla que nunca se queda quieta corta el patrón de la caminata. El visitante gira la cabeza. Ese giro es la oportunidad del equipo comercial.</p>
            <p className={body}>Valeria mira el reloj. Quedan dos días de feria y la pantalla sigue mostrando al director. El problema ya no es técnico. Es que el archivo correcto no existe.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El brief que Valeria escribe esa noche</h2>
            <p className={body}>En el hotel, Valeria abre la computadora. No va a rehacer la pantalla para mañana. Pero quiere que la próxima feria no repita este martes. Anota lo que va a pedir. Es lo mismo que te conviene pedir a vos:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>Medidas en píxeles de la pantalla.</strong> Pedíselas al proveedor de la LED, junto con el pixel pitch y la cantidad de módulos. No aceptes &quot;es 16:9&quot;.</li>
              <li><strong>Un objetivo por pantalla.</strong> Qué tiene que pensar el visitante al pasar. Una idea, no el catálogo.</li>
              <li><strong>Duración de 10 a 30 segundos, en loop.</strong> El último cuadro empalma con el primero. No se nota dónde vuelve a empezar.</li>
              <li><strong>Sin audio.</strong> Todo lo que importa se lee o se ve.</li>
              <li><strong>Un mensaje por escena.</strong> Pocas palabras, tipografía gruesa, legible a 10 metros.</li>
              <li><strong>Contraste alto y fondos llenos.</strong> Nada de grises suaves ni líneas finas.</li>
              <li><strong>Movimiento continuo, sin cortes a negro.</strong> La pantalla nunca parece apagada.</li>
              <li><strong>Archivo final en el formato que pide el procesador.</strong> Confirmalo con el técnico antes de la feria, no el día del armado.</li>
            </ol>
            <p className={body}>Con ese brief, el estudio que contrate sabe qué entregar. Y Valeria sabe qué reclamar si no llega.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La feria siguiente</h2>
            <p className={body}>Unos meses después, Valeria arma el stand en otra feria del sector. Misma empresa, otra pantalla. Esta vez mandó las medidas en píxeles antes de pedir nada.</p>
            <p className={body}>El loop dura veinte segundos. Un panel solar gira en 3D sobre un fondo lleno. Aparece una frase sobre el problema que resuelve, la factura de luz de la planta, en letras que se leen desde la otra punta del pasillo. Después, el techo de una nave industrial cubierto de paneles. Después, otra vez el panel, sin corte.</p>
            <p className={body}>No hay director hablando. No hay música. A las once de la mañana, un jefe de planta frena, mira la pantalla y le pregunta a Valeria si sirve para su techo. Ese es todo el trabajo de la pantalla: abrir la conversación. Lo demás lo hace el equipo comercial.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos loops para las pantallas de tu stand: pantallas LED, videowalls y tótems. Esto es lo que entregamos:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops de 10 a 30 segundos, sin audio, que se repiten sin costura.</li>
              <li>Un mensaje por escena, con texto grande legible a 10 metros y contraste alto.</li>
              <li>Movimiento continuo, sin cortes a negro.</li>
              <li>Entrega a la resolución exacta de tu pantalla, según su pixel pitch, para que nada se vea borroso.</li>
              <li>Plazos cortos, pensados para la fecha de tu feria.</li>
            </ul>
            <p className={body}>De vos necesitamos tres cosas: las medidas de la pantalla, qué querés que entienda el visitante y tu material de marca. Mirá cómo trabajamos el <Link href="/contenido-pantallas-led" className="text-azul underline underline-offset-2 hover:text-cobalto">contenido para pantallas LED</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y para cuándo es la feria.</p>
            <GuideCta
              slug="contenido-para-pantallas-led-en-eventos"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/resolucion-de-pantalla-led-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">resolución de pantalla LED para stand</Link> · <Link href="/guias/animacion-en-loop-sin-sonido-para-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">animación en loop sin sonido para eventos</Link></p>
    </GuideArticle>
  );
}
