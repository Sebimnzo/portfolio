import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/motion-graphics-para-eventos-corporativos.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("motion-graphics-para-eventos-corporativos");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function MotionGraphicsParaEventosCorporativosGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>La animación de Andrés ganó todas las reuniones internas y perdió el pasillo en diez minutos.</p>
            <p className={body}>Pongamos que Andrés dirige marketing en una empresa que fabrica tableros eléctricos para plantas industriales. Es martes, nueve y media, primer día de una exposición del sector energético en Córdoba. El pabellón todavía huele a alfombra nueva. Un autoelevador pita marcha atrás en el fondo.</p>
            <p className={body}>Andrés encargó un motion para la pantalla LED del stand. Lo aprobó en su notebook, con auriculares, en la sala de reuniones. Duraba tres minutos. Tenía tipografía fina, partículas que se armaban en el logo, una locución con música y una cámara que recorría un tablero en 3D. Al directorio le encantó.</p>
            <p className={body}>Ahora la pieza corre en la pantalla. La gente pasa con el café en la mano y el celular en la otra. Nadie frena.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La pieza estaba bien hecha y aun así no sirve</h2>
            <p className={body}>Andrés pagó el espacio, la construcción, la pantalla y dos vendedores parados en la alfombra. La exposición dura tres días. Lo que está en juego son las conversaciones con jefes de mantenimiento que tendrían que empezar en ese pasillo.</p>
            <p className={body}>Se acerca a la pantalla y la mira como la mira un visitante. Desde la alfombra del pasillo, el texto fino es una raya gris. Las partículas parecen ruido. La locución no existe: el stand de al lado tiene un compresor en exhibición.</p>
            <p className={body}><strong>El motion no está mal hecho. Está hecho para otro lugar.</strong></p>
            <p className={body}>Andrés sabe qué es un motion. Lo que no sabe es qué diferencia a uno que funciona en un pasillo de uno que funciona en una sala.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que el pasillo le hace a un motion de sala</h2>
            <p className={body}>Un motion de sala supone tres cosas: que lo mirás de cerca, que lo escuchás y que lo ves desde el principio. En una feria no se cumple ninguna.</p>
            <p className={body}><strong>Lejos.</strong> El visitante mira la pantalla desde el pasillo, no desde una silla. A diez metros, una tipografía fina desaparece. Los degradés oscuros se vuelven una mancha. Un detalle chico se pierde entre los píxeles: la pantalla LED tiene un pixel pitch, la distancia entre sus LEDs, y todo lo que es más chico que eso no se ve. Por eso una pieza para LED se diseña a la resolución exacta de esa pantalla, no a 1920×1080 por costumbre.</p>
            <p className={body}><strong>Con ruido.</strong> En un pabellón no se escucha la locución. Ni la música. Si la idea depende de lo que dice la voz, sin la voz no hay idea. El motion tiene que contar todo con imagen y texto.</p>
            <p className={body}><strong>En movimiento.</strong> El visitante camina. Mira de reojo, un instante, y sigue. No llega al segundo cero de tu pieza: llega a un segundo cualquiera. Si ese segundo es un logo armándose o una transición a negro, se va sin saber qué vendés.</p>
            <p className={body}>Andrés repasa su pieza con esa lista. El logo tarda en armarse. El producto aparece recién a la mitad. El texto clave dura un parpadeo y es fino. La locución explica lo que la imagen no dice.</p>
            <p className={body}>Son las once y el pasillo se llena. El stand de enfrente tiene una pantalla más chica que la suya. Muestra un solo mensaje enorme, en blanco sobre un color plano, y un producto que gira sin parar. Ahí sí frena gente.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Motion corporativo y motion de pasillo no son el mismo encargo</h2>
            <p className={body}>Andrés pidió &quot;un motion para el evento&quot;. El proveedor entendió &quot;un video corporativo animado&quot;. Nadie nota el malentendido hasta que la pieza está en la pantalla.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal"></th>
                  <th className="py-3 pr-4 font-normal">Motion corporativo</th>
                  <th className="py-3 font-normal">Motion de pasillo</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Dónde se ve</td>
                  <td className="py-3 pr-4">Sala, web, presentación</td>
                  <td className="py-3">Pantalla LED, videowall o tótem en un stand</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Cómo se mira</td>
                  <td className="py-3 pr-4">Sentado, de principio a fin</td>
                  <td className="py-3">Caminando, de reojo, desde cualquier segundo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Audio</td>
                  <td className="py-3 pr-4">Locución y música</td>
                  <td className="py-3">Sin audio</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Duración</td>
                  <td className="py-3 pr-4">Lo que pida la historia</td>
                  <td className="py-3">Loop corto de 10 a 30 segundos que se repite</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Texto</td>
                  <td className="py-3 pr-4">Subtítulos, frases largas</td>
                  <td className="py-3">Pocas palabras, grandes, legibles a 10 metros</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Estructura</td>
                  <td className="py-3 pr-4">Arranque, desarrollo, cierre</td>
                  <td className="py-3">Un mensaje por escena, sin final</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Formato</td>
                  <td className="py-3 pr-4">Estándar de pantalla</td>
                  <td className="py-3">La medida exacta de la pantalla del stand</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Para qué sirve</td>
                  <td className="py-3 pr-4">Explicar la empresa</td>
                  <td className="py-3">Que el visitante frene y pregunte</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>El corporativo informa a alguien que ya decidió mirar. El de pasillo tiene que conseguir esa decisión. <strong>Uno explica. El otro frena.</strong></p>
            <p className={body}>Por eso el motion de pasillo se arma como loop: sin principio ni final, sin cortes a negro, para que cualquier segundo sirva de entrada. Si querés ver cómo se construye uno, leé <Link href="/guias/animacion-en-loop-sin-sonido-para-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo armar una animación en loop sin sonido para eventos</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Cuatro pruebas para saber si un motion sirve en un evento</h2>
            <p className={body}>Al mediodía, Andrés se para en el pasillo y hace algo que tendría que haber hecho antes. Mira su pieza con criterio de visitante. Estas son las pruebas que cualquiera puede hacer antes de aprobar un motion:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>La prueba de los diez metros.</strong> Poné la pieza en pantalla completa, alejate y mirá. Si no leés el mensaje, el visitante tampoco.</li>
              <li><strong>La prueba del mute.</strong> Sacale el audio. Si la idea se cae, la pieza depende de algo que en la feria no existe.</li>
              <li><strong>La prueba del segundo cualquiera.</strong> Pausá en cinco momentos al azar. En cada uno tiene que verse qué vendés o qué problema resolvés.</li>
              <li><strong>La prueba del loop.</strong> Mirá el empalme entre el último y el primer cuadro. Si hay negro, un salto o un logo que vuelve a armarse, la pantalla parece rota cada vez que reinicia.</li>
            </ol>
            <p className={body}>La pieza de Andrés no pasa ninguna. No es culpa del animador. Nadie le dijo dónde se iba a ver.</p>
            <p className={body}>Hay una complicación más. La pantalla del stand no es la de la notebook. Tiene otra proporción, otra resolución y otro brillo. Si la LED es vertical, recortar una pieza horizontal deja el texto cortado en los bordes. Si es un videowall, el marco entre módulos parte por la mitad lo que caiga ahí. El motion tiene que nacer para esa pantalla, con sus medidas desde el primer boceto.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El brief que Andrés manda para la próxima feria</h2>
            <p className={body}>La exposición termina el jueves. Andrés vuelve con menos conversaciones de las que esperaba y con una lista. Para el próximo evento ya sabe qué pedir. Este es su brief, y te sirve igual:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Medidas exactas de la pantalla:</strong> ancho y alto en píxeles, orientación y pixel pitch. Las pide al proveedor de la LED antes de empezar.</li>
              <li><strong>Distancia de lectura:</strong> desde dónde se va a mirar. En un pasillo, pensá en 10 metros.</li>
              <li><strong>Un mensaje por escena:</strong> qué problema resuelve el producto, dicho en pocas palabras.</li>
              <li><strong>Sin audio:</strong> todo se cuenta con imagen y texto.</li>
              <li><strong>Loop de 10 a 30 segundos</strong> que empalma sin corte a negro.</li>
              <li><strong>Contraste alto:</strong> colores planos, texto grande, nada de degradés oscuros ni líneas finas.</li>
              <li><strong>El producto en movimiento continuo:</strong> un tablero que gira, un detalle que se abre, algo que el ojo siga.</li>
              <li><strong>Entrega en el formato que pide la pantalla,</strong> probado antes del armado.</li>
            </ul>
            <p className={body}>El brief no habla de &quot;impacto&quot; ni de &quot;estética&quot;. Habla de distancia, ruido y movimiento. <strong>Ese es el criterio que separa a un proveedor que sirve de uno que no.</strong> Preguntale a quien vayas a contratar cómo resuelve cada punto. Si te responde con su reel de piezas corporativas, ya sabés.</p>
            <p className={body}>Andrés no va a tener un final feliz el jueves. Va a tener una pieza que pasa las cuatro pruebas en la próxima feria. Eso alcanza para que la gente frene y sus vendedores tengan con quién hablar.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos motion para pantallas de stands. Piezas para el pasillo, no para la sala de reuniones:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Loops cortos que se repiten,</strong> de 10 a 30 segundos, sin audio y sin cortes a negro.</li>
              <li><strong>Un mensaje por escena,</strong> con texto grande y contraste alto, legible a 10 metros.</li>
              <li><strong>Entrega a la medida exacta de tu pantalla:</strong> LED, tótem vertical o videowall, a su resolución y su pixel pitch.</li>
              <li><strong>Plazos cortos,</strong> porque la feria siempre está cerca.</li>
            </ul>
            <p className={body}>Si tu stand tiene una pantalla LED, mirá cómo trabajamos los <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands</Link>. Si tenés varios módulos en una pared, lo que sirve es una <Link href="/animacion-videowall" className="text-azul underline underline-offset-2 hover:text-cobalto">animación para videowall</Link> pensada como una sola imagen.</p>
            <p className={body}>Lo que necesitamos de vos: las medidas de la pantalla, qué vendés y qué querés que el visitante entienda al pasar.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y para cuándo es el evento.</p>
            <GuideCta
              slug="motion-graphics-para-eventos-corporativos"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/contenido-para-pantallas-led-en-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">qué poner en la pantalla LED de tu stand en un evento</Link> · <Link href="/guias/animacion-en-loop-sin-sonido-para-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo armar una animación en loop sin sonido para eventos</Link></p>
    </GuideArticle>
  );
}
