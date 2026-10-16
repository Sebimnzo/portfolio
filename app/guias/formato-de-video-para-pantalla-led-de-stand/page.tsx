import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/formato-de-video-para-pantalla-led-de-stand.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("formato-de-video-para-pantalla-led-de-stand");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function FormatoDeVideoParaPantallaLedDeStandGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>El archivo que Julieta tiene en el escritorio pesa 2 GB, y es justo el que la pantalla del stand no va a querer.</p>
            <p className={body}>Pongamos que Julieta es diseñadora in-house en una metalúrgica que fabrica estructuras para galpones. Es jueves, son las seis de la tarde y la planta ya apagó la soldadora de atrás de la oficina. El martes arranca una feria industrial en Rosario. El stand está pago, el mostrador está pedido y hay una pantalla LED alquilada en la pared del fondo.</p>
            <p className={body}>Le suena el celular. Es el proveedor de la pantalla: &quot;Mandame el video para el lunes así lo cargamos en el montaje&quot;. Julieta abre la carpeta del institucional. Encuentra un MOV de 2 GB, en 1920×1080, con locución y música. No sabe si sirve. No sabe qué preguntar.</p>
            <p className={body}>Es la búsqueda que hace casi todo el que tiene una LED en un stand: qué formato de video mandar. La respuesta corta entra en una tabla.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La respuesta corta: lo que el proveedor necesita recibir</h2>
            <p className={body}>Esto es lo que Julieta tiene que entregar el lunes. Cada fila se explica más abajo.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Qué</th>
                  <th className="py-3 pr-4 font-normal">Qué entregar</th>
                  <th className="py-3 font-normal">Qué confirmar con el proveedor</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Resolución</td>
                  <td className="py-3 pr-4">La de la pantalla, en píxeles exactos</td>
                  <td className="py-3">Ancho × alto en píxeles, no en metros</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Contenedor</td>
                  <td className="py-3 pr-4">MP4</td>
                  <td className="py-3">Que el reproductor lo acepte</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Códec</td>
                  <td className="py-3 pr-4">H.264</td>
                  <td className="py-3">Si el procesador pide otro</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Cuadros por segundo</td>
                  <td className="py-3 pr-4">Los mismos del proyecto, de punta a punta</td>
                  <td className="py-3">Si el reproductor pide un valor fijo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Bitrate</td>
                  <td className="py-3 pr-4">El más alto que el reproductor reproduzca sin trabarse</td>
                  <td className="py-3">Bitrate o peso máximo por archivo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Audio</td>
                  <td className="py-3 pr-4">Sin pista de audio</td>
                  <td className="py-3">Si el reproductor exige una pista muda</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Duración</td>
                  <td className="py-3 pr-4">Un loop de 10 a 30 segundos</td>
                  <td className="py-3">Si el loop se repite solo, sin pausa</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Empalme</td>
                  <td className="py-3 pr-4">Primer y último cuadro que coinciden</td>
                  <td className="py-3">Si el reproductor mete un negro entre vueltas</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>Julieta mira la tabla y ve que su MOV falla en casi todas las filas. La buena noticia: ninguna se arregla con suerte. Todas se arreglan con preguntas.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El MOV de 2 GB que el reproductor no abre</h2>
            <p className={body}><strong>MP4 con H.264 es el formato que aceptan casi todos los reproductores y procesadores LED.</strong> Es la apuesta segura cuando nadie te pasó una especificación.</p>
            <p className={body}>El MOV de Julieta es otra cosa. MOV es un contenedor, como una caja. Adentro puede venir un códec pesado de edición, pensado para seguir trabajando el material y no para reproducirlo en una pantalla. Por eso pesa 2 GB.</p>
            <p className={body}>Julieta prueba lo primero que se le ocurre: le cambia la extensión a .mp4. No sirve. Cambiar la extensión no cambia el códec. El reproductor recibe la misma caja con otro nombre y la rechaza, o la abre a los saltos.</p>
            <p className={body}>Lo que sirve es exportar de nuevo desde el proyecto original. Contenedor MP4, códec H.264, sin pista de audio. El archivo baja de peso y el reproductor lo lee de corrido.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>1920×1080 no es la medida de la pantalla</h2>
            <p className={body}>Julieta le pregunta al proveedor la medida. Le contesta en metros. Ese dato todavía no alcanza.</p>
            <p className={body}>La resolución de una LED sale de dividir la medida por el pixel pitch, la distancia entre los LEDs. Dos pantallas del mismo tamaño pueden tener resoluciones distintas. Y casi ninguna coincide con 1920×1080: pueden ser más chicas, más anchas o casi cuadradas.</p>
            <p className={body}>Si Julieta manda su video en 1920×1080 a una pantalla de otra resolución, el procesador lo reescala. Estira, achica o recorta. Los textos finos sufren el reescalado: el nombre de la empresa y el &quot;Estructuras para galpones&quot; del cierre se ven borrosos o cortados en los bordes.</p>
            <p className={body}>La solución es animar a la resolución exacta de la pantalla, en píxeles. Para sacar esa cifra a partir de la medida y el pixel pitch, usá la <strong><Link href="/guias/resolucion-pantalla-led" className="text-azul underline underline-offset-2 hover:text-cobalto">guía de resolución de pantalla LED con calculadora</Link></strong>. Ahí está el cálculo paso a paso. Acá seguimos con el resto del formato.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que Julieta le pregunta al proveedor antes de exportar</h2>
            <p className={body}>Son las ocho de la noche. Julieta ya no busca en foros. Le escribe al proveedor una lista y la manda de una vez:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>Resolución exacta en píxeles</strong>, ancho × alto, de toda la superficie que va a mostrar el video.</li>
              <li><strong>Orientación</strong>: horizontal o vertical, y si hay una sola pantalla o varias que se reparten la imagen.</li>
              <li><strong>Reproductor o procesador</strong>: qué equipo usa y qué formatos acepta.</li>
              <li><strong>Cuadros por segundo</strong>: si el reproductor pide un valor fijo o acepta el del archivo.</li>
              <li><strong>Bitrate o peso máximo</strong>: el tope que el reproductor reproduce sin trabarse.</li>
              <li><strong>Audio</strong>: si conviene mandar el archivo sin pista o con una pista muda.</li>
              <li><strong>Repetición</strong>: si el reproductor repite el archivo solo y si deja una pausa o un negro entre vueltas.</li>
              <li><strong>Carga</strong>: si el archivo va en pendrive, por red o por un programa propio, y quién lo sube.</li>
              <li><strong>Prueba</strong>: a qué hora del montaje se puede ver el video en la pantalla real.</li>
            </ol>
            <p className={body}>Con los cuadros por segundo hay una regla simple. Elegí un valor al empezar a animar y mantenelo hasta la exportación. Si cambiás el valor al exportar, el movimiento puede salir a los tirones. Y no confundas los fps del video con la frecuencia de refresco de la pantalla: son dos datos distintos, y el segundo lo maneja el proveedor.</p>
            <p className={body}>Con el bitrate pasa algo parecido. Más bitrate da más calidad, hasta que el reproductor no da abasto y el video se traba. Por eso el tope lo pone el equipo del proveedor, no tu programa de edición. Si nadie te da un número, exportá con calidad alta y pedí ver una prueba en la pantalla real antes de la feria.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El negro que corta el loop cada tres minutos</h2>
            <p className={body}>El proveedor contesta temprano el viernes. Pasa la resolución, confirma MP4 con H.264 y agrega una línea: &quot;El video se repite solo todo el día&quot;.</p>
            <p className={body}>Julieta vuelve a mirar su institucional. Tres minutos, un fundido a negro al final, locución que nadie va a escuchar en un pabellón con autoelevadores y compresores en exhibición. Cada tres minutos la pantalla se apaga un instante y arranca de nuevo con el logo. El visitante que pasa en ese momento ve un rectángulo negro en la pared del fondo.</p>
            <p className={body}><strong>Un loop sin corte necesita que el primer y el último cuadro empalmen.</strong> Si el último cuadro es igual al primero, o continúa su movimiento, el salto no se nota. La pantalla parece estar siempre en marcha. Nada de fundidos a negro, nada de placa final con silencio.</p>
            <p className={body}>Para un stand, el loop corto trabaja mejor que el institucional largo. El visitante camina y mira de reojo. Ve unos segundos de pantalla, no tres minutos. Si en esos segundos aparece una idea y una pieza en movimiento, la entiende. Si aparece el principio de una historia con locución, se la pierde.</p>
            <p className={body}>Si querés ir a fondo con este punto, leé cómo se arma una <Link href="/guias/animacion-en-loop-sin-sonido-para-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">animación en loop sin sonido para eventos</Link>. Y si dudás entre diez y treinta segundos, mirá la <Link href="/guias/duracion-ideal-de-un-video-para-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">duración ideal de un video para stand</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El lunes llega un archivo, no una duda</h2>
            <p className={body}>Julieta no rehace el institucional entero. Toma tres planos que ya tiene: una estructura de galpón que se arma pieza por pieza, una cercha que gira y el logo de la metalúrgica. Arma un loop corto, sin audio, con una frase por escena y letra grande.</p>
            <p className={body}>Anima a la resolución exacta que le pasó el proveedor. Hace que el último cuadro empalme con el primero. Exporta en MP4 con H.264, a los mismos cuadros por segundo del proyecto, sin pista de audio. Le pone al archivo un nombre que dice qué es, para qué pantalla y qué versión.</p>
            <p className={body}>El lunes a la mañana manda el archivo. A la tarde, en el montaje, el proveedor lo carga y Julieta lo ve en la pared real. Detecta que una frase queda chica para la distancia del pasillo. La agranda, exporta de nuevo y vuelve a mandar. A las siete el loop corre solo, sin cortes, a la medida de la pantalla.</p>
            <p className={body}>No hubo magia. Hubo nueve preguntas a tiempo y un archivo hecho para esa pantalla.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>Lo que Julieta resolvió en cuatro días es el trabajo que hacemos en <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link>, con la feria encima:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Pedimos al proveedor los datos técnicos de la pantalla, o te pasamos la lista para que los pidas vos.</li>
              <li>Diseñamos loops de 10 a 30 segundos que se repiten sin corte a negro.</li>
              <li>Sin audio, con un mensaje por escena y texto legible a 10 metros.</li>
              <li>Entregamos el archivo a la resolución exacta de la pantalla, en el formato que pide el reproductor, listo para cargar.</li>
              <li>Trabajamos con plazos cortos, porque el proveedor siempre pide el video para el lunes.</li>
            </ul>
            <p className={body}>De vos necesitamos el contacto del proveedor de la pantalla, el mensaje principal y tu material de marca. Mirá cómo trabajamos el <Link href="/contenido-pantallas-led" className="text-azul underline underline-offset-2 hover:text-cobalto">contenido para pantallas LED</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Mandanos los datos de tu pantalla y la fecha de montaje, y te contestamos qué te podemos entregar a tiempo.</p>
            <GuideCta
              slug="formato-de-video-para-pantalla-led-de-stand"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
    </GuideArticle>
  );
}
