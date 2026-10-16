import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/estrategias-para-stands-con-poco-espacio.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("estrategias-para-stands-con-poco-espacio");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function EstrategiasParaStandsConPocoEspacioGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>El stand más chico del pabellón puede frenar más gente que el de 100 metros de enfrente, y no tiene nada que ver con el mobiliario.</p>
            <p className={body}>Pongamos que Sofía fundó una empresa de software de gestión para pymes. Facturación, stock, sueldos: lo que un dueño de comercio odia hacer a mano. Es lunes, falta una semana para una feria tecnológica en Buenos Aires y le acaban de mandar el plano del pabellón.</p>
            <p className={body}>Su stand es un cuadrado de tres por tres. A la izquierda, una empresa de telecomunicaciones con 100 metros cuadrados. A la derecha, un proveedor de nube con otros 100. Sofía mira el plano y ve su stand como una caja de fósforos entre dos edificios.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Nueve metros entre dos gigantes</h2>
            <p className={body}>Sofía hace la cuenta que hace todo el que paga un stand. El espacio, el armado, los pasajes del equipo, tres días sin vender en la oficina. Para una empresa de su tamaño, es plata que duele.</p>
            <p className={body}>Lo que está en juego es concreto. Sofía no necesita fama en la feria. Necesita conversaciones con dueños de pymes que hoy llevan la gestión en una planilla. <strong>Cada visitante que pasa de largo es un lead que se lleva el stand de al lado.</strong></p>
            <p className={body}>Y el problema tiene una forma precisa. Los dos vecinos van a tener videowalls, luces, barras de café y gente de sobra. Sofía va a tener nueve metros cuadrados, dos personas y una notebook.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo primero que intenta Sofía: llenar el stand</h2>
            <p className={body}>El instinto dice que un stand chico tiene que aprovechar cada centímetro. Sofía encarga un mostrador con el logo. Suma dos banquetas, un exhibidor de folletos, una planta y un banner enrollable con las doce funciones del sistema.</p>
            <p className={body}>Pone la notebook sobre el mostrador con la demo abierta. Compra caramelos con el logo. En el render, el stand se ve completo.</p>
            <p className={body}>El primer día de feria, a las once, el pabellón zumba. La gente camina mirando el celular o buscando un número de stand. Nadie frena. Los folletos siguen en el exhibidor. Los caramelos se van de a uno, sin conversación.</p>
            <p className={body}>Lo que pasó tiene explicación de oficio:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Todo está a la altura de la cintura.</strong> El mostrador, las banquetas y la notebook quedan tapados por la gente que camina. Desde el pasillo, el stand de Sofía es una fila de cabezas.</li>
              <li><strong>Lleno parece chico.</strong> Nueve metros con mueble, planta, banner y exhibidor se leen como un depósito. El visitante no ve dónde pararse.</li>
              <li><strong>El banner habla para quien ya frenó.</strong> Doce funciones en letra mediana se leen a un metro. El visitante pasa a varios metros y mira de reojo.</li>
              <li><strong>El software no se ve de lejos.</strong> La demo en la notebook es el mejor argumento de Sofía. A más de un metro es una planilla gris.</li>
            </ul>
            <p className={body}>Más mobiliario no resuelve un problema de visibilidad. Lo empeora.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué mira un visitante que camina por el pasillo</h2>
            <p className={body}>Un visitante de feria no recorre stands. Recorre el pasillo. Camina, esquiva gente y mira en diagonal. Decide si frena en un instante, antes de llegar al frente del stand.</p>
            <p className={body}>En ese recorrido, la mirada se apoya en dos cosas. Lo que está por encima de las cabezas, porque es lo único que no tapa la multitud. Y lo que se mueve, porque el ojo detecta movimiento antes que forma o texto. Un pasillo lleno de paneles quietos se vuelve fondo. Algo que cambia corta el patrón y obliga a mirar.</p>
            <p className={body}>Los vecinos de Sofía tienen esas dos cosas. Altura y pantallas. Pero muchas veces las desperdician: pasan el video institucional de tres minutos, con locutor y música, en un pabellón donde el audio no se escucha. El visitante ve un plano de oficina sin sonido y sigue.</p>
            <p className={body}>Ahí está la ventaja de Sofía. No puede competir en metros. Sí puede competir en lo que el visitante ve en ese instante. Si querés el diagnóstico completo de por qué un stand no frena gente, está en <Link href="/guias/por-que-nadie-se-detiene-en-mi-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">por qué nadie se detiene en mi stand</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Las cuatro de la tarde y el pasillo pasa de largo</h2>
            <p className={body}>El día avanza. A las cuatro, el stand de telecomunicaciones tiene cola en la barra de café. Sofía consiguió algunas conversaciones, casi todas con conocidos que la fueron a saludar.</p>
            <p className={body}>El segundo día intenta otra cosa. Alquila un tótem vertical y le carga el video institucional de la empresa, que es horizontal. El tótem lo recorta. El logo queda cortado a la mitad. El texto, que estaba pensado para una pantalla de escritorio, es ilegible desde el pasillo. Una pantalla vertical no es una horizontal recortada.</p>
            <p className={body}>Esa noche, Sofía mira los números que importan en una feria. No los visitantes del pabellón, que no son suyos. Estos cuatro:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Métrica</th>
                  <th className="py-3 pr-4 font-normal">Qué mide</th>
                  <th className="py-3 font-normal">Qué le dice a Sofía</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Paradas</td>
                  <td className="py-3 pr-4">Visitantes que frenan frente al stand</td>
                  <td className="py-3">Si el stand se ve desde el pasillo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Conversaciones</td>
                  <td className="py-3 pr-4">Paradas que terminan en una charla</td>
                  <td className="py-3">Si el mensaje dice algo útil para quien frenó</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Leads calificados</td>
                  <td className="py-3 pr-4">Conversaciones con alguien que puede comprar</td>
                  <td className="py-3">Si el mensaje filtra al público correcto</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Costo por lead</td>
                  <td className="py-3 pr-4">Costo total del stand dividido por leads calificados</td>
                  <td className="py-3">Si la feria valió la plata</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>El problema de Sofía está en la primera fila. Si nadie frena, el resto no existe. Un stand chico cuesta menos. Pero si deja pocos leads calificados, cada lead sale caro igual.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Altura y movimiento: lo que Sofía cambia para la próxima feria</h2>
            <p className={body}>El último día, con el stand desarmado, Sofía arma el plan para la próxima feria. Es corto.</p>
            <p className={body}><strong>Libera el piso.</strong> Saca el mostrador grande, el exhibidor y la planta. Deja una mesa alta chica para la demo y espacio libre al frente. Un visitante necesita ver dónde pararse.</p>
            <p className={body}><strong>Sube el mensaje.</strong> Pone un tótem vertical en la esquina que da al pasillo. Ocupa medio metro cuadrado y se ve desde todo el pasillo, por encima de las cabezas.</p>
            <p className={body}><strong>Le da un solo mensaje y en movimiento.</strong> Nada de doce funciones. Una frase para el dueño de una pyme: el problema que el sistema resuelve. El resto lo cuenta Sofía en la conversación.</p>
            <p className={body}><strong>Diseña para la pantalla, no para la sala de reuniones.</strong> El contenido del tótem se hace vertical, a la resolución exacta de esa pantalla. Las medidas cambian según el modelo. Están explicadas en <Link href="/guias/medidas-de-video-para-totem-vertical" className="text-azul underline underline-offset-2 hover:text-cobalto">medidas de video para tótem vertical</Link>.</p>
            <p className={body}>La diferencia entre los dos stands de Sofía:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Primera feria</th>
                  <th className="py-3 font-normal">Próxima feria</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Mobiliario a la altura de la cintura</td>
                  <td className="py-3">Un tótem que se ve por encima de las cabezas</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Doce funciones en un banner</td>
                  <td className="py-3">Un mensaje por escena</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Video horizontal recortado, con audio</td>
                  <td className="py-3">Loop vertical, sin audio, a la medida del tótem</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Demo en notebook como gancho</td>
                  <td className="py-3">Demo como segundo paso, para quien ya frenó</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Piso lleno</td>
                  <td className="py-3">Espacio libre para frenar</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>El loop del tótem hace un trabajo preciso. Muestra el dolor en la primera escena: la planilla que no cierra a fin de mes. Muestra el resultado en la segunda. Termina en el nombre de la empresa y vuelve a empezar sin cortar a negro. Dura entre 10 y 30 segundos, porque nadie lo mira entero. Cada escena tiene que funcionar sola.</p>
            <p className={body}>Sofía no les gana metros a los vecinos. Les gana la mirada en el instante que el visitante le da a cada stand.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos loops de video para pantallas de stands. Para un stand chico, casi siempre es un tótem o una pantalla LED angosta. Esto es lo que hacemos:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li><strong>Loops de 10 a 30 segundos</strong> que se repiten sin cortes a negro, para que el visitante entre en cualquier momento.</li>
              <li><strong>Sin audio, con texto grande</strong> y contraste alto, legible a 10 metros en un pabellón ruidoso.</li>
              <li><strong>Un mensaje por escena</strong>, pensado para quien camina, no para quien ya está en el stand.</li>
              <li><strong>Entrega a la medida exacta de tu pantalla</strong>, vertical si es un tótem, a su resolución real.</li>
              <li><strong>Plazos cortos</strong>, porque la feria siempre está más cerca de lo que parece.</li>
            </ul>
            <p className={body}>Si tu stand tiene poco piso y una esquina libre, mirá cómo trabajamos los <Link href="/totems-digitales" className="text-azul underline underline-offset-2 hover:text-cobalto">loops para tótems digitales</Link>. Necesitamos tres cosas: el modelo de pantalla, el mensaje que querés que se lleve el visitante y la fecha de la feria.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Aunque tengas nueve metros y tus vecinos tengan cien. Contanos qué pantalla tenés y para cuándo la necesitás.</p>
            <GuideCta
              slug="estrategias-para-stands-con-poco-espacio"
              className="inline-flex min-h-12 items-center gap-4 self-start text-sm font-medium text-azul-claro hover:underline"
            >
              <span aria-hidden className="h-[3px] w-8 bg-azul-claro" />
              Hablemos de tu próximo evento
            </GuideCta>
          </section>
          <p className="text-[15px] leading-[1.5] text-gris">Seguí leyendo: <Link href="/guias/por-que-nadie-se-detiene-en-mi-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">por qué nadie se detiene en mi stand</Link> · <Link href="/guias/medidas-de-video-para-totem-vertical" className="text-azul underline underline-offset-2 hover:text-cobalto">medidas de video para tótem vertical</Link></p>
    </GuideArticle>
  );
}
