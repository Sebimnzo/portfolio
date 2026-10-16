import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/video-vertical-para-pantalla-de-feria.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("video-vertical-para-pantalla-de-feria");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function VideoVerticalParaPantallaDeFeriaGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>Paula tiene dos tótems a los costados del stand, y en ninguno se ve lo único que vino a vender.</p>
            <p className={body}>Pongamos que se llama Paula. Es directora de marketing de una fábrica de pisos vinílicos para oficinas y comercios. Es la mañana del primer día de una feria de arquitectura e interiorismo. El pabellón huele a madera recién cortada y a alfombra nueva. En el stand de al lado todavía suena un taladro.</p>
            <p className={body}>Sus dos tótems verticales enmarcan la entrada, como dos columnas. El armador le pidió &quot;el video&quot; y Paula mandó el que tenían: un horizontal de la línea nueva, filmado en una oficina. En el tótem, ese video quedó encogido entre dos bloques negros. El piso, que es el producto, ocupa una franja finita en el medio. Desde el pasillo, mide lo que un dedo.</p>
            <p className={body}>Pasa un arquitecto con una carpeta bajo el brazo. Mira de reojo el tótem. Ve negro, una tira de oficina, más negro. Sigue caminando.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Dos columnas negras a cada lado del stand</h2>
            <p className={body}>Paula pagó el espacio, la construcción y las dos pantallas. Las eligió verticales porque se ven desde lejos y marcan la entrada. Ahora son lo más grande del stand y no muestran nada.</p>
            <p className={body}>Lo que busca a esta altura es concreto: cómo tener un video vertical para la pantalla de feria sin rehacer todo. La respuesta corta, para quien tiene la feria encima:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>No recortes el horizontal.</strong> Se pierde casi todo el cuadro y lo que queda se ve blando.</li>
              <li><strong>Diseñá a la resolución del tótem.</strong> En un tótem Full HD vertical, suele ser 1080×1920.</li>
              <li><strong>Componé para leer de arriba abajo.</strong> Un elemento por vez, en el orden en que baja la mirada.</li>
              <li><strong>Agrandá el texto.</strong> Tiene que leerse a 10 metros, de reojo y sin audio.</li>
              <li><strong>Meté el producto entero en cuadro.</strong> Si vendés pisos, que se vea piso, no una tira.</li>
              <li><strong>Pedí dos versiones de la misma pieza.</strong> Vertical para los tótems, horizontal para la pantalla ancha.</li>
            </ol>
            <p className={body}>Las medidas, formatos y otras resoluciones están en la guía de <Link href="/guias/medidas-de-video-para-totem-vertical" className="text-azul underline underline-offset-2 hover:text-cobalto">medidas de video para tótem vertical</Link>. Acá va lo que esa guía no cubre: por qué cambia el diseño.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que se pierde cuando recortás un horizontal</h2>
            <p className={body}>El técnico del stand le ofrece a Paula una salida rápida: &quot;Lo recorto para que llene la pantalla&quot;. Suena razonable. No lo es.</p>
            <p className={body}>Un video horizontal es ancho y bajo. Un tótem es angosto y alto. Para llenar el tótem con el horizontal, hay que quedarse con una tajada del centro. <strong>Si partís de un Full HD horizontal, esa tajada es poco menos de un tercio del ancho.</strong> Los otros dos tercios se tiran.</p>
            <p className={body}>Después, esa tajada se estira casi al doble para llenar el alto. La imagen se ablanda. Las vetas del vinílico, que eran el argumento de venta, se vuelven una mancha.</p>
            <p className={body}>Hay más pérdidas:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>El texto queda cortado.</strong> Un título centrado en horizontal es más ancho que la tajada que sobrevive.</li>
              <li><strong>El logo desaparece.</strong> Suele ir en una esquina, y las esquinas son lo primero que se va.</li>
              <li><strong>La composición se rompe.</strong> El camarógrafo encuadró la oficina a lo ancho: escritorios, ventanal, piso. En vertical queda un pedazo de escritorio y la pata de una silla.</li>
            </ul>
            <p className={body}>La otra salida es dejar el horizontal entero y achicarlo. Eso es lo que Paula ya tiene: una franja en el medio y dos bloques negros. Ninguna de las dos muestra el piso.</p>
            <p className={body}><strong>Una pantalla vertical no es una horizontal recortada.</strong> Es otro lienzo y pide otra pieza.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué cambia cuando diseñás en vertical</h2>
            <p className={body}>Paula se aleja unos pasos y mira el tótem desde el pasillo. Ahí entiende algo: la pantalla es alta como una persona. La mirada no la recorre de izquierda a derecha. La recorre de arriba abajo.</p>
            <p className={body}>Eso cambia cinco cosas del diseño:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Qué</th>
                  <th className="py-3 pr-4 font-normal">En horizontal</th>
                  <th className="py-3 font-normal">En vertical</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Composición</td>
                  <td className="py-3 pr-4">Elementos lado a lado</td>
                  <td className="py-3">Elementos apilados</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Lectura</td>
                  <td className="py-3 pr-4">De izquierda a derecha</td>
                  <td className="py-3">De arriba abajo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Ritmo</td>
                  <td className="py-3 pr-4">Varias cosas a la vez</td>
                  <td className="py-3">Un elemento por vez</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Texto</td>
                  <td className="py-3 pr-4">Líneas largas</td>
                  <td className="py-3">Pocas palabras por línea, más grandes</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Producto</td>
                  <td className="py-3 pr-4">Puede quedar de fondo</td>
                  <td className="py-3">Entero en cuadro, protagonista</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}><strong>Composición apilada.</strong> En vertical no entran dos cosas lado a lado sin achicarse. Se apilan: arriba lo que llama, en el medio el producto, abajo la marca. Cada franja tiene un trabajo.</p>
            <p className={body}><strong>Lectura de arriba abajo.</strong> El ojo entra por arriba y baja. El movimiento puede acompañar ese recorrido: una tabla de piso que se despliega hacia el suelo, una textura que sube como un pasillo que se aleja.</p>
            <p className={body}><strong>Un elemento por vez.</strong> El ancho es poco. Si metés el piso, tres íconos y un título juntos, todo se achica. Mejor una escena por mensaje: primero el piso, después la frase, después el logo.</p>
            <p className={body}><strong>Texto más grande.</strong> Cada línea lleva pocas palabras. A cambio, esas palabras pueden ser enormes. Tres o cuatro palabras por línea se leen a 10 metros.</p>
            <p className={body}><strong>El producto entero en cuadro.</strong> Un piso tiene a favor la forma del tótem. Una toma cenital de un pasillo de oficina, con el vinílico de punta a punta, llena la pantalla de abajo arriba. El producto deja de ser una franja y pasa a ser la pantalla.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Las once, y el stand de enfrente frena gente</h2>
            <p className={body}>El pasillo ya está lleno. Enfrente, una marca de revestimientos tiene una pantalla con una sola textura que se mueve despacio y una palabra enorme. La gente frena ahí.</p>
            <p className={body}>Paula ve la diferencia. El visitante de una feria de arquitectura camina, habla, mira el celular. A cada stand le da una mirada de reojo de pocos segundos, y a menudo desde lejos (<a href="https://discovery-pp.ucl.ac.uk/id/eprint/1488204/1/Marshall_pn236-dalton.pdf" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Dalton, Collins y Marshall, 2015</a>). En ese tiempo tiene que entender qué se vende ahí. No hay otro momento.</p>
            <p className={body}>Por eso la pieza vertical sigue las mismas reglas que cualquier pantalla de feria:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Loop corto que se repite</strong>, de 10 a 30 segundos. El visitante llega en cualquier segundo y entiende igual.</li>
              <li><strong>Sin audio.</strong> En el pabellón no se escucha. Todo lo dice la imagen.</li>
              <li><strong>Movimiento continuo, sin cortes a negro.</strong> Un corte a negro en un tótem vuelve a ser una columna negra.</li>
              <li><strong>Contraste alto.</strong> Las luces del pabellón lavan la pantalla.</li>
            </ul>
            <p className={body}>Cómo se arma esa pieza que da vueltas sin que se note el empalme está en la guía de <Link href="/guias/animacion-en-loop-sin-sonido-para-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">animación en loop sin sonido para eventos</Link>. Con esas reglas, el vertical deja de ser un problema de formato. Pasa a ser la vitrina del stand: está a la altura de los ojos y enmarca la entrada.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Una pieza, dos versiones</h2>
            <p className={body}>Paula no tira el video horizontal. Lo va a seguir usando en la web y en la pantalla ancha del fondo del stand. Lo que cambia es el orden: la próxima vez, la pieza nace en las dos orientaciones desde el guion.</p>
            <p className={body}>En la práctica, es así:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>Un guion, dos encuadres.</strong> Las escenas son las mismas. Cada una se compone dos veces: a lo ancho y a lo alto.</li>
              <li><strong>Los elementos se diseñan sueltos.</strong> Piso, texto y logo van en capas separadas. Así se reacomodan para cada formato sin achicarse.</li>
              <li><strong>El mismo ritmo.</strong> Los dos loops duran lo mismo. Si el stand tiene tótems y una pantalla ancha, corren en sincronía.</li>
              <li><strong>Una entrega por pantalla.</strong> Cada archivo a la resolución exacta de su pantalla, listo para enchufar.</li>
            </ol>
            <p className={body}>Lo que Paula tiene que mandar es poco: medida y cantidad de pantallas, material del producto (texturas en alta, renders o fotos), el logo en vector y la frase que quiere que el visitante se lleve.</p>
            <p className={body}>En la feria siguiente, el tótem ya no muestra una franja. Muestra el piso de abajo arriba, una palabra grande y el logo. El próximo arquitecto que pase con una carpeta bajo el brazo ve piso.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos loops para pantallas de stands de feria. Para un stand como el de Paula, con dos tótems y una pantalla ancha, esto es lo que hacemos:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Versiones vertical y horizontal de la misma pieza</strong>, compuestas para cada formato, no recortadas.</li>
              <li><strong>Loops de 10 a 30 segundos</strong>, sin audio, con movimiento continuo y sin cortes a negro.</li>
              <li><strong>Un mensaje por escena</strong> y texto legible a 10 metros.</li>
              <li><strong>Entrega a la medida exacta de cada pantalla</strong>, con plazos cortos.</li>
            </ul>
            <p className={body}>Mirá cómo trabajamos los <Link href="/totems-digitales" className="text-azul underline underline-offset-2 hover:text-cobalto">loops para tótems digitales</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. En vertical, en horizontal o en los dos. Contanos qué pantallas tenés y cuándo es la feria.</p>
            <p className="text-[15px] leading-[1.5] text-plata">Hablemos de tu próximo evento: <GuideCta slug="video-vertical-para-pantalla-de-feria" className="font-medium text-azul-claro hover:underline">manzo@mansalvadesign.com</GuideCta></p>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/medidas-de-video-para-totem-vertical" className="text-azul underline underline-offset-2 hover:text-cobalto">medidas de video para tótem vertical</Link> · <Link href="/guias/animacion-en-loop-sin-sonido-para-eventos" className="text-azul underline underline-offset-2 hover:text-cobalto">animación en loop sin sonido para eventos</Link></p>
    </GuideArticle>
  );
}
