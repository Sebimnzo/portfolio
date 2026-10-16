import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/medidas-de-video-para-totem-vertical.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("medidas-de-video-para-totem-vertical");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function MedidasDeVideoParaTotemVerticalGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>Al tótem de Cecilia le sobra alto y le falta logo. La culpa no es del tótem.</p>
            <p className={body}>Llamémosla Cecilia. Es un ejemplo: la dueña de una marca de cosmética profesional que vende tinturas y tratamientos a peluquerías. En dos semanas expone en una feria de belleza profesional. Hoy está en el galpón del proveedor que le alquiló un tótem vertical de 55 pulgadas. Huele a cartón. Un autoelevador pita marcha atrás. El técnico enchufa el pendrive.</p>
            <p className={body}>El video lo mandó su agencia: 1920 × 1080, el mismo de las redes y la web. En el tótem se ve una franja angosta del centro. Del nombre de la marca quedan cuatro letras. El técnico se encoge de hombros: &quot;Esto es horizontal&quot;.</p>
            <p className={body}><strong>La respuesta corta, si estás en la misma:</strong> un tótem con panel Full HD vertical lleva un video de 1080 × 1920 píxeles. Uno con panel 4K vertical, 2160 × 3840. Ancho primero, alto después. Y se diseña en vertical desde cero. Lo que sigue explica por qué el video de Cecilia no entra y qué tenés que pedir para que entre.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El pendrive llegó con la medida de un televisor</h2>
            <p className={body}>Cecilia pagó el espacio, el armado, el alquiler del tótem y el video. El tótem va en la punta del stand, mirando al pasillo. Es lo primero que ve una estilista que llega desde la entrada del pabellón.</p>
            <p className={body}>La agencia no hizo nada raro. Trabajó en 16:9 porque así se trabaja casi todo: la web, YouTube, la tele de la oficina. Nadie le preguntó la medida de la pantalla. Cecilia tampoco la sabía.</p>
            <p className={body}>Hay una trampa más. La ficha del tótem dice &quot;Full HD 1920 × 1080&quot;. Es la resolución del panel tal como sale de fábrica, acostado. Parado, ese mismo panel tiene 1080 píxeles de ancho y 1920 de alto. Si leés la ficha al pie de la letra, mandás el video al revés.</p>
            <p className={body}>El reproductor del tótem hace lo que puede con un archivo que no encaja. Según cómo esté configurado, recorta el centro, achica todo con franjas negras o estira la imagen. El de Cecilia recortó. Por eso el logo, que estaba en una esquina, quedó afuera.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La tabla que tenés que mandarle a tu agencia</h2>
            <p className={body}>Esto es lo que le faltó al pedido de Cecilia. Copiala tal cual en el mail.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Si el tótem tiene…</th>
                  <th className="py-3 pr-4 font-normal">Medida del video</th>
                  <th className="py-3 font-normal">Proporción</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Panel Full HD (la ficha dice 1920 × 1080 o FHD)</td>
                  <td className="py-3 pr-4">1080 × 1920 px</td>
                  <td className="py-3">9:16, vertical</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Panel 4K (la ficha dice 3840 × 2160, UHD o 4K)</td>
                  <td className="py-3 pr-4">2160 × 3840 px</td>
                  <td className="py-3">9:16, vertical</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Pantalla LED armada con módulos</td>
                  <td className="py-3 pr-4">La medida exacta en píxeles que te pase el proveedor</td>
                  <td className="py-3">La que dé esa medida</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>Para el resto del archivo:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Formato:</strong> MP4 con códec H.264. Es lo que casi cualquier reproductor lee desde un USB.</li>
              <li><strong>Cuadros por segundo:</strong> los que pida el proveedor. Exportá a esa cadencia de punta a punta.</li>
              <li><strong>Audio:</strong> sin pista de audio. En la feria no se va a escuchar.</li>
              <li><strong>Duración:</strong> un loop de 10 a 30 segundos que se repite.</li>
              <li><strong>Peso:</strong> preguntá si el reproductor tiene un tope de tamaño o de bitrate.</li>
            </ul>
            <p className={body}>Si el tótem es 4K, pedí 2160 × 3840. Un archivo de 1080 × 1920 entra igual, porque el reproductor lo escala. Pero el texto fino pierde nitidez.</p>
            <p className={body}>Antes de exportar, pedile al proveedor dos cosas: la ficha del modelo exacto y una foto del tótem armado. La ficha confirma el panel. La foto muestra el marco.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Rotar el horizontal no es diseñar en vertical</h2>
            <p className={body}>Con la feria encima, Cecilia y su agencia prueban lo que prueba todo el mundo. Ninguna salida funciona:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Lo que se intenta</th>
                  <th className="py-3 font-normal">Lo que se ve en el tótem</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Girar el video 90°</td>
                  <td className="py-3">La marca acostada. Nadie lee de costado mientras camina.</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Recortar el centro</td>
                  <td className="py-3">El logo y los textos de los bordes desaparecen.</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Achicar para que entre entero</td>
                  <td className="py-3">Una franja chica en el medio y dos bloques negros enormes.</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Estirar hasta llenar</td>
                  <td className="py-3">Las caras de las modelos se alargan. La tipografía también.</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>El motivo es de forma. Un video horizontal ordena la información de izquierda a derecha. Uno vertical la ordena de arriba abajo, en pisos. El visitante recorre el tótem bajando la vista, no barriendo. Un logo en la esquina de un 16:9 no tiene adónde ir en un 9:16.</p>
            <p className={body}>Además está el tamaño. Si achicás un 1920 × 1080 para que entre en 1080 de ancho, todo queda a poco más de la mitad. El texto que se leía en la laptop de la agencia no se lee desde el pasillo.</p>
            <p className={body}><strong>Una pantalla vertical no es una horizontal recortada.</strong> Se diseña para su forma: un mensaje por escena, texto grande, el logo donde llega el ojo. Si querés ver cómo se compone, leé la guía sobre <Link href="/guias/video-vertical-para-pantalla-de-feria" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo armar video vertical para pantalla de feria</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El marco, la base y la altura de los ojos</h2>
            <p className={body}>Cecilia mira el tótem apagado y ve lo que no figura en la ficha. El panel tiene un marco. Abajo hay una base que, en algunos modelos, lleva un vinilo o el logo del proveedor. Y el borde de arriba queda por encima de la cabeza de casi todos.</p>
            <p className={body}>Eso define tu margen seguro: la zona donde va lo importante.</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li>Dejá libre una banda en los cuatro bordes. Ni el logo ni el texto la tocan. El fondo sí llega hasta el borde.</li>
              <li>Pedí la medida del marco y de cualquier pieza que tape el panel. Con eso calculás el margen en píxeles en vez de adivinarlo.</li>
              <li>Poné el mensaje principal en la franja del medio, la que cae a la altura de los ojos de alguien parado.</li>
              <li>Usá la parte baja para algo que no importe perder: un color, una textura en movimiento. Cuando alguien se para adelante, tapa esa zona.</li>
            </ol>
            <p className={body}>En la feria de Cecilia, el pasillo va a estar lleno de peluqueros con la valija de tijeras al hombro. Vienen de ver una demostración de color. Miran el celular y miran los stands de reojo. El logo tiene que estar entero y por encima del hombro del que se paró adelante.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Un loop que no se nota que vuelve a empezar</h2>
            <p className={body}>El tótem va a pasar el video todo el día, una vuelta tras otra. Cada vez que vuelve al principio hay un riesgo: un salto, un cuadro negro, un logo que aparece de golpe.</p>
            <p className={body}>Un peluquero que pasa le dedica al tótem pocos segundos de mirada, si alguno: los estudios de pantallas en espacios públicos miden miradas breves, de uno a pocos segundos, y muchas veces ninguna (<a href="https://almeida.informatik.rwth-aachen.de/publications/huang2008b.pdf" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Huang, Koster y Borchers, 2008</a>; <a href="https://discovery-pp.ucl.ac.uk/id/eprint/1488204/1/Marshall_pn236-dalton.pdf" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Dalton, Collins y Marshall, 2015</a>). Puede entrar al video en cualquier punto. Por eso:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>El último cuadro empalma con el primero. Sin fundido a negro al final.</li>
              <li>Algo se mueve siempre. Un cuadro quieto parece una pantalla colgada.</li>
              <li>Un mensaje por escena. Si alguien ve una sola, se lleva la marca y una idea.</li>
              <li>Sin audio. Entre los secadores de las demostraciones y la música de los stands, no se oiría.</li>
            </ul>
            <p className={body}>Último control: probá el archivo en el tótem real, no en tu monitor. Llevá dos pendrives con el mismo archivo. Poné la medida en el nombre, por ejemplo totem-1080x1920.mp4, para que nadie del armado cargue la versión equivocada.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La segunda prueba en el galpón</h2>
            <p className={body}>Esa misma tarde, Cecilia le reenvía la tabla a su agencia. Suma la foto del tótem armado y la medida del marco. La agencia no rota nada. Arma el video de nuevo en 1080 × 1920.</p>
            <p className={body}>El logo va arriba, entero, lejos del borde. El nombre del tratamiento ocupa el centro, en letra grande. Cada escena dice una sola cosa. Abajo corre una textura de color que se puede tapar sin perder nada.</p>
            <p className={body}>Unos días después, Cecilia vuelve al galpón. El autoelevador sigue pitando. El técnico enchufa el pendrive y se cruza de brazos. El logo entra completo. El loop termina y arranca de nuevo sin que se note la costura.</p>
            <p className={body}>Cecilia saca una foto con el celular y se la manda al armador del stand. Ya no le preocupa la pantalla. Le preocupa tener tinturas suficientes para las muestras.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos loops para pantallas de stands. Para un tótem trabajamos así:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Partimos de la ficha y de una foto del tótem armado.</strong> Con eso definimos la medida y el margen seguro.</li>
              <li><strong>Diseñamos en vertical desde el primer boceto.</strong> No adaptamos un horizontal a la fuerza.</li>
              <li><strong>Loops de 10 a 30 segundos</strong>, sin audio, con movimiento continuo y sin cortes a negro.</li>
              <li><strong>Texto grande y contraste alto</strong>, pensado para leerse desde el pasillo.</li>
              <li><strong>Entregamos el MP4 a la medida exacta del panel</strong>, en plazos cortos.</li>
            </ul>
            <p className={body}>Si tu agencia ya hizo el video en horizontal, no se pierde: usamos ese material para armar la versión vertical. Y si la feria es en dos semanas, mandanos hoy la ficha del tótem y te confirmamos la medida antes de empezar. Mirá cómo trabajamos los <Link href="/totems-digitales" className="text-azul underline underline-offset-2 hover:text-cobalto">loops para tótems digitales</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué tótem alquilaste y para cuándo es la feria. Hablemos de tu próximo evento: <GuideCta slug="medidas-de-video-para-totem-vertical" className="font-medium text-azul-claro hover:underline">escribinos a manzo@mansalvadesign.com</GuideCta>.</p>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/video-vertical-para-pantalla-de-feria" className="text-azul underline underline-offset-2 hover:text-cobalto">video vertical para pantalla de feria</Link> · <Link href="/guias/animacion-en-loop-sin-sonido-para-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">animación en loop sin sonido para eventos</Link></p>
    </GuideArticle>
  );
}
