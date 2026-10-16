import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/ideas-para-pantallas-en-stands.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("ideas-para-pantallas-en-stands");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function IdeasParaPantallasEnStandsGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>La pantalla más cara del stand de Diego va a pasar tres días mostrando lo único que nadie mira en una exposición.</p>
            <p className={body}>Pongamos que Diego es el responsable de marketing de una fábrica de sembradoras. Es martes y faltan dos semanas para una exposición rural en Santa Fe. El armador del stand le manda el render: una pantalla LED de tres metros por dos, al fondo, de cara al pasillo.</p>
            <p className={body}>Abajo del render viene una pregunta: «¿Qué contenido van a pasar?». Diego abre la carpeta de marketing. Encuentra el video institucional, un PowerPoint de producto y fotos de la fábrica.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Una pantalla de tres metros y nada para poner</h2>
            <p className={body}>Diego repasa lo que ya pagó. El lote, el armado, el flete de las máquinas, tres vendedores fuera de la oficina durante tres días. La pantalla es la pieza más visible del stand. También es la que menos pensó.</p>
            <p className={body}>Su gerente quiere leads. No visitas ni fotos para LinkedIn: conversaciones con productores y contratistas que van a cambiar la sembradora. Diego sospecha algo incómodo. <strong>Una pantalla que no frena gente es una pared cara que se ilumina.</strong></p>
            <p className={body}>Entonces hace lo que hace casi todo el mundo. Manda el institucional.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que el pasillo le hace a un video de 3 minutos</h2>
            <p className={body}>Primer día de exposición, las once de la mañana. El predio zumba. La gente camina mirando el celular. Un folleto termina en el tacho de la esquina.</p>
            <p className={body}>En la pantalla de Diego corre el institucional. Arranca con un dron sobre un lote recién sembrado. Sigue con el fundador hablando a cámara. Al minuto dos aparece la sembradora trabajando. Cierra con el logo sobre negro y música épica.</p>
            <p className={body}>En la oficina funciona. En el pasillo, no. Diego lo ve pasar en orden:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Nadie escucha.</strong> Hay parlantes, tractores en marcha, gente hablando. El fundador mueve la boca y nadie sabe qué dice. Los subtítulos chicos no se leen desde el pasillo.</li>
              <li><strong>Nadie llega al principio.</strong> El visitante pasa en cualquier momento del video. Si llega en el segundo noventa, ve una entrevista sin contexto.</li>
              <li><strong>Nadie se queda tres minutos.</strong> El visitante mira la pantalla de reojo y le regala, con suerte, un par de segundos: los estudios de pantallas en espacios públicos miden miradas breves, de uno a pocos segundos, y muchas veces ninguna (<a href="https://almeida.informatik.rwth-aachen.de/publications/huang2008b.pdf" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Huang, Koster y Borchers, 2008</a>; <a href="https://discovery-pp.ucl.ac.uk/id/eprint/1488204/1/Marshall_pn236-dalton.pdf" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Dalton, Collins y Marshall, 2015</a>). En esos segundos tiene que entender qué hace la empresa.</li>
              <li><strong>El negro corta la atención.</strong> Cada fundido a negro le dice al ojo «se terminó». Es el momento exacto en que la persona aparta la vista y sigue.</li>
              <li><strong>Lo importante llega tarde.</strong> Cuando aparece la sembradora, el visitante ya está dos stands más allá.</li>
            </ul>
            <p className={body}>El institucional no está mal hecho. Está hecho para otra situación: alguien sentado, con sonido, que eligió mirarlo. El pasillo es lo contrario. Si querés el criterio completo sobre cuánto tiene que durar lo que pasás, está en <Link href="/guias/duracion-ideal-de-un-video-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">la guía sobre la duración ideal de un video para stand</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Las tres de la tarde y el stand de enfrente está lleno</h2>
            <p className={body}>A las tres, Diego mira el pasillo. El stand de enfrente tiene gente parada.</p>
            <p className={body}>Ese stand no es más grande. Su pantalla es más chica que la de Diego. Pasa un loop de veinte segundos: un cuerpo de siembra abre el surco, deja la semilla y la tapa. La toma avanza por la hilera y vuelve a empezar. Arriba, una frase en blanco sobre fondo oscuro. Nada más.</p>
            <p className={body}>Diego nota tres cosas que su video no tiene:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Contraste alto.</strong> El sol del mediodía lava los colores suaves. Blanco sobre oscuro se lee de lejos.</li>
              <li><strong>Texto pensado para la distancia.</strong> Pocas palabras, letra gruesa, en el tercio superior. Ahí no lo tapa la gente parada adelante.</li>
              <li><strong>Nitidez a la medida.</strong> El loop de enfrente se ve definido. El suyo, estirado. Una pantalla LED tiene una resolución exacta según su tamaño y su pixel pitch. Si el video no se hace a esa medida, la pantalla lo estira y lo ablanda. <Link href="/guias/resolucion-pantalla-led" className="text-azul underline underline-offset-2 hover:text-cobalto">La guía de resolución de pantalla LED</Link> explica cómo calcularla.</li>
            </ul>
            <p className={body}>Su pantalla sigue encendida. Su pasillo sigue de largo.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Video corporativo o loop para el pasillo</h2>
            <p className={body}>Diego entiende que el problema no es la calidad. Es el tipo de pieza. Hay dos cosas distintas que se llaman «video», y mezclarlas cuesta caro.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal"></th>
                  <th className="py-3 pr-4 font-normal">Video corporativo</th>
                  <th className="py-3 font-normal">Loop para la pantalla del stand</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Quién lo mira</td>
                  <td className="py-3 pr-4">Alguien sentado que eligió verlo</td>
                  <td className="py-3">Alguien que camina y no eligió nada</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Duración</td>
                  <td className="py-3 pr-4">Minutos</td>
                  <td className="py-3">De 10 a 30 segundos, repetido</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Audio</td>
                  <td className="py-3 pr-4">Sostiene todo</td>
                  <td className="py-3">No existe</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Mensaje</td>
                  <td className="py-3 pr-4">Varios, en orden</td>
                  <td className="py-3">Uno por escena</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Texto</td>
                  <td className="py-3 pr-4">Subtítulos o nada</td>
                  <td className="py-3">Grande, legible a 10 metros</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Final</td>
                  <td className="py-3 pr-4">Logo y negro</td>
                  <td className="py-3">No hay final: vuelve al inicio sin corte</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Formato</td>
                  <td className="py-3 pr-4">16:9 estándar</td>
                  <td className="py-3">La medida exacta de esa pantalla</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Trabajo</td>
                  <td className="py-3 pr-4">Contar la empresa</td>
                  <td className="py-3">Frenar al visitante y abrir una conversación</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>El corporativo informa. El loop interrumpe. <strong>El visitante no frena por lo que le contás: frena porque algo se mueve y lo entiende de un vistazo.</strong> Después, el vendedor hace el resto.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Siete ideas para la pantalla que sí frenan gente</h2>
            <p className={body}>Esa noche, en el hotel, Diego abre la carpeta con otra pregunta. Ya no busca «qué video tenemos». Busca «qué tiene que entender alguien en tres pasos de pasillo». Estas son las ideas que mejor funcionan en la pantalla de un stand B2B.</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>El producto haciendo su trabajo.</strong> La sembradora entra al lote, abre el surco y deja la semilla. Sin nadie hablando. Movimiento continuo que el ojo sigue sin esfuerzo.</li>
              <li><strong>La pregunta del comprador, en letras enormes.</strong> «¿Tu sembradora entra bien en el rastrojo?». Una línea. El que se reconoce en la pregunta frena.</li>
              <li><strong>El antes y el después.</strong> El problema que tu cliente conoce y cómo queda resuelto. Dos escenas que se alternan en loop.</li>
              <li><strong>El producto por dentro.</strong> Una animación 3D desarma el dosificador y lo vuelve a armar. Muestra lo que una foto no puede.</li>
              <li><strong>Un dato que tus vendedores puedan defender.</strong> Algo verificable de tu empresa, nunca una cifra de mercado sacada de cualquier lado. Si el visitante pregunta, el vendedor responde.</li>
              <li><strong>La invitación concreta.</strong> «Pedí una demostración en tu campo». Le dice al visitante qué hacer cuando frena.</li>
              <li><strong>El cultivo del visitante, nombrado.</strong> Soja, maíz, trigo. Escenas cortas que rotan. Cada productor ve pasar su cultivo.</li>
            </ol>
            <p className={body}>Ninguna de estas ideas necesita audio. Todas entran en un loop de menos de 30 segundos. Todas dicen una cosa por escena.</p>
            <p className={body}>Diego también tacha ideas. Las diapositivas del PowerPoint con transiciones no frenan a nadie. Un reel de redes pensado para escucharse, tampoco. Y el video horizontal recortado para un tótem vertical deja la máquina partida por la mitad.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El brief que Diego escribe antes de dormir</h2>
            <p className={body}>Para la próxima exposición, Diego cambia el orden. Primero junta los datos de la pantalla. Después decide el mensaje. Recién ahí pide el contenido. Este es el brief:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Medidas de la pantalla en píxeles</strong>, no en metros. Se las pide al proveedor de la pantalla LED junto con el pixel pitch.</li>
              <li><strong>Orientación.</strong> Horizontal, vertical o videowall de varios módulos. Cada una se diseña aparte.</li>
              <li><strong>Un mensaje principal.</strong> La frase que un productor tiene que llevarse si mira una sola vez.</li>
              <li><strong>La acción que espera.</strong> Pedir una demostración, escanear un código, hablar con un vendedor.</li>
              <li><strong>Duración del loop.</strong> Entre 10 y 30 segundos, sin principio ni final visibles.</li>
              <li><strong>Sin audio.</strong> Todo se entiende con el sonido apagado.</li>
              <li><strong>Material de producto.</strong> Planos, modelos 3D, fotos en alta. Con eso se anima la sembradora sin filmar nada.</li>
              <li><strong>Entrega con margen</strong> para probar el loop en la pantalla real antes de abrir.</li>
            </ul>
            <p className={body}>En la exposición siguiente, el loop arranca a las nueve. Un productor levanta la vista y frena. Lee la pregunta. Se la hace en voz alta al vendedor. Diego no tiene un número mágico para su gerente. Tiene algo que el institucional nunca le dio: gente parada frente a su stand, preguntando.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos lo que se ve en la pantalla de tu stand. No vendemos pantallas: hacemos el contenido que corre en ellas.</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops de 10 a 30 segundos que se repiten sin corte a negro.</li>
              <li>Sin audio, con un mensaje por escena.</li>
              <li>Texto grande y contraste alto, legible a 10 metros.</li>
              <li>Entrega a la medida exacta de tu pantalla LED, tótem o videowall.</li>
              <li>Plazos cortos, pensados para la feria que ya tenés encima.</li>
            </ul>
            <p className={body}>Si tu pantalla es LED, mirá cómo trabajamos el <Link href="/contenido-pantallas-led" className="text-azul underline underline-offset-2 hover:text-cobalto">contenido para pantallas LED</Link>. Si necesitás la pieza para el stand completo, están los <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y cuándo abre la feria.</p>
            <GuideCta
              slug="ideas-para-pantallas-en-stands"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/como-hacer-que-la-gente-se-detenga-en-un-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo hacer que la gente se detenga en un stand</Link> · <Link href="/guias/duracion-ideal-de-un-video-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">la duración ideal de un video para stand</Link></p>
    </GuideArticle>
  );
}
