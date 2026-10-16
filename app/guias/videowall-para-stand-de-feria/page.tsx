import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/videowall-para-stand-de-feria.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("videowall-para-stand-de-feria");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function VideowallParaStandDeFeriaGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>A las once de la mañana, Pablo descubre que alquiló cuatro pantallas para mostrar cuatro veces lo mismo.</p>
            <p className={body}>Llamémoslo Pablo. Es gerente de marketing de una fábrica de autopartes. Hacen sistemas de frenos para transporte pesado. Es el primer día de una feria del transporte y la logística. El pabellón retumba: un motor diésel en marcha, un locutor lejano, el pitido de un autoelevador.</p>
            <p className={body}>En la pared del fondo de su stand hay un videowall de cuatro monitores, dos arriba y dos abajo. Vino con el alquiler del stand. El proveedor le pidió &quot;el video&quot; el jueves anterior. Pablo mandó el institucional de la empresa: tres minutos, locución, música, el gerente hablando en la planta.</p>
            <p className={body}>Ahora el institucional corre en las cuatro pantallas a la vez. Cuatro gerentes chicos mueven la boca sin sonido. La gente pasa mirando el celular. Nadie frena.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Cuatro pantallas y ningún mensaje</h2>
            <p className={body}>Pablo pagó el espacio, la construcción, el videowall y tres vendedores parados en la alfombra. La feria dura tres días. Lo que está en juego no es &quot;el video&quot;. Son las conversaciones que tendrían que empezar en ese pasillo y no empiezan.</p>
            <p className={body}>Le pide al técnico que lo arregle. El técnico estira el institucional a la pared entera. Mejora un poco. Ahora hay una sola imagen, pero el marco negro entre monitores le parte la cara al gerente en cuatro. Los subtítulos caen sobre la línea del medio y no se leen.</p>
            <p className={body}><strong>El problema no es el videowall. Es que nadie diseñó nada para él.</strong></p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que el pasillo le hace a un institucional de tres minutos</h2>
            <p className={body}>El institucional de Pablo no es malo. Está hecho para otro lugar: una reunión, la web, una presentación donde alguien se sienta y mira de principio a fin. Tiene arranque, desarrollo y cierre. Y supone que lo escuchás.</p>
            <p className={body}>En el pasillo no pasa nada de eso:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>El audio no se escucha.</strong> Entre el pabellón y el stand vecino, la locución desaparece. Sin la voz, el video pierde la mitad del sentido.</li>
              <li><strong>Nadie lo ve desde el principio.</strong> El visitante llega en un minuto cualquiera. Si ese minuto es el gerente hablando, no entiende qué vende la empresa.</li>
              <li><strong>La gente camina y mira de reojo.</strong> Tenés pocos segundos para que alguien gire la cabeza. El plano de una oficina no lo logra.</li>
              <li><strong>Los cortes a negro sueltan la mirada.</strong> Cada fundido es una invitación a seguir de largo.</li>
            </ul>
            <p className={body}>Ahí está la diferencia entre un video corporativo y un activo de conversión. El corporativo le cuenta la empresa a alguien que ya decidió mirar. El activo de conversión tiene un solo trabajo: que alguien frene y le dé a tu vendedor la excusa para hablar. Eso es un loop corto, sin audio, con un mensaje por escena.</p>
            <p className={body}>Son las doce. El stand de al lado tiene una sola pantalla LED con un freno de disco girando despacio, en primer plano. Ahí sí hay gente parada.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Un videowall no es una tele grande</h2>
            <p className={body}>Pablo empieza a sospechar que el tamaño solo no alcanza. Tiene razón. Un videowall tiene tres particularidades que un video común ignora.</p>
            <p className={body}><strong>Los marcos.</strong> Entre monitor y monitor hay una línea negra. Es fina, pero está. Cualquier texto, cara o logo que la cruce se parte. Un videowall de módulos LED no tiene marcos, pero tiene su propia regla: se diseña a la resolución exacta que da su pixel pitch.</p>
            <p className={body}><strong>La resolución total.</strong> Cuatro monitores Full HD en 2×2 suman un lienzo de 3840 × 2160 píxeles. Si mandás un video de 1920 × 1080 y lo estirás, cada píxel tuyo ocupa cuatro de la pantalla. De cerca se nota. En un 3×2 o en un 4×1 la proporción ya no es 16:9, y estirar deforma todo.</p>
            <p className={body}><strong>El modo de reproducción.</strong> El controlador puede repetir el mismo video en cada monitor, como a las once en el stand de Pablo. También puede tratar la pared como un solo lienzo. Esa decisión la toma alguien. Si nadie la toma, la toma el técnico con lo que tiene a mano.</p>
            <p className={body}>Para el detalle de medidas, códecs y compensación de marcos, tenemos una guía sobre <Link href="/guias/como-preparar-un-video-para-videowall" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo preparar un video para videowall</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Una imagen grande frena, cuatro chicas se ignoran</h2>
            <p className={body}>Acá está el centro del asunto. Pablo alquiló una pared de pantalla. La ventaja de esa pared es una sola: el tamaño. Una imagen que ocupa toda la superficie se ve desde el fondo del pasillo. Cuatro imágenes iguales parecen cuatro teles en una casa de electrodomésticos.</p>
            <p className={body}>El visitante busca con el ojo una cosa grande que se mueve. Si encuentra cuatro cosas medianas, no elige ninguna.</p>
            <p className={body}>Diseñar para el videowall entero cambia la composición:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Un protagonista que ocupa la pared.</strong> En el caso de Pablo, el conjunto de freno, mucho más grande que el real.</li>
              <li><strong>Texto fuera de los marcos.</strong> Grande, con contraste alto, cuatro o cinco palabras por escena. Legible a 10 metros.</li>
              <li><strong>Movimiento que cruza la pared sin cortes.</strong> Un producto que entra por un monitor y sale por otro usa los marcos a favor. El ojo sigue el recorrido.</li>
              <li><strong>Un loop de 10 a 30 segundos.</strong> El último cuadro empalma con el primero. Quien llega en cualquier momento entiende lo mismo.</li>
            </ul>
            <p className={body}>Son las tres de la tarde. Pablo anota en el celular qué tendría que haber pedido. Le quedan dos días de feria.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué pedir antes de que te pidan &quot;el video&quot;</h2>
            <p className={body}>El proveedor del videowall te va a pedir un archivo. Antes de mandar nada, pedile vos estos datos. Con ellos, quien diseñe tu loop trabaja sobre la pantalla real.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Qué pedir</th>
                  <th className="py-3 font-normal">Para qué sirve</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Disposición (2×2, 3×3, 4×1) y orientación</td>
                  <td className="py-3">Define la proporción del lienzo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Resolución de cada monitor o pixel pitch del LED</td>
                  <td className="py-3">Define la resolución total exacta</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Ancho de los marcos</td>
                  <td className="py-3">Marca dónde no puede ir texto</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Si el controlador trata la pared como un solo lienzo</td>
                  <td className="py-3">Evita el mosaico repetido</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Formato, códec y cuadros por segundo del reproductor</td>
                  <td className="py-3">Evita que el archivo no corra en el armado</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Día y hora de prueba en la pantalla</td>
                  <td className="py-3">Ver el loop en la pared antes de la apertura</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>Del lado del contenido, el brief es corto:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li>Un objetivo: qué tiene que entender alguien que pasa caminando.</li>
              <li>Un producto o una idea protagonista, no cinco.</li>
              <li>Tres o cuatro escenas, un mensaje por escena.</li>
              <li>Sin audio. Si algo depende de la locución, no va.</li>
              <li>Logo y contacto en una zona fija, lejos de los marcos.</li>
            </ol>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El martes, un solo freno en la pared</h2>
            <p className={body}>Pablo no consigue un loop nuevo en una noche. Consigue algo más modesto. Esa tarde le pide al técnico que pase el controlador a un solo lienzo. Elige del institucional los veinte segundos del banco de pruebas: el freno muerde el disco y la rueda para en seco. Sin el gerente y sin subtítulos. Los deja en repetición.</p>
            <p className={body}>El martes a la mañana la pared muestra un solo freno grande, en movimiento, de punta a punta. No es perfecto. El logo cae sobre un marco y el empalme del final salta. Pero la gente que pasa levanta la vista. Un vendedor usa el freno de la pantalla para abrir una charla: &quot;¿Tu flota anda con disco o con tambor?&quot;.</p>
            <p className={body}>Pablo ya sabe qué va a pedir para la próxima feria. Un loop diseñado a la medida de esa pared, con el freno como protagonista y el texto lejos de los marcos.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>Lo que Pablo armó a las apuradas es lo que en <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos desde el principio, a la medida de tu pantalla:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops de 10 a 30 segundos, sin audio, que empalman sin corte a negro.</li>
              <li>Composición para el videowall entero: una imagen protagonista, texto fuera de los marcos.</li>
              <li>Entrega a la resolución exacta del lienzo, sea un 2×2 de monitores o una pared LED.</li>
              <li>La lista de datos que tenés que pedirle al proveedor, para que el archivo corra el día del armado.</li>
              <li>Plazos cortos, porque la feria casi siempre está cerca.</li>
            </ul>
            <p className={body}>Si alquilaste un videowall, mirá cómo trabajamos la <Link href="/animacion-videowall" className="text-azul underline underline-offset-2 hover:text-cobalto">animación para videowall</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué videowall alquilaste y para cuándo lo necesitás.</p>
            <GuideCta
              slug="videowall-para-stand-de-feria"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/como-preparar-un-video-para-videowall" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo preparar un video para videowall</Link> · <Link href="/guias/como-hacer-que-la-gente-se-detenga-en-un-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo hacer que la gente se detenga en un stand</Link></p>
    </GuideArticle>
  );
}
