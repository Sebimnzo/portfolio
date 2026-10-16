import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/como-usar-una-pantalla-led-en-un-stand.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("como-usar-una-pantalla-led-en-un-stand");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function ComoUsarUnaPantallaLedEnUnStandGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>La pantalla más cara del pabellón puede ser la que nadie mira, y Carolina lo descubre a las once de la mañana.</p>
            <p className={body}>Pongamos que Carolina es jefa de marketing en una empresa de insumos médicos descartables. Está en un congreso hospitalario en Córdoba, con exposición comercial. Su stand tiene un mostrador, dos banquetas altas, un banner con el logo y una pantalla LED alquilada detrás del mostrador.</p>
            <p className={body}>El pabellón zumba. Médicos, enfermeras y compradores de hospitales caminan por el pasillo entre una charla y otra. Llevan la credencial colgada y una bolsa de folletos. En la pantalla corre el video institucional de la empresa: tres minutos, locución, música y el fundador recorriendo la planta.</p>
            <p className={body}>Nadie frena. Carolina pagó el espacio, el armado, los pasajes del equipo a Córdoba y el alquiler de la pantalla. Tiene la pantalla. Le falta el plan para usarla.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Las once y la pantalla ya es parte del decorado</h2>
            <p className={body}>Carolina sale al pasillo y mira su stand como lo mira un visitante. Sus propios vendedores, parados detrás del mostrador, tapan la mitad de abajo de la pantalla. El logo de la empresa aparece en el segundo 40 del video. Cuando aparece, el visitante ya pasó.</p>
            <p className={body}>A Carolina le pasa lo mismo que a casi todo el que busca cómo usar una pantalla LED en un stand. El hardware está resuelto. Faltan cuatro decisiones: dónde va, a qué altura, con qué brillo y qué muestra.</p>
            <p className={body}>Las tres primeras se arreglan con el armador. <strong>La cuarta es la mitad del resultado, y es la más barata de corregir.</strong></p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Dónde va la pantalla: a la vista del pasillo, no del mostrador</h2>
            <p className={body}>El visitante no entra al stand para mirar la pantalla. La mira desde el pasillo, caminando, de reojo. Una pantalla que solo se ve desde adentro trabaja para la gente que ya frenó.</p>
            <p className={body}>Carolina recorre el pasillo en las dos direcciones. Desde la izquierda, la columna del stand vecino tapa su pantalla. Desde la derecha, la ve recién cuando está enfrente. En los dos casos, la pantalla llega tarde.</p>
            <p className={body}>Esto es lo que conviene acordar con el armador antes de la feria:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Altura.</strong> El borde de abajo va por encima de las cabezas de la gente parada en el stand. Si tus vendedores la tapan, la pantalla desaparece justo en la hora de más tráfico.</li>
              <li><strong>Orientación.</strong> La pantalla mira hacia donde viene la gente, no hacia la pared de enfrente. En un stand de esquina, va en la cara del pasillo principal.</li>
              <li><strong>Distancia.</strong> El visitante decide a unos 10 metros si se acerca. El contenido se diseña para leerse desde ahí.</li>
              <li><strong>Nada adelante.</strong> Ni plantas, ni banners, ni un mostrador alto delante del tercio inferior.</li>
            </ul>
            <p className={body}>El día del montaje ya es tarde para mover una estructura. Esto se decide en el plano.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El brillo que en el depósito encandila y en el pabellón no alcanza</h2>
            <p className={body}>El proveedor le mostró la pantalla a Carolina en un depósito oscuro. Se veía perfecta. En el pabellón, con los tubos del techo y los reflectores del stand de al lado, los colores se lavan.</p>
            <p className={body}>Subir el brillo no siempre lo arregla. Una pantalla al máximo en un pasillo cerrado cansa la vista y quema los blancos. <strong>El contraste del contenido pesa tanto como el brillo del panel.</strong></p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Qué ves en el pabellón</th>
                  <th className="py-3 font-normal">Qué hacer</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Colores lavados por la luz del techo</td>
                  <td className="py-3">Fondos oscuros o saturados, texto claro, sin degradés suaves</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">La pantalla encandila de cerca</td>
                  <td className="py-3">Pedirle al técnico que ajuste el brillo en el lugar, con las luces del pabellón encendidas</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Texto fino que vibra</td>
                  <td className="py-3">Tipografía gruesa, sin líneas de un píxel</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Blancos que queman</td>
                  <td className="py-3">Evitar fondos blancos en toda la pantalla</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>El brillo justo para interior depende del panel y de la luz del pabellón; los fabricantes suelen recomendar entre 800 y 1500 nits para espacios interiores muy iluminados (<a href="https://luxwave.vn/en/kien-thuc-led/do-sang-nits-man-hinh-led-bao-nhieu" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">guía de brillo de LuxWave</a>). Lo seguro es ajustarlo en el lugar, no en el depósito.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Por qué el institucional de tres minutos se pierde en el pasillo</h2>
            <p className={body}>A las cuatro de la tarde el pasillo está lleno. El stand de al lado, un laboratorio, tiene una pantalla más chica que la de Carolina. Igual frena gente. Carolina se acerca a ver qué pasa.</p>
            <p className={body}>La pantalla vecina muestra una frase grande sobre un fondo que se mueve. La frase cambia cada pocos segundos. No hay audio. El que pasa la lee entera sin dejar de caminar. Algunos frenan.</p>
            <p className={body}>El institucional de Carolina falla por tres razones de oficio:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>No se escucha.</strong> En una feria hay ruido. La locución cuenta todo y se pierde. Sin ella, el video es una sucesión de planos de planta y líneas de producción sin explicación.</li>
              <li><strong>Nadie lo ve desde el principio.</strong> El visitante llega en cualquier segundo del video. Le da a la pantalla una mirada de uno a pocos segundos (<a href="https://www.sixteen-nine.net/2019/02/18/how-to-maximize-dwell-time-for-digital-signage/" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">mediciones recopiladas por Sixteen:Nine, 2019</a>) y sigue. Si el mensaje está en el minuto dos, no existe.</li>
              <li><strong>No está hecho para esa pantalla.</strong> Se editó en 16:9 para la web. La LED tiene otra proporción, y el video aparece estirado o con barras negras.</li>
            </ol>
            <p className={body}>Ese video es un video corporativo. Sirve para la web, para una reunión, para alguien que ya se sentó a mirarlo. La pantalla del stand pide otra cosa: un activo de conversión. Una pieza con un solo trabajo, que el que pasa frene.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal"></th>
                  <th className="py-3 pr-4 font-normal">Video institucional</th>
                  <th className="py-3 font-normal">Loop para la pantalla del stand</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Duración</td>
                  <td className="py-3 pr-4">Varios minutos</td>
                  <td className="py-3">De 10 a 30 segundos, que se repiten</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Audio</td>
                  <td className="py-3 pr-4">Locución y música</td>
                  <td className="py-3">Ninguno</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Mensaje</td>
                  <td className="py-3 pr-4">Toda la historia de la empresa</td>
                  <td className="py-3">Uno por escena</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Texto</td>
                  <td className="py-3 pr-4">Chico o ausente</td>
                  <td className="py-3">Grande, legible a 10 metros</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Dónde empieza a mirarlo el visitante</td>
                  <td className="py-3 pr-4">En el principio</td>
                  <td className="py-3">En cualquier segundo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Final</td>
                  <td className="py-3 pr-4">Corte a negro</td>
                  <td className="py-3">Vuelve al inicio sin que se note</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>Si querés ver qué escenas funcionan según lo que vendés, mirá <Link href="/guias/contenido-para-pantallas-led-en-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">qué contenido poner en pantallas LED en eventos</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que la pantalla LED le pide al archivo</h2>
            <p className={body}>Queda un error más, y no se ve hasta que la pantalla se enciende. Una pantalla LED no tiene 1920 × 1080 píxeles. Tiene los que salen de su tamaño y de su pixel pitch, la distancia entre leds.</p>
            <p className={body}>Carolina le pregunta al proveedor. Su pantalla mide tres metros de ancho por dos de alto, con un pixel pitch de 3,9 mm. La cuenta da unos 770 × 510 píxeles. Su video de 1920 × 1080 se achica, se deforma y pierde el texto chico.</p>
            <p className={body}>Antes de diseñar una sola escena, pedile al proveedor estos datos:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>La medida de la pantalla, en módulos o en metros.</li>
              <li>El pixel pitch.</li>
              <li>La resolución final en píxeles, ancho por alto.</li>
              <li>El formato y el códec que acepta su reproductor.</li>
              <li>Si es una sola pantalla o varias que se sincronizan.</li>
            </ul>
            <p className={body}>Con eso, el loop se diseña a la resolución exacta, píxel por píxel. La cuenta paso a paso está en <Link href="/guias/resolucion-pantalla-led" className="text-azul underline underline-offset-2 hover:text-cobalto">la guía de resolución de pantalla LED</Link>. Qué archivo exportar, con qué códec y a qué peso, lo explicamos en <Link href="/guias/formato-de-video-para-pantalla-led-de-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">formato de video para pantalla LED de stand</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El brief que Carolina escribe para la próxima feria</h2>
            <p className={body}>El congreso termina el jueves. Carolina vuelve a la oficina con pocas tarjetas y una lista de lo que vio. Esta vez no arranca por la pantalla. Arranca por una pregunta: qué tiene que entender un médico o un comprador que pasa caminando entre dos charlas.</p>
            <p className={body}>Su brief entra en una hoja:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Objetivo:</strong> que el que pasa frene y pregunte por el kit quirúrgico descartable nuevo.</li>
              <li><strong>Escenas:</strong> el problema que resuelve el kit, el kit que se arma pieza por pieza, una frase que invita a acercarse, el logo. Un mensaje por escena.</li>
              <li><strong>Duración:</strong> un loop de 20 segundos que vuelve al inicio sin corte a negro.</li>
              <li><strong>Audio:</strong> ninguno.</li>
              <li><strong>Texto:</strong> pocas palabras, tipografía gruesa, contraste alto.</li>
              <li><strong>Datos técnicos:</strong> resolución exacta, pixel pitch y formato del reproductor.</li>
              <li><strong>Ubicación:</strong> altura y orientación acordadas con el armador, con la pantalla por encima de los vendedores.</li>
            </ul>
            <p className={body}>En la feria siguiente, la pantalla de Carolina muestra una frase y un kit que se arma solo. El que pasa lee la frase. Algunos frenan. Una instrumentadora pregunta si el kit viene armado por tipo de cirugía. Esa es la conversación que Carolina fue a buscar.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos lo que muestra la pantalla que ya tenés. Así trabajamos:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops de 10 a 30 segundos que se repiten sin corte a negro.</li>
              <li>Sin audio, con un mensaje por escena.</li>
              <li>Texto grande, legible a 10 metros, con contraste alto.</li>
              <li>Entrega a la resolución exacta de tu pantalla LED, tótem o videowall.</li>
              <li>Plazos cortos, para la feria que ya tenés encima.</li>
            </ul>
            <p className={body}>De vos necesitamos tres cosas: los datos técnicos de la pantalla, el mensaje principal y tu material de marca. Mirá cómo armamos el <Link href="/contenido-pantallas-led" className="text-azul underline underline-offset-2 hover:text-cobalto">contenido para pantallas LED</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y para cuándo la necesitás.</p>
            <GuideCta
              slug="como-usar-una-pantalla-led-en-un-stand"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/contenido-para-pantallas-led-en-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">qué contenido poner en pantallas LED en eventos</Link> y <Link href="/guias/formato-de-video-para-pantalla-led-de-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">formato de video para pantalla LED de stand</Link>.</p>
    </GuideArticle>
  );
}
