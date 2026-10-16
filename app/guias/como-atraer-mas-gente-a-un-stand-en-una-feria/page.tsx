import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/como-atraer-mas-gente-a-un-stand-en-una-feria.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("como-atraer-mas-gente-a-un-stand-en-una-feria");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function ComoAtraerMasGenteAUnStandEnUnaFeriaGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>A las once de la mañana, Gustavo ya repartió media caja de folletos y todavía no habló con un solo comprador. El problema no son los folletos. Es algo que pasa antes, en los primeros segundos, y que casi ningún expositor mira.</p>
            <p className={body}>Pongamos que Gustavo tiene una distribuidora de insumos para panaderías industriales. Vende premezclas, mejoradores, levaduras y grasas para hojaldre. Está en una feria gastronómica B2B en Rosario, con un stand sobre un pasillo lateral del pabellón. A un lado tiene un fabricante de hornos rotativos. Al otro, una marca de cafeteras industriales.</p>
            <p className={body}>El pabellón zumba. Suenan las cámaras de frío, un micrófono a lo lejos, carros que pasan con muestras. La gente camina con bolsas llenas y el celular en la mano. Las dos promotoras de Gustavo sonríen y estiran el brazo con el folleto. Casi todos lo agarran por cortesía. Dos pasos después, el folleto cae en el tacho de la esquina, arriba de otros iguales.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Las once de la mañana y nadie frena</h2>
            <p className={body}>Gustavo pagó el espacio, el armado, el flete de las muestras y tres días de su equipo de ventas fuera de la calle. La feria dura tres días. La primera mañana ya se fue.</p>
            <p className={body}>En la pared del fondo tiene una pantalla LED. Pasa el video institucional de la empresa: tres minutos, con locución, que arranca con la fachada del depósito y un camión saliendo. Nadie lo escucha. El pasillo suena más fuerte que el parlante.</p>
            <p className={body}>Mientras tanto, el stand de los hornos frena gente. Su pantalla muestra un solo plano: una bandeja de medialunas que se dora, una y otra vez. Un jefe de producción se para, mira, señala algo y entra a preguntar.</p>
            <p className={body}>Gustavo hace lo que recomienda cualquier lista de consejos. Pide más caramelos. Arma un sorteo para la tarde. Les dice a las promotoras que sonrían más y que se paren más adelante. Revisa que la iluminación esté bien. Todo eso ya lo tiene. Y la gente sigue pasando de largo.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Por qué el folleto termina en el tacho</h2>
            <p className={body}>El folleto le pide al visitante algo que todavía no te dio: interés. Se lo entregás antes de que sepa quién sos, qué vendés y si le sirve. Para él es peso en la bolsa. Lo tira en el primer tacho o en el hotel, sin abrirlo.</p>
            <p className={body}>Con el resto de la receta habitual pasa lo mismo:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Los caramelos atraen a quien quiere un caramelo. El comprador de una planta de pan lactal agarra uno y sigue caminando.</li>
              <li>El sorteo junta datos de gente que quiere ganar algo. Gustavo vuelve con una lista larga y pocos nombres que compren premezcla por tonelada.</li>
              <li>La sonrisa y la buena luz son necesarias. Pero todos los stands del pabellón las tienen. No diferencian a nadie.</li>
              <li>Las promotoras más adelante invaden el pasillo. Muchos visitantes esquivan a quien se les acerca con un papel.</li>
            </ul>
            <p className={body}><strong>El folleto, el caramelo y la sonrisa funcionan cuando el visitante ya frenó. Ninguno hace que frene.</strong> Ese es el hueco. Gustavo lo estaba llenando con más de lo mismo.</p>
            <p className={body}>Si querés el diagnóstico completo de este problema, leé <Link href="/guias/por-que-nadie-se-detiene-en-mi-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">por qué nadie se detiene en tu stand y cómo detectarlo</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que decide un visitante en los primeros segundos</h2>
            <p className={body}>Un visitante de feria camina horas. Mira de reojo, cansado, con una lista de stands en la cabeza. No lee: escanea. Decide en un instante si algo merece que frene. Las mediciones con cámaras en pantallas de digital signage hablan de miradas de entre uno y cinco segundos (<a href="https://www.sixteen-nine.net/2019/02/18/how-to-maximize-dwell-time-for-digital-signage/" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">mediciones recopiladas por Sixteen:Nine, 2019</a>), y el eye tracking en ferias reales muestra que la saturación de estímulos del pabellón reduce mucho los contactos visuales con cada stand (<a href="https://www.researchgate.net/publication/355365264_Built_to_attract_Evaluating_trade_show_booth_designs_using_attention_analysis_in_a_live_communication_context" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Hantel y Bauer, 2021</a>). Con o sin número exacto, cualquiera que haya caminado un pabellón lo vivió.</p>
            <p className={body}>En ese instante el ojo busca dos cosas. Primero, movimiento: la visión periférica lo detecta antes que cualquier texto. Segundo, algo que reconoce como suyo. A un panadero industrial lo frena una miga abierta, una masa que levanta, una corteza que cruje. No lo frena un logo con seis viñetas.</p>
            <p className={body}>Gustavo sale al pasillo y mira su propio stand desde ahí. En la pantalla ve la fachada del depósito. Después, un apretón de manos en una oficina. Quien pasa caminando ve cuatro segundos al azar de un video pensado para verse sentado, de principio a fin. Y sin el audio, esos cuatro segundos no dicen nada.</p>
            <p className={body}>Para que una pantalla frene gente en un pasillo, tiene que cumplir esto:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Qué necesita el visitante</th>
                  <th className="py-3 font-normal">Qué pide la pantalla</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Notar algo desde lejos</td>
                  <td className="py-3">Movimiento continuo, visible desde el fondo del pasillo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Entender sin escuchar</td>
                  <td className="py-3">Cero dependencia del audio: todo se lee o se ve</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Saber qué vendés al instante</td>
                  <td className="py-3">Un mensaje por escena, texto grande, contraste alto</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Reconocer su problema</td>
                  <td className="py-3">Una imagen del rubro, no de la empresa</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Llegar en cualquier momento</td>
                  <td className="py-3">Un loop corto, sin cortes a negro ni placas de inicio</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>Nada de esto reemplaza a las promotoras. Les da algo que hoy no tienen: gente que ya miró y quiere saber más.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Cómo saber si tu stand frena gente</h2>
            <p className={body}>Gustavo no puede arreglar lo que no mide. A la hora del almuerzo, le pide a una de las promotoras que deje los folletos y cuente. Quince minutos a la mañana, quince a la tarde. Cuántos pasan, cuántos frenan, cuántos hablan.</p>
            <p className={body}>Estas son las cuatro métricas de pasillo que importan:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Métrica</th>
                  <th className="py-3 pr-4 font-normal">Qué contás</th>
                  <th className="py-3 font-normal">Qué te dice</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Paradas</td>
                  <td className="py-3 pr-4">Visitantes que frenan frente al stand, aunque sea un momento</td>
                  <td className="py-3">Si el stand corta el paso del pasillo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Conversaciones</td>
                  <td className="py-3 pr-4">Paradas que terminan en una charla con tu equipo</td>
                  <td className="py-3">Si lo que dicen tus vendedores engancha</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Leads calificados</td>
                  <td className="py-3 pr-4">Conversaciones con alguien que compra o decide la compra</td>
                  <td className="py-3">Si estás atrayendo al público correcto</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Costo por lead</td>
                  <td className="py-3 pr-4">Lo que te costó la feria dividido por los leads calificados</td>
                  <td className="py-3">Si la feria se paga o no</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>El orden importa. Si hay pocas paradas, el problema está en el pasillo, no en el equipo. Si hay paradas pero pocas conversaciones, el problema es el discurso. Si hay muchas conversaciones y pocos leads, el problema es el público que atraés.</p>
            <p className={body}>Gustavo anota sus números en una servilleta. Pocas paradas. Las conversaciones que tuvo salieron casi todas de clientes que ya lo conocían. <strong>Su stand no tiene un problema de atención al visitante. Tiene un problema de pasillo.</strong></p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La segunda mañana, otra pantalla</h2>
            <p className={body}>Esa noche, en el hotel, Gustavo saca el institucional de la pantalla. Arma con su equipo lo que puede: una foto grande de un pan lactal cortado y una frase. &quot;Premezclas para panadería industrial.&quot; Nada más. Es fijo, pero se lee desde el fondo del pasillo.</p>
            <p className={body}>A la mañana siguiente, la promotora vuelve a contar. Frenan algunos más que el día anterior. No es una multitud. Es gente del rubro que lee la frase, se acerca y pregunta por el mejorador para masas congeladas. Ahora el folleto se entrega después de la charla, no antes. Y casi nadie lo tira.</p>
            <p className={body}>Gustavo entiende algo más. La foto fija ayuda, pero el stand de los hornos sigue frenando más gente. La diferencia es el movimiento. <strong>El estímulo visual en movimiento es lo único que corta el patrón de un visitante saturado de caminar un pabellón.</strong> Para la próxima feria no quiere improvisar en el hotel. Quiere un loop corto, hecho para su pantalla: la masa que levanta, la miga que se abre, la frase grande, el logo al final. Sin audio. Sin la fachada del depósito.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> hacemos ese loop. Es lo único que hacemos: video y motion graphics para pantallas de stands en ferias B2B.</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops de 10 a 30 segundos que se repiten sin cortes a negro.</li>
              <li>Sin audio: todo se entiende mirando, con el ruido del pabellón de fondo.</li>
              <li>Un mensaje por escena, con texto legible a 10 metros y contraste alto.</li>
              <li>Entrega a la resolución exacta de tu pantalla LED, videowall o tótem, según su pixel pitch y su formato.</li>
              <li>Plazos cortos, pensados para una feria que ya tiene fecha.</li>
            </ul>
            <p className={body}>Para empezar necesitamos poco: las medidas o la resolución de tu pantalla, tu logo, fotos o videos del producto y la frase que querés que lea el pasillo. Si no tenés la frase, la buscamos juntos.</p>
            <p className={body}>Mirá cómo trabajamos los <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands de feria</Link>. Si tu pantalla es una LED alquilada y no sabés qué archivo pedir, empezá por <Link href="/contenido-pantallas-led" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo se arma el contenido para pantallas LED</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">¿Tenés una feria en el calendario? Diseñamos el loop que hace que la gente frene en tu pasillo antes de seguir al stand de al lado. Contanos qué pantalla tenés y para cuándo la necesitás.</p>
            <p className="text-[15px] leading-[1.5] text-plata">Hablemos de tu próximo evento: escribinos a <GuideCta slug="como-atraer-mas-gente-a-un-stand-en-una-feria" className="font-medium text-azul-claro hover:underline">manzo@mansalvadesign.com</GuideCta>.</p>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/por-que-nadie-se-detiene-en-mi-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">por qué nadie se detiene en tu stand y cómo detectarlo</Link> · <Link href="/guias/como-captar-leads-en-ferias-comerciales" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo captar leads en ferias comerciales y calificarlos</Link>.</p>
    </GuideArticle>
  );
}
