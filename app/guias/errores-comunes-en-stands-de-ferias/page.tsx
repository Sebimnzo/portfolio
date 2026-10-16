import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import GuideCta from "@/components/GuideCta";
import { getGuide, guideMetadata } from "@/lib/guides";

// Generada por scripts/publicar-guias.py a partir de
// mansalva-serp-engine/output/articles/errores-comunes-en-stands-de-ferias.md. Editá el Markdown y volvé a correr el script.
const guide = getGuide("errores-comunes-en-stands-de-ferias");

export const metadata: Metadata = guideMetadata(guide);

const h2 = "text-[clamp(1.5rem,3vw,30px)] font-extrabold leading-[1.1]";
const body = "text-[17px] leading-[1.6] text-grafito";

export default function ErroresComunesEnStandsDeFeriasGuide() {
  return (
    <GuideArticle
      guide={guide}
      intro={
        <>
            <p className={body}>El error que más leads le costó a Andrea en su primera feria estaba arriba de su stand, prendido, hablándole a nadie.</p>
            <p className={body}>Pongamos que Andrea es gerenta de marketing de un laboratorio que fabrica vacunas y antiparasitarios para hacienda. Es la segunda tarde de una exposición agroindustrial en Pergamino. Afuera ruge un generador. Adentro del pabellón, los productores caminan en grupos, con la gorra puesta y el celular en la mano.</p>
            <p className={body}>El stand de Andrea tiene lo que le dijeron que tenga: mostrador, folletos, caramelos y una pantalla LED alquilada. Los productores miran de reojo y siguen. Dos stands más allá, un fabricante de mangas para manejo de hacienda tiene gente parada en el pasillo. Andrea no entiende qué tiene él que ella no.</p>
            <p className={body}>Un año después, faltan tres semanas para volver a Pergamino. El laboratorio pagó otra vez el espacio, el armado, los pasajes y los días del equipo. Andrea tiene una planilla de la feria anterior con pocos contactos y casi ninguna venta que pueda atribuirle. Es su segunda feria. No quiere repetir la primera.</p>
        </>
      }
    >
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Rebobinar la feria desde el final</h2>
            <p className={body}>Andrea ya planificó con tiempo, avisó a sus clientes y llevó folletos de sobra. Lo que falló fue otra cosa. Para encontrarlo, recorre la feria anterior al revés: desde el lunes en la oficina hasta el pasillo.</p>
            <p className={body}>La lógica es simple. Todo visitante hace el mismo camino: pasa por el pasillo, frena, conversa, deja sus datos y recibe un llamado. <strong>Cada error corta ese camino en un punto, y todo lo que viene después se pierde.</strong> Un error en la oficina arruina un llamado. Un error en el pasillo arruina la feria entera.</p>
            <p className={body}>Por eso los cuatro errores que siguen van del más barato al más caro. El último es el que nadie anota en la planilla.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El cuarto error: la libreta que el lunes nadie supo leer</h2>
            <p className={body}>El lunes después de la feria, Andrea abre la libreta del stand. Hay tarjetas abrochadas, nombres sueltos, un teléfono sin apellido. Nadie anotó qué establecimiento tiene cada productor, qué problema sanitario le preocupa ni cuándo compra.</p>
            <p className={body}>El equipo de ventas llama a todos igual, y tarde. Para cuando suena el teléfono, el productor ya no se acuerda del stand. Algunos ya le compraron al laboratorio de enfrente.</p>
            <p className={body}>Es el error más barato de los cuatro porque esa gente ya frenó y ya habló. El contacto existe. Se rescata con disciplina:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Tres preguntas en cada tarjeta: qué establecimiento tiene (cría, invernada, tambo), qué problema lo trajo, cuándo decide la compra.</li>
              <li>Una marca de prioridad al lado del nombre, puesta en el stand y no el lunes.</li>
              <li>Un responsable y una fecha para cada llamado, definidos antes de viajar.</li>
            </ul>
            <p className={body}>Si querés armar ese sistema completo, lo desarrollamos en <Link href="/guias/como-captar-leads-en-ferias-comerciales" className="text-azul underline underline-offset-2 hover:text-cobalto">cómo captar leads en ferias comerciales</Link>.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El tercero y el segundo: un stand que desde el pasillo parecía cerrado</h2>
            <p className={body}>Andrea sube un escalón en el recorrido. ¿Por qué hubo tan pocas conversaciones?</p>
            <p className={body}>Mira las fotos del primer día. El mostrador está en el borde del stand, como una mesa de entrada. Detrás, dos vendedores sentados revisan el celular. Para el productor que pasa, la escena dice: acá se atiende con turno. El mostrador funciona como una muralla.</p>
            <p className={body}>El arreglo no cuesta nada. El mostrador va al fondo o al costado. El equipo se para en el borde del pasillo, de frente. La pregunta de apertura nombra algo del visitante: &quot;¿Hacen cría o invernada?&quot; abre más charlas que &quot;¿Te ayudo en algo?&quot;.</p>
            <p className={body}>El segundo error está más arriba, en el cartel. El frente del stand muestra el logo grande y una frase: &quot;Compromiso con la sanidad animal&quot;. Desde diez metros, el productor no sabe si ahí hay un laboratorio, una veterinaria o una cámara del sector. Nada le avisa que adentro está la respuesta al problema de su rodeo.</p>
            <p className={body}>Un cartel de stand tiene una sola tarea: que el visitante entienda en dos pasos qué vendés y para quién. &quot;Vacunas y antiparasitarios para rodeos de cría&quot; hace ese trabajo. &quot;Compromiso con la sanidad animal&quot; lo firma cualquier empresa del pabellón.</p>
            <p className={body}>Andrea anota los dos cambios. Le falta el error más caro. Lo tiene en la misma foto, arriba de todo.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>El primer error: la pantalla que habló sola y después se apagó</h2>
            <p className={body}>El primer día, la pantalla LED pasaba el video institucional del laboratorio. Duraba tres minutos. Arrancaba con la fachada de la planta, seguía con el fundador hablando a cámara y cerraba con el logo sobre fondo negro. Tenía locución y música.</p>
            <p className={body}>En el pabellón no se escuchó una palabra. El generador, los altavoces del remate y las charlas taparon todo. Desde el pasillo, el productor veía a un señor que movía la boca sin sonido. Nadie se queda tres minutos esperando el final de una explicación que no escucha.</p>
            <p className={body}>El segundo día, el stand vecino se quejó del volumen. Alguien bajó el audio. A la tarde, el pendrive falló y la pantalla quedó en negro hasta el cierre. Un rectángulo negro arriba de un stand dice una sola cosa: acá no hay nadie.</p>
            <p className={body}><strong>Es el error más caro porque la pantalla es lo único del stand que trabaja a diez metros.</strong> Ahí el visitante decide si se acerca. El mostrador, el cartel y la libreta dependen de que alguien llegue. Si la pantalla falla, todo lo demás trabaja con el pasillo vacío. Y encima se paga: alquiler, soporte, instalación.</p>
            <p className={body}>El stand de las mangas no tenía nada raro. Su pantalla mostraba una animación corta, sin sonido, que se repetía. Una manga vista desde arriba, una frase, el producto girando, y vuelta a empezar.</p>
            <p className={body}>Funciona por cómo camina la gente en una feria. El visitante avanza mirando de reojo, con la vista periférica atenta a lo que se mueve. Un stand quieto se funde con el resto del pabellón. Un movimiento continuo corta ese patrón y hace girar la cabeza. Después, el texto grande tiene que decir algo antes de que el visitante dé dos pasos más.</p>
            <p className={body}>Lo que Andrea anota para su pantalla:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Un loop de 10 a 30 segundos que se repite sin cortes a negro.</li>
              <li>Sin audio. Todo lo que importa se lee.</li>
              <li>Un mensaje por escena, con texto grande, legible a diez metros.</li>
              <li>Contraste alto, pensado para la luz del pabellón.</li>
              <li>Diseñado a la resolución exacta de la pantalla, según su pixel pitch. El institucional recortado no sirve.</li>
              <li>Una copia de respaldo y alguien del stand que sepa reiniciarla.</li>
            </ul>
            <p className={body}>Si tu stand tiene el mismo síntoma que el de Andrea, en <Link href="/guias/por-que-nadie-se-detiene-en-mi-stand" className="text-azul underline underline-offset-2 hover:text-cobalto">por qué nadie se detiene en mi stand</Link> está el diagnóstico completo del pasillo.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Lo que Andrea cambia para Pergamino</h2>
            <p className={body}>Andrea ordena el plan al revés que la lista: primero lo que más cuesta. Pide un loop para la pantalla con tres escenas: el problema sanitario de esa época del año, el producto y una invitación a entrar. Cambia la frase del cartel. Manda el mostrador al fondo. Imprime tarjetas con las tres preguntas.</p>
            <p className={body}>También decide qué va a medir, para no depender otra vez de la intuición:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                <thead>
                <tr className="border-b-2 border-grafito font-medium text-[11px] uppercase tracking-wide text-gris">
                  <th className="py-3 pr-4 font-normal">Métrica</th>
                  <th className="py-3 pr-4 font-normal">Cómo se cuenta</th>
                  <th className="py-3 font-normal">Qué error delata</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Paradas por hora</td>
                  <td className="py-3 pr-4">Alguien cuenta diez minutos, en distintos horarios</td>
                  <td className="py-3">Pantalla y cartel</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Conversaciones</td>
                  <td className="py-3 pr-4">Charlas con al menos una pregunta del visitante</td>
                  <td className="py-3">Mostrador y equipo</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Leads calificados</td>
                  <td className="py-3 pr-4">Tarjetas con las tres preguntas respondidas</td>
                  <td className="py-3">La libreta</td>
                </tr>
                <tr className="border-b border-linea">
                  <td className="py-3 pr-4 font-semibold">Costo por lead</td>
                  <td className="py-3 pr-4">Lo que costó la feria dividido por los leads calificados</td>
                  <td className="py-3">Todos juntos</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p className={body}>El primer día en Pergamino, el stand no se llena. Pero a media mañana, cuando el pasillo empieza a moverse, un productor frena frente a la pantalla. Lee la frase y entra a preguntar por el plan sanitario del destete. Andrea no tiene que salir a buscarlo. Anota sus tres respuestas en la tarjeta.</p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className={h2}>Qué hacemos en Mansalva</h2>
            <p className={body}>En <Link href="/" className="text-azul underline underline-offset-2 hover:text-cobalto">Mansalva</Link> diseñamos lo que pasa en la pantalla de tu stand. Es el error más caro de la lista y se corrige antes de viajar:</p>
            <ul className={`${body} flex list-disc flex-col gap-2 pl-5`}>
              <li>Loops de 10 a 30 segundos, sin audio, que se repiten sin cortes a negro.</li>
              <li>Un mensaje por escena, con texto que se lee a diez metros y contraste alto.</li>
              <li>Entrega a la medida exacta de tu pantalla LED, videowall o tótem, según su resolución.</li>
              <li>Plazos cortos, pensados para la feria que ya tenés encima.</li>
            </ul>
            <p className={body}>De vos necesitamos tres cosas: el modelo o las medidas de la pantalla, tu logo y qué querés que el visitante entienda al pasar. Mirá cómo trabajamos en <Link href="/videos-para-stands" className="text-azul underline underline-offset-2 hover:text-cobalto">videos para stands</Link> y en <Link href="/contenido-pantallas-led" className="text-azul underline underline-offset-2 hover:text-cobalto">contenido para pantallas LED</Link>.</p>
          </section>
          <section className="flex flex-col gap-4 rounded-[18px] bg-grafito p-6 text-blanco sm:p-8">
            <h2 className={h2}>¿Tenés una feria en el calendario?</h2>
            <p className="text-[15px] leading-[1.5] text-plata">Diseñamos el loop que hace que la gente frene en tu pasillo antes de llegar al stand de al lado. Contanos qué pantalla tenés y para cuándo es la feria.</p>
            <p className="text-[15px] leading-[1.5] text-plata"><GuideCta slug="errores-comunes-en-stands-de-ferias" className="font-medium text-azul-claro hover:underline">Hablemos de tu próximo evento</GuideCta>: manzo@mansalvadesign.com</p>
          </section>
    </GuideArticle>
  );
}
