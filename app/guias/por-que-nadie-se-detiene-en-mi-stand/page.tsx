import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/por-que-nadie-se-detiene-en-mi-stand.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("por-que-nadie-se-detiene-en-mi-stand");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function PorQueNadieSeDetieneEnMiStandGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>Martín tiene el mejor lugar del pabellón y el stand más vacío del pasillo.</p>
            <p className={body}>Pongamos que Martín es gerente comercial de una fábrica de bombas hidráulicas. Es martes, once de la mañana, primer día de una feria industrial en Córdoba. El pabellón huele a aceite y a cartón nuevo. Dos pasillos más allá, un compresor arranca cada tantos minutos y tapa todo.</p>
            <p className={body}>Su stand tiene 20 m² y queda a pocos metros de la entrada. Tres bombas centrífugas pulidas descansan sobre tarimas. Atrás hay un banner con el catálogo completo. Al fondo, una pantalla LED pasa el video institucional de la empresa.</p>
            <p className={body}>La gente pasa. Pasa mucha gente. Casi nadie frena.</p>
            <p className={body}>Martín pagó el espacio, el montaje, la pantalla y el viaje de tres vendedores. Quedan dos días y medio de feria. Las planillas de contactos siguen en blanco. <strong>El lugar no es el problema. Eso es lo que más lo desconcierta.</strong></p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo de siempre no alcanza</h2>
            <p className={body}>Martín hace lo que hace cualquiera. Pone folletos en el mostrador. Agrega un bowl de caramelos. Le pide a un vendedor que se pare en el borde del pasillo y salude.</p>
            <p className={body}>Los folletos se van, pero de a uno y sin conversación. Los caramelos también. El vendedor saluda y la gente responde con la cabeza sin bajar el ritmo.</p>
            <p className={body}>Después prueba subir el volumen del institucional. El compresor gana. El video dura cuatro minutos y tiene un locutor que nadie escucha.</p>
            <p className={body}>Acá está el error de diagnóstico. Martín busca qué le falta al stand. <strong>El problema está en cómo mira el que camina por el pasillo.</strong></p>
            <p className={body}>Un visitante de feria no recorre stands. Recorre un pasillo. Camina con un destino, mira el celular, charla con un colega. Ve el costado de las cosas durante uno o dos segundos, cuando lo ve: los estudios de pantallas en espacios públicos miden miradas breves, de uno a pocos segundos, y muchas veces ninguna (<a href="https://almeida.informatik.rwth-aachen.de/publications/huang2008b.pdf" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Huang, Koster y Borchers, 2008</a>; <a href="https://discovery-pp.ucl.ac.uk/id/eprint/1488204/1/Marshall_pn236-dalton.pdf" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Dalton, Collins y Marshall, 2015</a>), y las ignora de entrada si espera que muestren publicidad de siempre (<a href="https://www.dfki.de/web/forschung/projekte-publikationen/publikation/4186" target="_blank" rel="noopener" className="text-azul underline underline-offset-2 hover:text-cobalto">Müller y otros, 2009</a>). En ese tiempo no lee, no escucha y no compara. Solo decide si algo merece que gire la cabeza.</p>
            <p className={body}>El stand de Martín pierde esa decisión por tres motivos.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Primer error: todo está quieto en un pasillo de cosas quietas</h2>
            <p className={body}>Martín mira su stand desde adentro y ve un stand prolijo. El visitante lo ve de reojo y ve lo mismo que en los veinte stands anteriores: producto sobre tarima, banner, logo.</p>
            <p className={body}>El ojo que camina en piloto automático no registra lo quieto. Registra lo que cambia. Una forma que se mueve en el borde de la mirada hace girar la cabeza antes que un color o un logo. Es un reflejo, no una decisión.</p>
            <p className={body}>Las bombas de Martín son buenas máquinas. Pero apagadas sobre una tarima son muebles metálicos.</p>
            <p className={body}>La pantalla debería ser lo que se mueve. El institucional se mueve, pero mal:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Arranca con una placa de logo fija durante varios segundos.</li>
              <li>Corta a negro entre escenas.</li>
              <li>Muestra al dueño hablando a cámara, un plano casi quieto.</li>
              <li>Tiene momentos lentos pensados para alguien sentado que eligió verlo.</li>
            </ul>
            <p className={body}>El visitante entra al video en cualquier segundo. Si justo le toca el negro o el logo fijo, la pantalla es un rectángulo más.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Segundo error: diez cosas dicen diez mensajes</h2>
            <p className={body}>Martín quiere que se sepa todo. Que fabrican desde hace décadas. Que tienen catorce modelos. Que cumplen normas. Que hacen bombas para riego, para minería y para edificios.</p>
            <p className={body}>Todo eso está en el stand al mismo tiempo. El banner tiene la grilla de modelos. El mostrador tiene las certificaciones. La pantalla muestra la planta. Las tarimas muestran tres productos distintos.</p>
            <p className={body}>El visitante se hace una sola pregunta al pasar: <strong>«¿esto es para mí?»</strong>. Si el stand le responde diez cosas a la vez, no le responde ninguna. El ojo no sabe dónde aterrizar y sigue.</p>
            <p className={body}>Un stand que frena gente dice una cosa por vez. Una sola frase grande. Un solo producto en primer plano. Una sola idea en la pantalla en cada momento.</p>
            <p className={body}>Martín no tiene que elegir qué decir para siempre. Tiene que elegir qué decir desde el pasillo. El catálogo es para el que ya frenó.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Tercer error: todo se lee desde un metro</h2>
            <p className={body}>Martín revisó el banner en la imprenta, a medio metro. Se leía perfecto. El visitante lo ve a seis u ocho metros, en diagonal y caminando.</p>
            <p className={body}>Desde ahí, el banner de Martín es una textura gris. La pantalla tiene el mismo problema:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Textos en cuerpo de diapositiva, pensados para un monitor de escritorio.</li>
              <li>Gris sobre azul oscuro, colores corporativos con poco contraste.</li>
              <li>Subtítulos chicos que nadie llega a leer antes de pasar.</li>
              <li>Un locutor que explica lo importante, sin audio que se escuche.</li>
            </ul>
            <p className={body}>La luz del pabellón empeora todo. Lava los colores y aplana los contrastes suaves.</p>
            <p className={body}>Estos tres errores se suman. Un stand quieto, con diez mensajes, que se lee de cerca, es invisible aunque esté en la entrada.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Lo que Martín ve desde adentro</th>
                  <th className="py-3 pr-4 font-normal">Lo que ve el visitante desde el pasillo</th>
                  <th className="py-3 font-normal">Qué cambiar</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Producto prolijo sobre tarimas</td>
                  <td className="py-3 pr-4">Otro stand igual al anterior</td>
                  <td className="py-3">Algo que se mueva sin pausa en la pantalla</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Catálogo completo y certificaciones</td>
                  <td className="py-3 pr-4">Ruido que no responde «¿es para mí?»</td>
                  <td className="py-3">Un mensaje por vez, el resto para el que frena</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Banner y video que se leen bien</td>
                  <td className="py-3 pr-4">Una textura gris a ocho metros</td>
                  <td className="py-3">Texto grande y contraste alto</td>
                </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El miércoles, Martín cuenta paradas</h2>
            <p className={body}>Martín no puede rehacer el stand en una noche. Pero puede dejar de adivinar.</p>
            <p className={body}>El miércoles a la mañana apaga el institucional. Pone en la pantalla una sola foto grande de la bomba de riego con una frase en letras enormes. Saca la grilla de modelos del frente. Deja una sola bomba en primer plano.</p>
            <p className={body}>Y empieza a medir. Le pide a un vendedor que anote cuatro números por cada franja de dos horas:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>Paradas:</strong> gente que frena o gira la cabeza más de un instante.</li>
              <li><strong>Conversaciones:</strong> gente que hace una pregunta.</li>
              <li><strong>Leads calificados:</strong> contactos con un proyecto real y una fecha.</li>
              <li><strong>Costo por lead:</strong> lo que costó la feria dividido por los leads calificados, al cierre.</li>
            </ol>
            <p className={body}>La pantalla con una foto fija no hace milagros. Pero la frase grande y el mensaje único cambian algo que Martín ve con sus ojos: los que frenan ya saben de qué se trata. Los vendedores dejan de explicar qué fabrica la empresa y empiezan a preguntar por el proyecto.</p>
            <p className={body}>Si querés ordenar esa planilla antes de tu próxima feria, mirá <Link href="/guias/como-captar-leads-en-ferias-comerciales" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo captar leads en ferias comerciales</Link>.</p>
            <p className={body}>El jueves Martín tiene la respuesta que le faltaba. El mensaje único funciona. La foto quieta todavía se pierde entre las demás cosas quietas. <strong>Lo que le falta es el movimiento.</strong></p>
            <p className={body}>Para la feria de dentro de cuatro meses, Martín ya sabe qué pedir. Un loop corto que se repite sin cortes. La bomba que gira, el agua que sale, una frase por escena. Texto que se lee a diez metros. Nada que dependa del audio. Hecho a la medida exacta de su pantalla LED, no un video horizontal estirado.</p>
            <p className={body}>No es un final feliz. Es un criterio. La próxima vez va a saber si funciona porque va a contar las paradas.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos ese loop para pantallas de stands: LED, videowalls y tótems. Lo hacemos así:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Loop corto que se repite:</strong> entre 10 y 30 segundos, sin cortes a negro, para que el visitante entre en cualquier segundo y vea movimiento.</li>
              <li><strong>Un mensaje por escena:</strong> una frase, un producto, una idea. El catálogo queda para el vendedor.</li>
              <li><strong>Texto grande y contraste alto:</strong> legible a diez metros con la luz del pabellón.</li>
              <li><strong>Sin audio:</strong> todo se entiende con el sonido apagado.</li>
              <li><strong>A la medida exacta de la pantalla:</strong> resolución y proporción de tu LED o tu tótem, en plazos cortos.</li>
            </ul>
            <p className={body}>Mirá cómo trabajamos los <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands</Link> o, si tu pantalla es vertical, los <Link href="/totems-digitales" className="text-azul underline underline-offset-2 hover:text-cobalto">loops para tótems digitales</Link>. Necesitamos tres cosas tuyas: la medida de la pantalla, el producto que querés mostrar y la frase que querés que el pasillo lea.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y cuándo es la feria.</p>
            <p className="text-[15px] leading-[1.5] text-plata">Hablemos de tu próximo evento: <GuideCta slug="por-que-nadie-se-detiene-en-mi-stand" className="font-medium text-azul-claro hover:underline">escribinos a manzo@mansalvadesign.com</GuideCta>.</p>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/como-hacer-que-la-gente-se-detenga-en-un-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo hacer que la gente se detenga en un stand</Link> · <Link href="/guias/errores-comunes-en-stands-de-ferias" className="text-azul underline underline-offset-2 hover:text-cobalto">errores comunes en stands de ferias</Link></p>
    </GuideArticle>
  );
}
