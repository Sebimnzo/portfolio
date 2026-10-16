import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/videos-para-ferias-de-negocios.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("videos-para-ferias-de-negocios");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function VideosParaFeriasDeNegociosGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>El video más caro de la empresa de Hernán es el que menos gente mira en la feria.</p>
            <p className={body}>Pongamos que Hernán es gerente comercial en una empresa que hace sensores IoT para plantas industriales. Es martes, diez de la mañana, y la feria de automatización industrial en Buenos Aires acaba de abrir. El pabellón zumba. Los visitantes caminan con el celular en una mano y una bolsa de catálogos en la otra.</p>
            <p className={body}>En la pared del stand hay una pantalla LED de tres metros. Ahí corre el institucional: tres minutos del CEO frente a cámara, explicando la plataforma. Capturas del tablero, música de fondo, logo al final. Costó lo suyo. Nadie lo escucha.</p>
            <p className={body}>La empresa pagó el espacio, el armado y los pasajes del equipo comercial. Hernán tiene que volver con leads. La feria dura tres días y el primero ya empezó.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que aparece cuando buscás &quot;un video para la feria&quot;</h2>
            <p className={body}>Dos semanas antes, Hernán buscó qué video llevar. Encontró productoras que ofrecen institucionales. Encontró aftermovies, que resumen un evento que ya pasó. Encontró bancos de stock con gente sonriendo frente a un stand genérico. Encontró plantillas de video promocional para florerías y casas de sushi.</p>
            <p className={body}>Nada le hablaba de la pantalla de su stand. Así que hizo lo razonable: llevó el video que ya tenía. Es el mejor material de la empresa. ¿Qué podía salir mal?</p>
            <p className={body}><strong>Hernán buscó &quot;un video&quot; cuando necesitaba otra cosa: un loop para una pantalla en un pasillo.</strong> Suenan parecido. Hacen trabajos opuestos.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Las diez y media y el institucional va por el minuto dos</h2>
            <p className={body}>A las diez y media el pasillo se llena. Hernán mira la pantalla desde el mostrador y ve qué le pasa a su video.</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>El audio no existe.</strong> El pabellón suma ruido de fondo, parlantes de otros stands y gente hablando. La voz del CEO se pierde a dos metros.</li>
              <li><strong>Nadie llega al principio.</strong> El visitante entra a la historia cuando pasa, no cuando el video arranca. Si la idea necesita un minuto para armarse, se la pierde.</li>
              <li><strong>La mirada es de reojo.</strong> La gente camina, mira de costado un instante y sigue. Lo que no se entiende en ese instante no existe.</li>
              <li><strong>Los cortes a negro espantan.</strong> Cada fundido a negro deja la pantalla con cara de apagada. Justo ahí pasa alguien.</li>
              <li><strong>Los textos chicos desaparecen.</strong> Las capturas del tablero estaban pensadas para una notebook. A diez metros, sus gráficos son una mancha gris.</li>
            </ul>
            <p className={body}>Hernán no hizo nada mal. Usó un video pensado para otra situación: una sala, una persona sentada, sonido, atención completa. El pasillo no ofrece ninguna de las cuatro.</p>
            <p className={body}>El vendedor más joven ataja a quien puede: &quot;¿Querés ver cómo monitoreamos una línea en vivo?&quot;. Alguno frena, agarra un catálogo y sigue caminando. La pantalla de tres metros sigue hablando sola.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Video corporativo y loop de stand: dos trabajos distintos</h2>
            <p className={body}>El institucional cuenta quién es la empresa. Lo mira alguien que ya decidió mirarlo: en una reunión, en el sitio web, en una presentación. Tiene tiempo para construir.</p>
            <p className={body}>El loop de stand tiene otro trabajo. Primero frena a alguien que no pensaba frenar. Después le dice, en un vistazo, qué resuelve la empresa. Y repite la jugada con cada visitante que pasa.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal"></th>
                  <th className="py-3 pr-4 font-normal">Video institucional</th>
                  <th className="py-3 font-normal">Loop para stand</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Objetivo</td>
                  <td className="py-3 pr-4">Presentar la empresa</td>
                  <td className="py-3">Frenar al visitante y abrir una charla</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Quién lo mira</td>
                  <td className="py-3 pr-4">Alguien sentado, con atención</td>
                  <td className="py-3">Alguien caminando, de reojo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Duración</td>
                  <td className="py-3 pr-4">Varios minutos</td>
                  <td className="py-3">10 a 30 segundos, en repetición</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Audio</td>
                  <td className="py-3 pr-4">Voz y música</td>
                  <td className="py-3">Ninguno</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Estructura</td>
                  <td className="py-3 pr-4">Principio, desarrollo y final</td>
                  <td className="py-3">Se entiende desde cualquier segundo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Texto</td>
                  <td className="py-3 pr-4">Zócalos y subtítulos</td>
                  <td className="py-3">Pocas palabras, grandes, legibles a 10 metros</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Ritmo</td>
                  <td className="py-3 pr-4">Cortes y fundidos</td>
                  <td className="py-3">Movimiento continuo, sin negro</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Formato</td>
                  <td className="py-3 pr-4">16:9 estándar</td>
                  <td className="py-3">La resolución exacta de la pantalla</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Éxito</td>
                  <td className="py-3 pr-4">Que alguien lo vea entero</td>
                  <td className="py-3">Que alguien frene y pregunte</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}><strong>La última fila manda.</strong> Un institucional cumple si alguien lo mira de punta a punta. Un loop cumple si el visitante frena, señala la pantalla y le pregunta algo al vendedor. Ahí empieza el lead.</p>
            <p className={body}>Hernán mira el pasillo y entiende el problema. Su video es bueno. Está en el lugar equivocado. Si querés saber cuánto debe durar cada escena, está en <Link href="/guias/duracion-ideal-de-un-video-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">la guía sobre la duración ideal de un video para stand</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La pantalla también pide lo suyo</h2>
            <p className={body}>Al mediodía Hernán nota otra cosa. El video se ve lavado. El logo del final queda cortado arriba y abajo. La pantalla no es 16:9: el armador la hizo a la medida de la pared.</p>
            <p className={body}>Una pantalla LED no es un televisor grande. Está hecha de módulos, y el pixel pitch define cuántos píxeles tiene de verdad. Un panel de tres metros puede tener menos píxeles que un monitor de escritorio. Si el video no se diseña a esa medida exacta, la pantalla lo estira, lo recorta o lo comprime. El texto fino se rompe primero.</p>
            <p className={body}>Con los tótems pasa lo mismo. Un tótem vertical no es un video horizontal recortado. Si cortás los costados de un 16:9 para que entre parado, perdés media imagen y el logo queda partido. La pieza vertical se compone vertical desde el primer cuadro.</p>
            <p className={body}>Para que la pantalla trabaje, el loop necesita cuatro cosas:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li>La resolución exacta del panel, en píxeles. Te la pasa quien alquila o arma la pantalla.</li>
              <li>Contraste alto. Las luces del pabellón lavan los colores suaves.</li>
              <li>Poco texto y grande. Una idea por escena.</li>
              <li>Movimiento continuo. El final empalma con el principio y nadie ve la costura.</li>
            </ol>
            <p className={body}>A las tres de la tarde, el stand de enfrente frena gente. No tiene una pantalla más grande. Tiene un loop corto con una sola frase y un brazo robótico que no para. Hernán lo mira desde su mostrador, con el CEO hablando de fondo.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El brief que Hernán escribe para la próxima feria</h2>
            <p className={body}>Esa noche, en el hotel, Hernán anota qué va a pedir la próxima vez. No pide &quot;un video&quot;. Pide esto:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Medidas de cada pantalla.</strong> Resolución en píxeles, orientación y pixel pitch. Una pieza por pantalla, no un archivo para todas.</li>
              <li><strong>Un mensaje.</strong> Qué problema del visitante resuelve la empresa, en una frase que se lee caminando.</li>
              <li><strong>Duración del loop.</strong> Entre 10 y 30 segundos, con empalme invisible entre el final y el principio.</li>
              <li><strong>Sin audio.</strong> Todo se entiende con imagen y texto.</li>
              <li><strong>El producto en movimiento.</strong> Un sensor sobre un motor en marcha, y su dato apareciendo en el tablero, dicen más que el CEO explicando la plataforma. Si no hay filmación útil, una animación 3D del producto.</li>
              <li><strong>Formato de entrega.</strong> El códec y el contenedor que acepta el reproductor de la pantalla, confirmados con el proveedor.</li>
              <li><strong>Plazo.</strong> La fecha en que el archivo tiene que estar probado en la pantalla, no la fecha de la feria.</li>
            </ul>
            <p className={body}>El institucional no se tira. Pasa a la tablet del vendedor, para el visitante que ya frenó y quiere saber más. Ahí sí alguien lo mira entero.</p>
            <p className={body}><strong>El video corporativo sirve para la charla. El loop sirve para que la charla empiece.</strong></p>
            <p className={body}>El jueves, último día, Hernán no cambia la pantalla. Ya es tarde. Pero vuelve a la oficina con un brief en vez de una queja.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> hacemos la segunda pieza: loops para las pantallas del stand. No hacemos institucionales ni aftermovies. Esto es lo que entregamos:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops de 10 a 30 segundos que se repiten sin corte a negro.</li>
              <li>Piezas sin audio, que se entienden con imagen y texto.</li>
              <li>Un mensaje por escena, con texto grande y contraste alto, legible a 10 metros.</li>
              <li>Un archivo por pantalla, a la resolución exacta de tu LED, videowall o tótem.</li>
              <li>Plazos cortos, pensados para la fecha de tu feria.</li>
            </ul>
            <p className={body}>Vos nos pasás las medidas de las pantallas y qué querés que entienda el visitante. Nosotros te devolvemos un archivo por pantalla, listo para reproducir. Mirá cómo trabajamos los <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantallas vas a tener y para qué fecha.</p>
            <GuideCta
              slug="videos-para-ferias-de-negocios"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/duracion-ideal-de-un-video-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">cuánto debe durar un video para stand</Link> · <Link href="/guias/formato-de-video-para-pantalla-led-de-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">qué formato de video pide una pantalla LED de stand</Link></p>
    </GuideArticle>
  );
}
