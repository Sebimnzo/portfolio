import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/como-hacer-que-la-gente-se-detenga-en-un-stand.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("como-hacer-que-la-gente-se-detenga-en-un-stand");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function ComoHacerQueLaGenteSeDetengaEnUnStandGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>El visitante decide si frena en tu stand antes de verte la cara, y casi nunca por lo que tenés en el mostrador.</p>
            <p className={body}>Pongamos que se llama Federico. Es socio de una empresa que instala cámaras y control de accesos en plantas industriales. Es martes, once y media, segundo día de una feria de seguridad. El pabellón zumba: aire acondicionado, un parlante lejano, gente que camina con la credencial colgando y el celular en la mano.</p>
            <p className={body}>El stand de Federico está impecable. Tres cámaras domo en exhibición, un molinete de acceso, dos vendedores con camisa planchada. Detrás, una pantalla LED pasa el video institucional de la empresa. Y la gente pasa de largo.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Las once y media y el pasillo sigue de largo</h2>
            <p className={body}>Federico ya sabe que algo falla. Lo vio el primer día. Si querés entender las causas una por una, están en <Link href="/guias/por-que-nadie-se-detiene-en-mi-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">por qué nadie se detiene en mi stand</Link>. Este artículo arranca donde termina ese: qué hacer para que frenen.</p>
            <p className={body}>Lo que está en juego es concreto. Federico pagó el espacio, el armado, los pasajes y tres días de dos vendedores. Su próximo cliente grande, un jefe de seguridad de una planta, camina por ese pasillo hoy. Si no frena, se lleva la idea de otro proveedor.</p>
            <p className={body}>Los vendedores hacen lo de siempre. Saludan, ofrecen un folleto, uno se para en el borde del stand. El visitante esquiva, sonríe por cortesía y sigue. El folleto termina en una bolsa llena de folletos ajenos.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que ve alguien que camina por un pasillo de feria</h2>
            <p className={body}>Para que alguien frene, primero hay que entender cómo camina. El visitante no recorre la feria: la escanea. Va con un objetivo, mira hacia adelante y registra los stands con el rabillo del ojo.</p>
            <p className={body}>Tres cosas mandan en ese escaneo:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Mira por encima de las cabezas.</strong> A la altura de los ojos hay gente, mostradores y vendedores. Lo que se ve desde lejos está arriba.</li>
              <li><strong>Lee de a pocas palabras.</strong> Un vistazo alcanza para una frase corta. Un párrafo no existe para alguien que camina.</li>
              <li><strong>Lo que se mueve gana.</strong> La vista periférica detecta movimiento antes que color o forma. Un panel quieto se vuelve parte de la pared.</li>
            </ul>
            <p className={body}>Federico mira su stand desde el pasillo, como un visitante. Ve las cámaras a la altura de la cintura, tapadas por los vendedores. Ve el logo arriba, quieto. Ve la pantalla, que en ese momento muestra un plano de la fachada de la empresa. Nada le dice a ese jefe de seguridad por qué tendría que frenar.</p>
            <p className={body}>Un adulto camina a entre 1,2 y 1,4 metros por segundo (<a href="https://bacpar.csp.org.uk/node/338279" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">meta-análisis de Bohannon y Andrews, 2011</a>); en un pasillo lleno, algo menos. Con esa velocidad, recorre veinte metros de pasillo en unos diecisiete segundos. <strong>Ese es todo el tiempo que tenés para que tu stand le diga algo.</strong></p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Por qué una vez no alcanza: el mensaje se repite o no llega</h2>
            <p className={body}>Acá aparece el problema de la pantalla de Federico. El video institucional dura tres minutos. Tiene audio, que nadie escucha por el ruido del pabellón. Cuenta la historia de la empresa en orden: fundación, equipo, obras, clientes, contacto.</p>
            <p className={body}>El visitante ve diecisiete segundos de esos tres minutos. Le toca el fragmento que le toca. Puede ser el logo, puede ser una foto del equipo en una obra. Casi nunca es la parte que le resolvería algo.</p>
            <p className={body}>Frenar no es una decisión de un solo vistazo. Pasa en tres momentos:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Dónde está el visitante</th>
                  <th className="py-3 pr-4 font-normal">Qué necesita ver</th>
                  <th className="py-3 font-normal">Qué pasa si no lo ve</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Lejos, acercándose</td>
                  <td className="py-3 pr-4">Movimiento y una forma clara</td>
                  <td className="py-3">No gira la cabeza</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">A unos diez metros</td>
                  <td className="py-3 pr-4">Una frase que nombre su problema</td>
                  <td className="py-3">Mira y sigue</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Frente al stand</td>
                  <td className="py-3 pr-4">La misma frase, otra vez</td>
                  <td className="py-3">No encuentra razón para frenar</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>Si la pantalla repite el mismo mensaje en esos tres momentos, el visitante lo lee dos o tres veces sin esfuerzo. La primera lo intriga. La segunda lo confirma. La tercera lo frena.</p>
            <p className={body}>Por eso un loop corto le gana a un video largo. Un loop de unos diez segundos se repite completo mientras el visitante cruza el pasillo. No importa en qué segundo lo agarre: en pocos pasos ya vio la escena principal. Si querés saber cuánto tiene que durar el tuyo, mirá la guía sobre <Link href="/guias/duracion-ideal-de-un-video-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">la duración ideal de un video para stand</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué tiene que decir la pantalla en esos segundos</h2>
            <p className={body}>El stand de al lado vende cerraduras inteligentes. No tiene mejor producto que Federico. Tiene una pantalla que muestra una sola cosa: una tarjeta que se pierde en un estacionamiento y una puerta que se abre de noche. Arriba, una frase. La gente afloja el paso.</p>
            <p className={body}>Federico entiende que el problema no es la pantalla. Es lo que pasa adentro. Un loop que frena gente cumple cinco reglas:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>Un mensaje por escena.</strong> Una idea, una imagen. Si necesita explicación, sobra.</li>
              <li><strong>El problema del visitante, no la historia de la empresa.</strong> El jefe de seguridad no frena por el año de fundación. Frena por la puerta que no controla.</li>
              <li><strong>Texto grande, legible a diez metros.</strong> Pocas palabras, tipografía gruesa, alto contraste con el fondo.</li>
              <li><strong>Movimiento continuo.</strong> Sin cortes a negro ni pausas. Cada corte a negro es un momento en que la pantalla desaparece del pasillo.</li>
              <li><strong>Sin audio.</strong> Todo se entiende con el sonido apagado, porque así se va a ver.</li>
            </ol>
            <p className={body}>Para Federico, eso se traduce en una escena simple. Una planta de noche, una cámara que sigue a una figura por un depósito, un molinete que se traba. Y una frase arriba: &quot;¿Quién entró anoche a tu planta?&quot;. El vendedor ya tiene la pregunta para abrir la charla.</p>
            <p className={body}>La pantalla también tiene su técnica. Una LED se diseña a su resolución exacta, que depende del pixel pitch y del tamaño del gabinete. Un video estirado o recortado pierde nitidez y el texto se vuelve ilegible justo a la distancia que importa.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Cómo saber si funciona: contá paradas, no visitas</h2>
            <p className={body}>Federico quiere saber si el cambio sirve. &quot;Pasó mucha gente&quot; no le dice nada. Necesita contar lo que pasa en el borde del stand.</p>
            <p className={body}>Estas son las cuatro métricas de pasillo que importan:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Paradas:</strong> cuántas personas frenan o aflojan el paso frente al stand en una hora.</li>
              <li><strong>Conversaciones:</strong> cuántas de esas paradas terminan en una charla con un vendedor.</li>
              <li><strong>Leads calificados:</strong> cuántas conversaciones dejan un contacto con necesidad real y capacidad de compra.</li>
              <li><strong>Costo por lead:</strong> lo que costó el stand completo dividido por los leads calificados.</li>
            </ul>
            <p className={body}>El primer número depende del pasillo. El segundo, de la pantalla y de la frase que abre la charla. El tercero, del equipo. Si las paradas no suben, el resto no tiene de dónde salir. Para pasar de una parada a un contacto que sirva, está la guía sobre <Link href="/guias/como-captar-leads-en-ferias-comerciales" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo captar leads en ferias comerciales</Link>.</p>
            <p className={body}>Federico le pide a un vendedor que anote, con palitos en una libreta, cuántos frenan por hora. Es poco científico. Le alcanza para comparar un día con otro.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El miércoles, la pantalla cambia</h2>
            <p className={body}>Federico no tiene tiempo de producir nada nuevo para esta feria. Esa noche, en el hotel, arma con lo que tiene un loop simple: una foto de una cámara instalada en un galpón y la frase en letras grandes. Lo pasa en la LED el miércoles.</p>
            <p className={body}>No es el loop que necesita, pero sirve de prueba. Algunos visitantes miran arriba. Uno frena, señala la pantalla y pregunta si las cámaras graban de noche. El vendedor tiene por dónde empezar. La libreta muestra más palitos que el martes.</p>
            <p className={body}>Federico vuelve a la oficina con una lista para la próxima feria. Un loop pensado para el pasillo, a la medida de la pantalla, con una sola pregunta que el cliente se haga. Y una forma de medir si funciona.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>Lo que Federico armó a las apuradas en el hotel es lo que hacemos en <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link>, bien hecho y a la medida de cada pantalla. Diseñamos <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">loops de video para stands</Link> que hacen el trabajo de frenar gente:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops de 10 a 30 segundos que se repiten sin corte a negro.</li>
              <li>Sin audio: todo se entiende con el sonido apagado.</li>
              <li>Un mensaje por escena, con texto grande legible a diez metros y contraste alto.</li>
              <li>Entrega a la resolución exacta de tu pantalla LED, videowall o tótem.</li>
              <li>Plazos cortos, pensados para la feria que ya tenés encima.</li>
            </ul>
            <p className={body}>Necesitamos tres cosas de tu lado: las medidas de la pantalla, qué querés que el visitante entienda y a quién querés frenar.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y para cuándo es la feria.</p>
            <GuideCta
              slug="como-hacer-que-la-gente-se-detenga-en-un-stand"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/por-que-nadie-se-detiene-en-mi-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">por qué nadie se detiene en mi stand</Link> · <Link href="/guias/como-captar-leads-en-ferias-comerciales" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo captar leads en ferias comerciales</Link></p>
    </GuideArticle>
  );
}
