import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/que-proyectar-en-un-stand-de-feria.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("que-proyectar-en-un-stand-de-feria");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function QueProyectarEnUnStandDeFeriaGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>El video que pensás pasar en tu stand ya falló, y todavía no lo encendiste.</p>
            <p className={body}>Pongamos que se llama Lucía. Es responsable de marketing en una empresa que fabrica envases flexibles para alimentos. Faltan dos semanas para una feria del sector alimentario en Buenos Aires. El stand está pago. La pantalla también: una LED de pie, detrás del mostrador, que se ve desde el pasillo central.</p>
            <p className={body}>Lucía tiene un plan. Va a pasar el reel de la empresa. Dura cuatro minutos, tiene locución, música y una toma aérea de la planta. Lo hicieron el año pasado y quedó lindo. Lo carga en un pendrive y tacha la tarea de la lista.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Dos preguntas con la misma palabra</h2>
            <p className={body}>Si buscaste &quot;qué proyectar en un stand de feria&quot;, quizás encontraste guías sobre cómo planificar el stand: ubicación, metros, distribución. La palabra sirve para las dos cosas. Esas guías responden la otra pregunta.</p>
            <p className={body}>Esta responde la de Lucía: <strong>qué poner en la pantalla o el proyector que ya alquilaste.</strong> Qué mostrar, cuánto debe durar, cómo se lee desde el pasillo. Y por qué el reel de la empresa casi nunca es la respuesta.</p>
            <p className={body}>Lo que está en juego es concreto. Lucía pagó el espacio, la construcción, los pasajes y tres días de su equipo. La pantalla es lo único del stand que se mueve. Si muestra lo equivocado, el visitante pasa de largo y la inversión se queda mirando el pasillo vacío.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Las once de la mañana y el reel sigue sonando</h2>
            <p className={body}>Primer día. Lucía enciende la pantalla a las diez. El reel arranca con un logo que aparece despacio sobre fondo negro. Después, la toma aérea. Después, el gerente general habla a cámara.</p>
            <p className={body}>Nadie escucha al gerente. El pabellón zumba: parlantes de otros stands, una máquina de café, cientos de conversaciones a la vez. <strong>En una feria el audio no existe.</strong> La locución que explicaba todo se pierde a medio metro del parlante.</p>
            <p className={body}>El visitante, además, no se para frente a la pantalla. Camina. Mira el celular, busca el número de un stand, saluda a alguien. Le da a la pantalla de Lucía una mirada de reojo, de pocos segundos, y sigue.</p>
            <p className={body}>En esa mirada, el reel muestra lo que muestre en ese instante. Puede ser el fondo negro del arranque. Puede ser el gerente moviendo la boca sin sonido. Puede ser un plano de la planta que no dice nada sin la voz que lo acompañaba.</p>
            <p className={body}>Lucía nota algo peor a las once. El stand de al lado tiene una pantalla más chica. Pasa una animación corta, con una frase grande y un producto que gira. La gente frena ahí. Algunos sacan una foto. Después entran a preguntar.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que el pasillo le hace a un video de cuatro minutos</h2>
            <p className={body}>El reel de Lucía no es malo. Está hecho para otro lugar. Un video institucional funciona en una presentación, en la web o en una reunión. Ahí alguien eligió verlo, tiene sonido y lo mira de principio a fin.</p>
            <p className={body}>El pasillo invierte esas tres condiciones:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Lo que el reel necesita</th>
                  <th className="py-3 font-normal">Lo que el pasillo da</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Que lo miren de principio a fin</td>
                  <td className="py-3">Una mirada de reojo en cualquier momento</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Audio para entender la historia</td>
                  <td className="py-3">Ruido que tapa todo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Un espectador quieto</td>
                  <td className="py-3">Un visitante que camina</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Tiempo para llegar al mensaje</td>
                  <td className="py-3">Pocos segundos antes de que pase de largo</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>Por eso conviene separar dos cosas. Un <strong>video corporativo</strong> cuenta quién sos. Un <strong>activo de conversión</strong> frena a alguien y le da una razón para entrar. El stand necesita el segundo.</p>
            <p className={body}>El activo de conversión tiene reglas simples. Dura poco y se repite. Cada escena dice una sola cosa. El texto se lee de lejos. Y nunca corta a negro, porque el negro es el momento exacto en que el visitante mira y no ve nada.</p>
            <p className={body}>Si querés profundizar en el largo justo, la guía sobre la <Link href="/guias/duracion-ideal-de-un-video-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">duración ideal de un video para stand</Link> explica cómo se decide.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La pantalla también tiene sus exigencias</h2>
            <p className={body}>A la tarde, Lucía prueba otra cosa. Saca el reel y pone fotos de producto en presentación. Es mejor, pero tampoco frena a nadie. Las fotos son quietas. Y el ojo del visitante, que viene esquivando estímulos, solo reacciona a lo que se mueve.</p>
            <p className={body}>Además, la pantalla impone condiciones que el contenido tiene que respetar:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Proyector o LED.</strong> Un proyector pierde contraste con la luz del pabellón. Si es tu caso, usá fondos oscuros, colores plenos y texto blanco grueso. Una pantalla LED aguanta mejor la luz del pabellón.</li>
              <li><strong>Resolución exacta.</strong> Una LED no tiene la resolución de un televisor. Depende del tamaño y del pixel pitch. Un video en 1920×1080 se ve estirado o con bordes si la pantalla mide otra cosa. Pedí la resolución al proveedor antes de diseñar nada.</li>
              <li><strong>Orientación.</strong> Una pantalla vertical no es una horizontal recortada. Si cortás los costados del reel, se pierden textos y caras.</li>
              <li><strong>Distancia.</strong> El visitante mira desde el pasillo, no desde el mostrador. El texto tiene que leerse a unos 10 metros. Si necesita acercarse para leer, ya se fue.</li>
            </ul>
            <p className={body}>Lucía se da cuenta de que el problema no era el contenido de su empresa. Era el formato. Tenía buen material para una pantalla que no existe en una feria.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué proyectar, escena por escena</h2>
            <p className={body}>Esa noche, Lucía arma lo que tendría que haber llevado. No hace falta filmar nada nuevo. Hace falta ordenar lo que ya tiene en escenas cortas, sin audio, con un mensaje cada una.</p>
            <p className={body}>Esto es lo que funciona en un stand B2B:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>El problema del visitante, en una frase.</strong> &quot;Tu envase se rompe en la cadena de frío.&quot; Texto grande, sobre movimiento continuo. Es lo que frena.</li>
              <li><strong>El producto en acción.</strong> El envase que se sella, se apila, se dobla sin romperse. Si el producto es chico o técnico, una animación 3D lo muestra mejor que una foto.</li>
              <li><strong>Una prueba concreta.</strong> Una certificación, un rubro donde trabajan, un dato que la empresa pueda respaldar. Si no tenés el dato verificado, no lo pongas.</li>
              <li><strong>Qué hacer ahora.</strong> &quot;Pedí la muestra en el mostrador.&quot; Una acción que el visitante pueda cumplir a tres pasos.</li>
              <li><strong>La marca, sin pausa.</strong> El logo vuelve a la primera escena sin cortar. El loop arranca de nuevo y nadie nota dónde terminó.</li>
            </ol>
            <p className={body}>Todo eso entra en un loop de 10 a 30 segundos. El visitante que mira en cualquier momento ve algo entero: una frase, un producto, una acción.</p>
            <p className={body}>Lo que conviene dejar afuera: la entrevista al gerente, la toma aérea sin contexto, el logo sobre negro al principio, los textos chicos en la parte de abajo y cualquier cosa que necesite sonido para entenderse.</p>
            <p className={body}>Para el brief que le vas a pasar a quien haga el loop, anotá:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Medida exacta de la pantalla, en píxeles, y si es horizontal o vertical.</li>
              <li>Si es proyector o LED, y cómo es la luz del pabellón.</li>
              <li>La frase del problema que resolvés, en menos de diez palabras.</li>
              <li>Qué acción querés que haga el visitante en el stand.</li>
              <li>El material que ya tenés: fotos, renders, logos, colores.</li>
            </ul>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El loop del segundo día</h2>
            <p className={body}>Al día siguiente, Lucía no tiene un loop nuevo. Hay cosas que no se resuelven en una noche. Pero cambia lo que puede: saca el reel, deja una sola foto del producto con una frase grande del problema y apaga el audio.</p>
            <p className={body}>No es el loop que necesitaba. Igual, el cambio se nota. Algunos visitantes leen la frase sin frenar. Otros frenan y preguntan. El equipo tiene de qué hablar cuando alguien se acerca.</p>
            <p className={body}>Lucía anota lo que va a pedir para la próxima feria. Ya no dice &quot;un video para el stand&quot;. Dice la medida de la pantalla, la frase, la acción y la duración.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos los loops que Lucía no llegó a tener. Es lo único que hacemos:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops cortos de 10 a 30 segundos que se repiten sin corte a negro.</li>
              <li>Sin audio: cada escena se entiende en silencio.</li>
              <li>Un mensaje por escena, con texto grande y contraste alto para leerse a 10 metros.</li>
              <li>Entrega a la resolución exacta de tu pantalla LED, videowall, tótem o proyector.</li>
              <li>Plazos cortos, para cuando la feria ya está en el calendario.</li>
            </ul>
            <p className={body}>Necesitamos la medida de la pantalla, tu material y la frase de lo que resolvés. El resto lo armamos nosotros. Mirá cómo trabajamos los <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y para cuándo es la feria.</p>
            <GuideCta
              slug="que-proyectar-en-un-stand-de-feria"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/duracion-ideal-de-un-video-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">duración ideal de un video para stand</Link> · <Link href="/guias/como-hacer-que-la-gente-se-detenga-en-un-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo hacer que la gente se detenga en un stand</Link></p>
    </GuideArticle>
  );
}
