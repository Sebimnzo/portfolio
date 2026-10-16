import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/animacion-en-loop-sin-sonido-para-eventos.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("animacion-en-loop-sin-sonido-para-eventos");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function AnimacionEnLoopSinSonidoParaEventosGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>El loop de Lautaro no tiene un solo error técnico, y por eso nadie entiende qué vende.</p>
            <p className={body}>Pongamos que Lautaro es cofundador de una fintech B2B. Su empresa les da a los comercios una forma de cobrar con tarjeta y QR, y les liquida las ventas en su cuenta. Es martes, once y cuarenta, segundo día de un congreso del sector de medios de pago en un pabellón de Córdoba. El aire acondicionado zumba. En el escenario central alguien habla de interoperabilidad y el eco se come la mitad de las palabras.</p>
            <p className={body}>Detrás del mostrador del stand hay una pantalla LED horizontal. Corre un loop que Lautaro descargó de un banco de stock la semana pasada: esferas de colores que flotan, se cruzan y se disuelven sobre un fondo azul. Encima, el logo. Los visitantes pasan con el café en la mano y la credencial colgando. Miran la pantalla un instante. Siguen.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Un loop perfecto que no dice nada</h2>
            <p className={body}>Lautaro buscó un loop sin sonido porque ya sabía una cosa: en el pabellón el audio no existe. Encontró miles de clips gratis. Eligió uno que se veía moderno, en buena resolución, sin salto al repetirse.</p>
            <p className={body}>Técnicamente cumple. El clip empalma sin corte. Llena la pantalla. No necesita sonido.</p>
            <p className={body}>Pero el dueño de una cadena de farmacias frena frente al stand. Mira las esferas. Le pregunta al vendedor: &quot;¿Ustedes qué hacen? ¿Son un banco?&quot;.</p>
            <p className={body}>Lautaro pagó el espacio, el armado y los pasajes de tres personas. <strong>La pantalla más grande del stand trabaja de protector de pantalla.</strong></p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Por qué el loop de stock no habla en silencio</h2>
            <p className={body}>El clip de stock se hizo para decorar. Sirve de fondo detrás de un DJ, de una presentación, de un orador. En todos esos casos otra cosa lleva el mensaje: la voz, la música, la persona que habla.</p>
            <p className={body}>En el stand de Lautaro no hay nada más. El ruido del pabellón tapa cualquier parlante. El vendedor está ocupado con otro visitante. La pantalla es lo único que habla, y habla sin voz.</p>
            <p className={body}>Sacarle el sonido a un video no lo vuelve un loop silencioso. <strong>Un loop silencioso se diseña para que el mensaje viva en la imagen y el texto desde el primer cuadro.</strong> Las esferas de Lautaro tienen movimiento, color y empalme. Les falta lo único que importa: una frase que diga qué resuelve su empresa.</p>
            <p className={body}>A eso se suma cómo mira la gente en una feria. El visitante camina. Mira de reojo mientras busca el número de un stand o contesta un mensaje. Le dedica a la pantalla, con suerte, un par de segundos: los estudios de pantallas en espacios públicos miden miradas breves, de uno a pocos segundos, y muchas veces ninguna (<a href="https://almeida.informatik.rwth-aachen.de/publications/huang2008b.pdf" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Huang, Koster y Borchers, 2008</a>; <a href="https://discovery-pp.ucl.ac.uk/id/eprint/1488204/1/Marshall_pn236-dalton.pdf" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Dalton, Collins y Marshall, 2015</a>). Y entra al loop en cualquier punto, casi nunca al principio.</p>
            <p className={body}>Lautaro prueba lo habitual. Pone un banner con el nombre de la empresa al lado de la pantalla. Reparte folletos con un QR. Al mediodía los folletos están en el tacho de la entrada. Dos stands más allá, una empresa de terminales de cobro tiene gente parada leyendo su pantalla.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Cómo se diseña un loop que se entiende sin audio</h2>
            <p className={body}>Un loop silencioso responde a una sola pregunta. ¿Qué entiende alguien que lo mira de pasada, desde el pasillo, sin sonido? Estas son las decisiones que lo hacen funcionar.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Decisión</th>
                  <th className="py-3 pr-4 font-normal">Qué significa en la pantalla</th>
                  <th className="py-3 font-normal">Qué tenía el loop de Lautaro</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Un mensaje por escena</td>
                  <td className="py-3 pr-4">Cada escena dice una sola cosa, en una frase corta</td>
                  <td className="py-3">Ninguna frase</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Texto grande</td>
                  <td className="py-3 pr-4">Legible a 10 metros, sin entrecerrar los ojos</td>
                  <td className="py-3">Solo el logo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Jerarquía visual</td>
                  <td className="py-3 pr-4">Manda la frase. Lo demás acompaña</td>
                  <td className="py-3">Todo con el mismo peso</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Movimiento que guía la mirada</td>
                  <td className="py-3 pr-4">El movimiento termina donde está el mensaje</td>
                  <td className="py-3">Movimiento al azar</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Contraste alto</td>
                  <td className="py-3 pr-4">Texto claro sobre fondo oscuro, o al revés, sin brillos detrás de las letras</td>
                  <td className="py-3">Fondo azul con destellos</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Escenas que se sostienen solas</td>
                  <td className="py-3 pr-4">Cualquier escena se entiende sin haber visto la anterior</td>
                  <td className="py-3">No hay escenas</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>La última fila es la clave. Si el visitante entra en la escena tres, la escena tres le dice algo completo. Nada de una frase que arranca en una escena y termina en la siguiente. Nada que dependa de haber visto el principio.</p>
            <p className={body}>El movimiento también tiene un trabajo. Una pantalla quieta se vuelve parte de la pared. Algo que empieza a moverse o que crece hacia el ojo captura la atención aunque nadie la esté buscando (<a href="https://pubmed.ncbi.nlm.nih.gov/12930472/" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Abrams y Christ, 2003</a>; <a href="https://visualcognition.psych.northwestern.edu/publications/FranconeriSimons_Motion.pdf" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Franconeri y Simons, 2003</a>). Pero ese movimiento tiene que desembocar en el mensaje. Si la frase aparece y algo se mueve en otro rincón, la mirada se va al rincón.</p>
            <p className={body}>Lautaro mira su pantalla con esta tabla en la cabeza. Las esferas se mueven todo el tiempo y no llevan a ningún lado. El logo es lo único escrito, y es lo menos importante para quien no los conoce.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El empalme que nadie nota y el ritmo de reojo</h2>
            <p className={body}>Lautaro tenía bien una sola cosa: el empalme. Es justo lo que más se rompe cuando alguien convierte un institucional en loop.</p>
            <p className={body}>Un loop sin corte termina en el mismo cuadro donde empieza. La última escena pasa a la primera con el mismo movimiento que une a las demás. No hay fundido a negro, no hay logo final que se apaga, no hay cuadro vacío. Si la pantalla queda en negro un instante, el visitante lee &quot;terminó&quot; y sigue caminando.</p>
            <p className={body}>El ritmo se arma para la mirada de costado:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>Duración total entre 10 y 30 segundos.</strong> Alcanza para tres o cuatro escenas y se repite muchas veces a lo largo del día.</li>
              <li><strong>Cada escena dura lo que tarda en leerse con calma</strong>, no lo que tarda la animación en lucirse. Si la frase sale antes de que alguien la termine, sobra animación.</li>
              <li><strong>Texto quieto mientras se lee.</strong> El movimiento va antes y después de la frase, no encima.</li>
              <li><strong>Escenas en el orden en que pregunta un visitante:</strong> qué problema, qué solución, para quién, quiénes son.</li>
              <li><strong>Diseño a la resolución exacta de la pantalla.</strong> Nada de estirar un 16:9 en una LED panorámica ni de recortarlo para un tótem vertical. Si no sabés la resolución de tu pantalla, la <Link href="/guias/resolucion-pantalla-led" className="text-azul underline underline-offset-2 hover:text-cobalto">guía de resolución de pantalla LED</Link> te explica cómo sacarla.</li>
            </ol>
            <p className={body}>Sin audio, el texto hace el trabajo del locutor. Por eso la frase de cada escena se escribe antes que la animación, no después.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El guion que Lautaro arma en el viaje de vuelta</h2>
            <p className={body}>El congreso termina el miércoles. En el avión, Lautaro escribe en el celular lo que va a pedir para el próximo evento. Cuatro escenas, una frase cada una:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li>&quot;¿Cobrás con tres terminales distintas?&quot;</li>
              <li>&quot;Tarjeta, QR y transferencia en una sola cuenta.&quot;</li>
              <li>&quot;Tus ventas conciliadas, sin planillas.&quot;</li>
              <li>El logo, una línea con lo que son, &quot;Pagos para comercios&quot;, y el número de stand.</li>
            </ol>
            <p className={body}>No tira las esferas. Las usa. Una esfera se achica y se convierte en el QR de la escena dos. Otra se abre y deja ver la frase de la escena tres. El movimiento que antes decoraba ahora lleva el ojo a la frase. La escena cuatro vuelve al fondo azul de la escena uno, y el loop empalma sin que nadie note la costura.</p>
            <p className={body}>Si el loop hace su trabajo, la pregunta del dueño de farmacias cambia. Ya no es &quot;¿ustedes qué hacen?&quot;. Es &quot;¿esto funciona con todas mis sucursales?&quot;. Esa segunda pregunta es una conversación de venta. La primera era una explicación que el vendedor repetía todo el día.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos loops para las pantallas de tu stand. Trabajamos sin audio desde el primer boceto, porque sabemos que en la feria no se va a escuchar.</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops de 10 a 30 segundos que se repiten sin cortes a negro.</li>
              <li>Un mensaje por escena, con texto grande legible a 10 metros y contraste alto.</li>
              <li>Movimiento que lleva la mirada al mensaje, no que decora.</li>
              <li>Entrega a la resolución exacta de tu pantalla LED, videowall o tótem.</li>
              <li>Plazos cortos, para la feria que ya tenés encima.</li>
            </ul>
            <p className={body}>De vos necesitamos tres cosas: qué vendés en una frase, las medidas de la pantalla y la fecha del evento. Mirá cómo trabajamos los <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y qué querés que entienda el visitante cuando la mira de reojo.</p>
            <GuideCta
              slug="animacion-en-loop-sin-sonido-para-eventos"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/duracion-ideal-de-un-video-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">cuánto tiene que durar el video de tu stand</Link> · <Link href="/guias/contenido-para-pantallas-led-en-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">qué contenido poner en una pantalla LED de evento</Link></p>
    </GuideArticle>
  );
}
