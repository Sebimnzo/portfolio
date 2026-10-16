import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/duracion-ideal-de-un-video-para-stand.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("duracion-ideal-de-un-video-para-stand");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function DuracionIdealDeUnVideoParaStandGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>Tomás tiene sobre la mesa una propuesta de video de dos minutos, y hay un solo segundo de ese video que importa: el primero que ve cada visitante.</p>
            <p className={body}>Pongamos que Tomás es gerente de producto en una fábrica de herramientas eléctricas profesionales: amoladoras, rotomartillos, sierras circulares para obra. Es un ejemplo, pero la escena se repite en cada fábrica que va a una feria. Martes, nueve de la mañana. En la sala de reuniones hay un rotomartillo nuevo, todavía con el precinto. En la notebook, el mail de la productora.</p>
            <p className={body}>La propuesta dice &quot;video institucional, 2 minutos, para que se entienda todo&quot;. Trae locución, música, planos de la planta y una animación de cada herramienta por dentro. Tomás lee la palabra &quot;todo&quot; dos veces. Algo no le cierra y no sabe qué.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Dos minutos para que se entienda todo</h2>
            <p className={body}>La feria ferretera arranca en tres semanas. La empresa pagó el espacio, el armado y una pantalla LED grande al fondo del stand. Van a pasar compradores de ferreterías, distribuidores, gente de corralones. Cada uno que frena es una conversación posible. Cada uno que pasa de largo es plata del stand que no vuelve.</p>
            <p className={body}>La productora tiene su lógica. Dos minutos alcanzan para contar la historia de la fábrica, mostrar la línea completa y cerrar con el logo. En una reunión, con la gente sentada, ese video funciona.</p>
            <p className={body}>Tomás no duda del video. <strong>Duda de que alguien lo vaya a ver sentado.</strong> Y ahí está la pregunta que lo trajo hasta acá: cuánto tiene que durar un video para una pantalla de stand.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La respuesta corta: un loop de 10 a 30 segundos</h2>
            <p className={body}>Para la pantalla del stand, nuestro criterio de oficio en Mansalva es un loop de entre 10 y 30 segundos que se repite sin parar. No es una ley científica. Es lo que funciona en un pasillo donde nadie se sienta.</p>
            <p className={body}>El largo exacto sale de cuántos mensajes tenés que dar:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Mensajes que tiene que dar la pantalla</th>
                  <th className="py-3 pr-4 font-normal">Largo del loop</th>
                  <th className="py-3 font-normal">Cómo se arma</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">1 (qué hacés)</td>
                  <td className="py-3 pr-4">cerca de 10 s</td>
                  <td className="py-3">Una escena, producto en movimiento, una frase</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">2 o 3 (qué hacés, para quién, qué novedad traés)</td>
                  <td className="py-3 pr-4">15 a 20 s</td>
                  <td className="py-3">Una escena por mensaje, el logo siempre visible</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">4</td>
                  <td className="py-3 pr-4">cerca de 30 s</td>
                  <td className="py-3">Cuatro escenas cortas, cada una se entiende sola</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">5 o más</td>
                  <td className="py-3 pr-4">no entra</td>
                  <td className="py-3">Elegí tres, o repartí en dos pantallas</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>Tres reglas acompañan la tabla:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>Un mensaje por escena.</strong> Una frase corta, en texto grande, legible a 10 metros.</li>
              <li><strong>Sin audio.</strong> En un pabellón no se escucha nada que no grite.</li>
              <li><strong>Sin corte a negro.</strong> El último cuadro empalma con el primero, así el loop no tiene principio visible.</li>
            </ol>
            <p className={body}>Tomás cuenta lo que quiere decir. Le salen nueve cosas. La tabla le dice que le sobran seis.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que el pasillo le hace a un video de dos minutos</h2>
            <p className={body}>Ahora Tomás se pone en el pasillo de la feria. A media mañana ya está lleno. Hay un zumbido parejo de compresores en demostración. Alguien prueba una sierra de banco en el stand de enfrente. La gente camina con una bolsa de folletos en una mano y el celular en la otra.</p>
            <p className={body}>Un comprador de una cadena de ferreterías pasa frente al stand. Mira la pantalla de reojo. El video de dos minutos está en el segundo 47: un plano lento de la línea de montaje con una voz en off que nadie oye. El comprador no sabe qué fabrica la empresa. Sigue caminando.</p>
            <p className={body}>Ese es el problema del video largo en una pantalla de stand. <strong>El visitante no elige cuándo empieza a mirar.</strong> Entra en cualquier segundo y se va cuando su paso se lo pide. Con un video de dos minutos, lo más probable es que vea un fragmento que no dice nada solo: una transición, un plano de ambiente, una placa de datos a medio aparecer.</p>
            <p className={body}>Con un loop corto pasa lo contrario. Si el loop dura menos de lo que tarda alguien en cruzar tu frente, el visitante ve el mensaje completo, entre en el segundo que entre. Empieza por la mitad, llega al final, el loop vuelve a arrancar y completa lo que le faltaba.</p>
            <p className={body}>Hay dos cosas más que el pasillo le hace al video largo:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Lo deja mudo.</strong> La locución explica la mitad del video. Sin audio, esa mitad no existe.</li>
              <li><strong>Lo vuelve chico.</strong> Un plano general de la planta se ve lindo en una sala. A diez metros, en una LED, es una mancha gris.</li>
            </ul>
            <p className={body}>Si querés ver cómo se diseña un video que funciona sin sonido, lo desarmamos en <Link href="/guias/animacion-en-loop-sin-sonido-para-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">la guía de animación en loop sin sonido para eventos</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Cómo se decide el largo: tus mensajes contra el paso del visitante</h2>
            <p className={body}>La tabla da un rango. El número final lo decide tu stand. Hacen falta dos datos y ninguno sale de un estudio: los medís vos.</p>
            <p className={body}><strong>Primer dato: cuánto tarda alguien en pasar frente a tu stand.</strong> A paso normal, de 1,2 a 1,4 metros por segundo (<a href="https://bacpar.csp.org.uk/node/338279" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Bohannon y Andrews, 2011</a>), cruzar un frente de stand de cuatro a seis metros lleva entre tres y cinco segundos. Pero depende del ancho del frente, de si estás en un pasillo central o en una esquina, y de cuánta gente camina. La forma honesta de saberlo es medirlo. En la próxima feria a la que vayas, pará en un pasillo parecido al tuyo. Con el cronómetro del celular, medí cuánto tarda la gente en cruzar un frente del mismo ancho. Hacelo diez veces y quedate con el tiempo más corto.</p>
            <p className={body}><strong>Segundo dato: cuántos mensajes necesitás de verdad.</strong> No los que querés, los que el visitante tiene que llevarse para frenar. Casi siempre son tres: qué hacés, para quién y qué traés de nuevo a esta feria.</p>
            <p className={body}>Con los dos datos, la cuenta es simple:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li>Si el paso dura más que tu loop, perfecto: el visitante ve todo.</li>
              <li>Si el paso dura menos, acortá el loop o sacá un mensaje.</li>
              <li>Si no podés sacar nada, hacé que <strong>cada escena se sostenga sola</strong>: producto, frase y logo en cada una. Así, el que ve una sola escena igual se lleva algo.</li>
            </ol>
            <p className={body}>Tomás hace la prueba con lo que tiene. Saca el plano de la planta: lindo, pero no vende. Saca la historia de la fábrica: eso se cuenta en la mesa. Saca las fichas técnicas: nadie lee una tabla de torque caminando. Le quedan tres mensajes. El rotomartillo nuevo, la línea para obra pesada, el servicio técnico en todo el país.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El jefe quiere que se vea todo</h2>
            <p className={body}>El conflicto no termina en la tabla. El director comercial ve el borrador de Tomás y pregunta dónde quedaron las sierras, las lijadoras y la historia de la fábrica. &quot;Pagamos la pantalla más grande del pabellón. Que se vea todo.&quot;</p>
            <p className={body}>Es el pedido más común antes de una feria, y tiene sentido de un lado. La pantalla es cara. Dejarla con tres mensajes parece desperdiciarla.</p>
            <p className={body}>Pero la pantalla no es un catálogo. <strong>Su trabajo es que alguien frene, no que alguien aprenda.</strong> El catálogo, las fichas y la historia aparecen después, cuando el visitante ya está adentro hablando con un vendedor. Si la pantalla intenta hacer ese trabajo, no hace el suyo.</p>
            <p className={body}>Tomás lo explica con el pasillo, no con teoría. Le pide al director que piense en la última feria. Cuántos stands recuerda por su video institucional. Cuántos por una imagen que se movía y decía una cosa clara. El director no contesta. Pero acepta probar.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Cada video en su lugar</h2>
            <p className={body}>Tomás no tira la propuesta de la productora. La cambia de lugar.</p>
            <p className={body}>El video de dos minutos va a una pantalla chica en la mesa de reuniones del stand. Ahí el visitante ya frenó, está sentado y quiere entender. Para esa conversación, dos minutos con locución sirven, y con auriculares o volumen bajo hasta se escuchan.</p>
            <p className={body}>En la LED del fondo va otra pieza: un loop de unos veinte segundos. Tres escenas, una por mensaje. El rotomartillo gira en primer plano, con una frase corta en letra grande. El logo queda fijo en una esquina. El último cuadro empalma con el primero. No hay negro en ningún momento.</p>
            <p className={body}>Tomás no sabe todavía cuánta gente va a frenar. Nadie lo sabe antes de la feria. Lo que sí sabe es que cada persona que mire la pantalla, en el segundo que sea, va a ver qué fabrica su empresa. Con el video de dos minutos no podía decir eso.</p>
            <p className={body}>Si estás armando el pedido para tu propio stand, en <Link href="/guias/video-para-stand-de-feria" className="text-azul underline underline-offset-2 hover:text-cobalto">qué pedir cuando encargás el video para tu stand de feria</Link> tenés el brief punto por punto.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos los loops que van en la pantalla del stand. No el institucional: la pieza que trabaja en el pasillo.</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Loops de 10 a 30 segundos</strong> que se repiten sin corte a negro.</li>
              <li><strong>Sin audio</strong>, con un mensaje por escena y texto grande legible a 10 metros.</li>
              <li><strong>Contraste alto y movimiento continuo</strong>, para que el ojo lo encuentre de reojo.</li>
              <li><strong>Entrega a la medida exacta de tu pantalla</strong>: LED, videowall o tótem, a su resolución real.</li>
              <li><strong>Plazos cortos</strong>, pensados para la feria que ya tenés encima.</li>
            </ul>
            <p className={body}>Necesitamos tres cosas tuyas: las medidas o la resolución de la pantalla, tus tres mensajes y el material de producto que ya tengas. Mirá cómo trabajamos en <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y qué querés decir, y te respondemos con una propuesta de loop.</p>
            <p className="text-[15px] leading-[1.5] text-plata">Hablemos de tu próximo evento: escribinos a <GuideCta slug="duracion-ideal-de-un-video-para-stand" className="font-medium text-azul-claro hover:underline">manzo@mansalvadesign.com</GuideCta>.</p>
          </section>
    </GuideArticle>
  );
}
