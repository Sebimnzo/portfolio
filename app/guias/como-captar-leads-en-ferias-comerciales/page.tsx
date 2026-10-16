import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/como-captar-leads-en-ferias-comerciales.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("como-captar-leads-en-ferias-comerciales");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function ComoCaptarLeadsEnFeriasComercialesGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>Son las seis y media de la tarde del primer día y Nicolás cuenta los contactos de la tablet por tercera vez: son seis, y ninguno sirve.</p>
            <p className={body}>Pongamos que Nicolás es director comercial de una empresa de logística con transporte refrigerado. La empresa mueve carga que no puede pasar de cierta temperatura: vacunas, reactivos de laboratorio, flores de exportación. Esta semana expone en una feria del sector logístico. Nicolás tiene un stand en un pasillo lateral, una pantalla LED en la pared del fondo y tres vendedores con la remera de la empresa.</p>
            <p className={body}>El pabellón zumba. Un autoelevador en exhibición hace sonar su alarma de retroceso cada tanto. La gente camina con la credencial colgada y el celular en la mano. En el stand de al lado, una empresa de racks tiene un grupo frenado frente a su pantalla. En el de Nicolás, el folleto de la mañana está en el tacho de la columna.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Seis contactos y ningún decisor</h2>
            <p className={body}>Nicolás repasa la lista. Un estudiante de ingeniería industrial. Dos proveedores de neumáticos que quieren venderle a él. Un fletero independiente que busca trabajo. Una señora que se llevó la lapicera. Un comprador de una empresa que no mueve nada refrigerado.</p>
            <p className={body}>Ninguno decide la contratación de logística en un laboratorio o una distribuidora. Eso era lo que había que traer.</p>
            <p className={body}>Lo que está en juego es concreto. La empresa pagó el espacio, el armado, los pasajes y tres días de sueldo de tres vendedores. El gerente general le fijó un objetivo de leads. Quedan dos días.</p>
            <p className={body}><strong>El problema de Nicolás no está en la tablet.</strong> El formulario funciona. Los vendedores saben hablar. El problema pasa antes: la persona correcta nunca frenó.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El lead empieza en el pasillo, no en el formulario</h2>
            <p className={body}>Un lead de feria es la última parada de una cadena corta. Si un eslabón falla, los siguientes no existen.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Paso</th>
                  <th className="py-3 pr-4 font-normal">Qué hace el visitante</th>
                  <th className="py-3 font-normal">Qué podés medir</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Pasa</td>
                  <td className="py-3 pr-4">Camina por el pasillo y mira de reojo</td>
                  <td className="py-3">Si gira la cabeza hacia tu stand</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Frena</td>
                  <td className="py-3 pr-4">Baja el paso o se detiene</td>
                  <td className="py-3">Paradas por hora</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Conversa</td>
                  <td className="py-3 pr-4">Cruza más que un saludo con un vendedor</td>
                  <td className="py-3">Conversaciones por hora</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Califica</td>
                  <td className="py-3 pr-4">Cumple tu criterio: cargo, tipo de carga, volumen</td>
                  <td className="py-3">Leads calificados</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Cuesta</td>
                  <td className="py-3 pr-4">—</td>
                  <td className="py-3">Lo que pagaste por la feria dividido por los leads calificados</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>Casi todos los expositores miden solo la última fila, y la miden mal: cuentan tarjetas, no leads. Nicolás puede medir las dos primeras con un papel y una birome. Un vendedor anota un palito cada vez que alguien frena. Otro, cada vez que una charla pasa de dos minutos.</p>
            <p className={body}>Con esos dos números, el diagnóstico cambia. Si frena poca gente, el problema es el pasillo. Si frena gente pero no conversa, el problema es el stand. Si conversa gente pero no califica, el problema es a quién atraés.</p>
            <p className={body}><strong>Nicolás tiene el peor caso: frena poca gente, y la que frena no es la que busca.</strong></p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que Nicolás intenta el segundo día</h2>
            <p className={body}>A la mañana siguiente prueba lo de siempre. Pone un bowl de caramelos en el mostrador. Manda a un vendedor al borde del pasillo a ofrecer folletos. En la pantalla LED pasa el video institucional de tres minutos: la flota, música y una voz en off.</p>
            <p className={body}>Para el mediodía, los caramelos se terminaron. Frenó más gente. Casi nadie se quedó.</p>
            <p className={body}>Cada intento falla por una razón de oficio:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Los caramelos atraen a cualquiera.</strong> El que frena por un caramelo frena por el caramelo. Se lo lleva sin saber qué hacés.</li>
              <li><strong>El vendedor en el pasillo espanta al decisor.</strong> Un gerente de logística camina con agenda. Si alguien le corta el paso con un folleto, acelera.</li>
              <li><strong>El video de tres minutos no se ve desde el pasillo.</strong> El visitante mira la pantalla un instante mientras camina. Ve un camión blanco en una ruta. Podría ser de cualquier empresa del pabellón.</li>
              <li><strong>El audio no existe.</strong> Con el autoelevador, la música de tres stands y la gente hablando, la voz en off no llega ni al mostrador.</li>
            </ul>
            <p className={body}>A las cuatro de la tarde, el stand de al lado sigue frenando gente. Nicolás mira su pantalla. El camión blanco dobla en la misma curva por enésima vez.</p>
            <p className={body}>Si te reconocés en esta escena, en <Link href="/guias/por-que-nadie-se-detiene-en-mi-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">por qué nadie se detiene en mi stand</Link> desarmamos ese diagnóstico paso a paso.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Por qué el decisor pasa de largo</h2>
            <p className={body}>El visitante que Nicolás necesita es, digamos, la jefa de distribución de un laboratorio. Llega a la feria con una lista de stands. Camina rápido entre uno y otro. No viene a mirar camiones. Viene a resolver un problema: un tramo de su cadena de frío donde pierde el control.</p>
            <p className={body}>Ella le va a dar al stand una mirada de reojo. En esa mirada tiene que pasar una sola cosa: que reconozca su problema escrito en la pantalla.</p>
            <p className={body}>Tres condiciones hacen posible esa mirada:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li><strong>Movimiento.</strong> La vista de reojo registra lo que se mueve antes que lo que está quieto. Un afiche o un logo fijo se funden con el resto del pabellón. Un movimiento continuo corta el patrón del que camina mirando el celular.</li>
              <li><strong>Un mensaje legible a 10 metros.</strong> Texto grande, contraste alto, una idea por vez. La jefa de distribución no se acerca para leer. Si no lo lee desde el pasillo, no existe.</li>
              <li><strong>Un mensaje que filtra.</strong> &quot;Soluciones logísticas integrales&quot; le habla a todos, o sea a nadie. &quot;¿Se te corta la cadena de frío en la última milla?&quot; le habla a ella. Y deja pasar al fletero, al estudiante y al proveedor de neumáticos.</li>
            </ol>
            <p className={body}>Esa última condición es la que casi todos olvidan. <strong>Una buena pantalla no atrae a más gente: atrae a la gente correcta y deja pasar al resto.</strong> Para el objetivo de Nicolás, que el estudiante siga de largo es una buena noticia. Los vendedores son tres. Su tiempo es lo más caro del stand.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>La próxima feria, la pantalla hace la primera pregunta</h2>
            <p className={body}>Esa noche, en el hotel, Nicolás anota en el celular lo que la pantalla tendría que decir. No llega a cambiarla para esta feria. La siguiente es en tres meses, y ahí sí.</p>
            <p className={body}>Para esa feria pide un loop de veinte segundos, sin audio, a la resolución exacta de la pantalla del stand. Cuatro escenas, un mensaje por escena, sin cortes a negro:</p>
            <ol className={`${body} flex list-decimal flex-col gap-2 pl-5`}>
              <li>&quot;¿Se te corta la cadena de frío en la última milla?&quot;</li>
              <li>Un camión que avanza y una línea de temperatura que no se mueve.</li>
              <li>&quot;Transporte refrigerado para laboratorios y distribuidoras.&quot;</li>
              <li>&quot;Pedí ver el registro de temperatura de un viaje real.&quot;</li>
            </ol>
            <p className={body}>La última escena le da al visitante una excusa para acercarse. También le da al vendedor la primera frase: &quot;¿Qué tramo te preocupa?&quot;.</p>
            <p className={body}>El primer día de esa feria, la tablet no se llena de golpe. Cambia otra cosa: quién entra. <strong>La gente que frena llega con una pregunta propia.</strong> Los vendedores dejan de cazar en el pasillo y esperan en el borde del stand. El formulario baja a tres preguntas: qué carga mueve, a cuántos destinos y quién firma el contrato.</p>
            <p className={body}>Nicolás sigue contando palitos. Ahora compara paradas, conversaciones y leads calificados contra la feria anterior. Todavía no sabe cuántos contratos va a cerrar. Sabe dónde se le cortaba la cadena.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos loops para pantallas de stands. Lo que le faltaba a Nicolás es lo que hacemos todos los días:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops cortos, de 10 a 30 segundos, que se repiten sin cortes a negro.</li>
              <li>Sin audio: todo se entiende en silencio.</li>
              <li>Un mensaje por escena, con texto grande y contraste alto, legible a 10 metros.</li>
              <li>Entrega a la medida exacta de tu pantalla LED, tótem o videowall.</li>
              <li>Plazos cortos, para que llegues a la feria que ya tenés en el calendario.</li>
            </ul>
            <p className={body}>De vos necesitamos tres cosas: las medidas de la pantalla, a quién querés frenar y qué problema le resolvés. Mirá cómo trabajamos en <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente correcta frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y a quién querés que frene.</p>
            <p className="text-[15px] leading-[1.5] text-plata"><strong><GuideCta slug="como-captar-leads-en-ferias-comerciales" className="font-medium text-azul-claro hover:underline">Hablemos de tu próximo evento</GuideCta></strong>: escribinos a manzo@mansalvadesign.com.</p>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/como-hacer-que-la-gente-se-detenga-en-un-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo hacer que la gente se detenga en un stand, con más criterio de pasillo</Link> · <Link href="/guias/por-que-nadie-se-detiene-en-mi-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">por qué nadie se detiene en mi stand y cómo diagnosticarlo</Link></p>
    </GuideArticle>
  );
}
