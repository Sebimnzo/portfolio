import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/ideas-para-stands-comerciales-que-destaquen.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("ideas-para-stands-comerciales-que-destaquen");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function IdeasParaStandsComercialesQueDestaquenGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>Mariana tiene un tablero de Pinterest con cuarenta stands espectaculares. Ninguno le sirve, y todavía no sabe por qué.</p>
            <p className={body}>Pongamos que Mariana es responsable de marketing en una fábrica de aberturas de aluminio. Ventanas, puertas corredizas, cerramientos para obra. Es un ejemplo, pero seguro conocés a alguien igual. Faltan tres semanas para una feria de la construcción y el pedido de su jefe entró por WhatsApp, en una línea: «Que el stand destaque».</p>
            <p className={body}>Son las once de la noche. Mariana baja por el tablero: estructuras de doble altura, pisos de madera, una escalera que no lleva a ningún lado. Todos parecen de 200 metros cuadrados. El suyo tiene 18, en un pasillo lateral, con un presupuesto que ya está casi todo en el alquiler del espacio.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Destacar, con 18 metros y un pasillo lateral</h2>
            <p className={body}>El jefe de Mariana no pidió leads. Pidió que el stand destaque. Pero lo que en realidad quiere es lo que quiere cualquier dueño de fábrica: volver de la feria con obras para cotizar.</p>
            <p className={body}>Ahí está el problema de quien busca ideas para stands comerciales que destaquen. Encuentra fotos. Encuentra listas con globos, caramelos y &quot;un diseño atractivo&quot;. Nadie le dice qué idea hace que un arquitecto frene, pregunte y deje su contacto.</p>
            <p className={body}>Lo que Mariana tiene en juego es concreto:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>El alquiler del espacio, que ya está pagado.</li>
              <li>Tres días de dos vendedores parados en el stand.</li>
              <li>La conversación con el jefe a la vuelta, cuando pregunte qué salió de la feria.</li>
            </ul>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que Pinterest no muestra de un stand de 200 metros</h2>
            <p className={body}>Mariana intenta lo lógico: adaptar. Toma un stand que le gusta y lo achica. Saca la doble altura, cambia la madera por vinilo, deja el logo enorme. Le pasa el boceto al armador y el resultado parece la versión económica de algo caro.</p>
            <p className={body}><strong>Los stands de Pinterest destacan por el tamaño y la plata, no por una idea.</strong> Una estructura de doble altura se ve desde la otra punta del pabellón porque se levanta por encima de todo lo demás. Achicada a 18 metros, pierde lo único que la hacía funcionar.</p>
            <p className={body}>Hay otra cosa que la foto no muestra: la foto se saca con el pabellón vacío. Sin gente, sin ruido, con la luz armada para la cámara. El visitante nunca ve el stand así. Lo ve de costado, caminando, entre dos personas y un carrito.</p>
            <p className={body}>Así que Mariana vuelve a lo que conoce. Banner con las cinco líneas de producto. Folletos. Un bowl con caramelos. Un televisor con el institucional de la fábrica, el que tiene locución y música.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El primer día, a las once, el pasillo pasa de largo</h2>
            <p className={body}>Primer día de feria. A las once el pabellón zumba. Por el pasillo lateral caminan constructores, arquitectos, dueños de corralones. Miran el celular. Miran de reojo.</p>
            <p className={body}>Mariana mira su stand desde el pasillo, como un visitante más, y entiende lo que pasa:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>El banner dice todo y no se lee nada. Cinco líneas de producto, logo, slogan, web. A diez metros es una mancha gris.</li>
              <li>El institucional no se escucha. En una feria hay ruido. La locución, que explica todo, no le llega a nadie. Sin audio, quedan tres minutos de planos de la planta.</li>
              <li>Los folletos van al tacho. Alguien agarra uno por cortesía y lo deja en el primer cesto.</li>
              <li>Los caramelos frenan a la persona equivocada. Frena el que tiene hambre, no el que tiene una obra.</li>
            </ul>
            <p className={body}>Al mediodía pasa algo peor. El stand de enfrente, otro fabricante, igual de chico, tiene gente. No tiene estructura ni madera. Tiene una pantalla vertical con una ventana que se abre, se cierra y vuelve a abrirse. Una frase grande arriba. Nada más.</p>
            <p className={body}>Ese stand no es más lindo. Es más fácil de entender en tres segundos.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Destacar sirve si alguien frena y habla</h2>
            <p className={body}>Esa noche Mariana cambia la pregunta. Deja de pensar en cómo destacar y empieza a pensar en qué tiene que pasar en el pasillo para que la feria valga lo que costó.</p>
            <p className={body}>Un stand convierte en cuatro pasos. Cada idea tiene que mover alguno:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Paso</th>
                  <th className="py-3 pr-4 font-normal">Qué contar</th>
                  <th className="py-3 font-normal">Qué te dice</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Paradas</td>
                  <td className="py-3 pr-4">Personas que frenan al menos unos segundos</td>
                  <td className="py-3">Si el frente se entiende de lejos</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Conversaciones</td>
                  <td className="py-3 pr-4">Personas que hablan con un vendedor</td>
                  <td className="py-3">Si el mensaje genera una pregunta</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Leads calificados</td>
                  <td className="py-3 pr-4">Contactos con obra, plazo o necesidad real</td>
                  <td className="py-3">Si frena la gente correcta</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Costo por lead</td>
                  <td className="py-3 pr-4">Total de la feria dividido leads calificados</td>
                  <td className="py-3">Si conviene volver el año que viene</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>Ninguno de estos números sale de una foto. Se cuentan con una planilla y un vendedor atento. Y cambian la conversación con el jefe: &quot;destacó&quot; no se discute; &quot;frenaron tantos y hablamos con tantos&quot; sí.</p>
            <p className={body}>Mirá también por qué el movimiento pesa tanto en el primer paso. El visitante camina con la vista en el celular o en el piso. La vista periférica lee mal, pero detecta el movimiento enseguida. Un stand quieto se mezcla con los de al lado. Una pantalla con movimiento continuo corta ese patrón y gira la cabeza.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Seis ideas que entran en su presupuesto y mueven la aguja</h2>
            <p className={body}>El segundo día, Mariana rearma lo que puede. Y anota lo que va a hacer distinto en la próxima feria. Son ideas que se juzgan por el paso que mueven, no por la foto.</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li>Una sola frase en el frente. La que le importa a quien tiene una obra, legible a diez metros. No el slogan: el beneficio. &quot;Aberturas que llegan a obra en plazo&quot; frena más que el logo solo.</li>
              <li>Producto que se toque. Un corte del perfil sobre el mostrador. Una ventana que el visitante pueda abrir y cerrar. El arquitecto confía en lo que tiene en la mano.</li>
              <li>Una pantalla con un loop corto y sin audio. Quince o veinte segundos que muestren lo que el catálogo no puede: la abertura en movimiento, el perfil por dentro, cómo se ve terminada en una fachada. Se repite sin corte a negro.</li>
              <li>Una pregunta que filtre. El vendedor no dice &quot;¿te puedo ayudar?&quot;. Pregunta &quot;¿tenés una obra en curso?&quot;. La respuesta separa al curioso del lead.</li>
              <li>Un registro de tres datos. Nombre, contacto, tipo de obra. Más campos alargan la fila y nadie los completa.</li>
              <li>Citas agendadas antes de la feria. Los clientes actuales y los que pidieron cotización en el año reciben un mensaje con día y hora. El stand chico se llena con gente que ya tiene motivo.</li>
            </ol>
            <p className={body}>Si tu espacio se parece al de Mariana, estas ideas se combinan con lo que contamos en <Link href="/guias/estrategias-para-stands-con-poco-espacio" className="text-azul underline underline-offset-2 hover:text-cobalto">estrategias para stands con poco espacio</Link>. Y para el paso de la pregunta al contacto, en <Link href="/guias/como-captar-leads-en-ferias-comerciales" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo captar leads en ferias comerciales</Link> está el detalle.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La pantalla, la idea que más rinde por metro cuadrado</h2>
            <p className={body}>De las seis, Mariana ve que una hace el trabajo pesado del primer paso. La frase se lee si alguien ya giró la cabeza. El producto se toca si alguien ya entró. La pantalla con movimiento es la que gira la cabeza.</p>
            <p className={body}>Y ocupa poco. Un tótem vertical entra en un rincón del stand. Una pantalla LED se alquila por los días de feria. No necesita doble altura ni estructura especial. Por eso <strong>la pantalla con un loop es la idea con mejor relación entre costo e impacto por metro cuadrado</strong>, siempre que lo que pase en ella esté pensado para el pasillo.</p>
            <p className={body}>Ahí Mariana está por cometer un último error: quiere poner el institucional en el tótem. No funciona por tres razones de oficio:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Una pantalla vertical no es una horizontal recortada. Al recortar, se pierden los textos y el producto queda a medias.</li>
              <li>Una pantalla LED se diseña a su resolución exacta, según el pixel pitch. Un archivo genérico se ve borroso o deformado.</li>
              <li>El visitante no se queda tres minutos. Ve unos segundos. Cada escena tiene que decir una sola cosa.</li>
            </ul>
            <p className={body}>Para la próxima feria, Mariana pide un loop de veinte segundos para un tótem vertical. Tres escenas: la ventana que se abre, el perfil por dentro, la frase con el beneficio. Sin audio. Contraste alto. A la medida exacta del tótem. Los vendedores cuentan paradas, conversaciones y leads. El jefe recibe números, no fotos.</p>
            <p className={body}>No es el stand de Pinterest. Es un stand de 18 metros que sabe para qué está.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos los loops que van en las pantallas del stand. No armamos estructuras ni imprimimos banners: hacemos lo que se mueve.</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops de 10 a 30 segundos que se repiten sin corte a negro.</li>
              <li>Sin audio: cada escena se entiende en silencio.</li>
              <li>Un mensaje por escena, con texto grande y contraste alto, legible a 10 metros.</li>
              <li>Entrega a la resolución exacta de tu pantalla LED, tótem o videowall.</li>
              <li>Plazos cortos, para la feria que ya tenés encima.</li>
            </ul>
            <p className={body}>De vos necesitamos tres cosas: los datos técnicos de la pantalla, el mensaje principal y tu material de marca. Mirá cómo trabajamos los <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y para cuándo la necesitás.</p>
            <GuideCta
              slug="ideas-para-stands-comerciales-que-destaquen"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/estrategias-para-stands-con-poco-espacio" className="text-azul underline underline-offset-2 hover:text-cobalto">estrategias para stands con poco espacio</Link> y <Link href="/guias/como-captar-leads-en-ferias-comerciales" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo captar leads en ferias comerciales</Link>.</p>
    </GuideArticle>
  );
}
