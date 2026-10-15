// Páginas por servicio. Cada una responde a una búsqueda distinta, así que el
// contenido es propio (medidas, formatos, errores comunes, preguntas) y no una
// copia de la home. Se usan en /[servicio], el sitemap, llms.txt y la home.

export type ServiceSection = { h2: string; paras?: string[]; bullets?: string[] };

export type Service = {
  slug: string;
  label: string; // nombre corto para menús y enlaces
  seoTitle: string;
  description: string; // meta description, hasta 155 caracteres
  h1: string;
  intro: string[];
  specs: { label: string; value: string }[];
  sections: ServiceSection[];
  faq: { q: string; a: string }[];
  projects: string[]; // slugs de lib/data.ts
  parent?: string; // slug del pilar, para la miga de pan
};

export const services: Service[] = [
  {
    slug: "videos-para-stands",
    label: "Videos para stands",
    seoTitle: "Videos para stands de feria: pantallas LED, videowalls y tótems — Mansalva",
    description:
      "Diseñamos y animamos videos para stands de feria a la medida exacta de cada pantalla: LED, videowalls y tótems. Loops silenciosos de 10 a 30 s. Argentina.",
    h1: "Videos para stands de feria",
    intro: [
      "En una feria nadie se sienta a mirar un video. La gente pasa caminando, con ruido alrededor y a varios metros de la pantalla. Un video de stand tiene que frenar a alguien en un par de segundos y decir lo importante antes de que siga de largo.",
      "Por eso no adaptamos un video institucional: diseñamos para el soporte. Primero las medidas de cada pantalla, la distancia desde la que se va a mirar y qué tiene que entender alguien que pasa; después animamos.",
    ],
    specs: [
      { label: "Duración", value: "Loops de 10 a 30 s" },
      { label: "Sonido", value: "Pensado para verse en silencio" },
      { label: "Resolución", value: "La exacta de cada pantalla" },
      { label: "Entrega", value: "MP4 H.264 / H.265 o ProRes" },
    ],
    sections: [
      {
        h2: "Qué hace distinto a un video para stand",
        bullets: [
          "Se mira de pie y de pasada: una idea por pieza, tipografía grande y la marca siempre a la vista.",
          "Se mira sin sonido: el mensaje se entiende con texto y movimiento. Si hay zona de charlas, hacemos una versión con audio aparte.",
          "Se repite todo el día: el último cuadro empalma con el primero para que el loop no se note.",
          "Tiene la medida de la pantalla, no la de YouTube: una pantalla LED de 5 × 2 m con pitch 2,5 es un lienzo de 2000 × 800 px, no 16:9.",
        ],
      },
      {
        h2: "Para qué soportes trabajamos",
        paras: [
          "Pantallas LED de cualquier tamaño y pitch, videowalls de monitores, tótems verticales y combinaciones de varias pantallas en el mismo stand. Cuando hay más de un soporte, pensamos las piezas juntas para que el stand se vea como una sola cosa y no como varias pantallas compitiendo.",
          "Si el producto no entra en el stand (una máquina, un proceso industrial, algo que pasa por dentro), lo mostramos con animación 3D.",
        ],
      },
      {
        h2: "Cómo trabajamos",
        bullets: [
          "Brief: qué feria, qué público y qué tiene que pasar cuando alguien mira la pantalla.",
          "Mapa de píxeles: se lo pedimos al proveedor de la pantalla para animar a la medida real.",
          "Guion y cuadros clave: definimos la idea y el recorrido del loop antes de animar.",
          "Animación y revisiones sobre la pieza en movimiento.",
          "Entrega: un archivo por salida o un lienzo único, con el códec y los cuadros por segundo que pida el reproductor.",
        ],
      },
      {
        h2: "Qué necesitamos de vos",
        bullets: [
          "Fecha de la feria y fecha en la que el proveedor necesita los archivos.",
          "Medidas y pitch de cada pantalla, o el contacto del proveedor.",
          "Logo, manual de marca y el material que tengas: fotos, renders, piezas anteriores.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Con cuánta anticipación conviene empezar?",
        a: "Cuanto antes, mejor: el proveedor de la pantalla suele pedir los archivos unos días antes de la feria para probarlos. Lo ideal es arrancar apenas esté definido el stand y las medidas de las pantallas.",
      },
      {
        q: "¿Sirve el video institucional que ya tenemos?",
        a: "Se puede reutilizar material, pero casi nunca el video tal cual: suele durar más, depende del audio y está en 16:9. Lo reeditamos y lo animamos de nuevo para la medida y la distancia de lectura del stand.",
      },
    ],
    projects: [
      "cocchiola-insumos",
      "grupo-briones",
      "goodly-fit-crm",
      "goodly-fit-app",
      "goodly-fit-anuncios",
    ],
  },
  {
    slug: "contenido-pantallas-led",
    parent: "videos-para-stands",
    label: "Pantallas LED",
    seoTitle: "Contenido para pantallas LED de stands y eventos — Mansalva",
    description:
      "Animamos contenido para pantallas LED a la resolución exacta según tamaño y pixel pitch, sin reescalar. Para stands, eventos y escenarios. Argentina.",
    h1: "Contenido para pantallas LED",
    intro: [
      "Una pantalla LED no tiene una resolución estándar: depende de cuánto mide y de su pixel pitch. Si el video no se anima a esa medida, el procesador lo reescala y los textos finos se ven borrosos, se cortan o quedan deformados.",
      "Animamos cada pieza al píxel de la pantalla real, con el mapa de píxeles del proveedor, y diseñamos pensando en desde dónde la va a mirar el público.",
    ],
    specs: [
      { label: "Resolución", value: "Medida en mm ÷ pitch" },
      { label: "Ejemplo", value: "5 × 2 m, P2,5 = 2000 × 800 px" },
      { label: "Cuadros por segundo", value: "Los que pida el procesador" },
      { label: "Formatos", value: "MP4 H.264 / H.265, ProRes" },
    ],
    sections: [
      {
        h2: "Diseñar para LED no es diseñar para un monitor",
        bullets: [
          "Trazos con cuerpo: una línea de 1 px puede desaparecer en una pantalla de pitch grande. Usamos tipografías y líneas con grosor suficiente para la distancia de lectura.",
          "Negro es pantalla apagada: los fondos oscuros hacen que la pantalla se integre al stand y que los elementos de color resalten.",
          "Cuidado con las rayas finas: los patrones de líneas muy juntas generan moiré cuando la gente filma la pantalla con el celular.",
          "Proporciones raras: 5:2, 3:1 o 32:9 son comunes. La composición se arma para ese formato desde el principio, no se recorta un 16:9.",
        ],
      },
      {
        h2: "Pitch y distancia de visión",
        paras: [
          "Como regla práctica, la distancia mínima de visión en metros es parecida al pitch en milímetros: una P2,5 se ve bien desde unos 2,5 m. Si el público pasa más cerca, se ven los puntos; si pasa muy lejos, los textos chicos no se leen. Ese dato define el tamaño de la tipografía y cuánto texto entra en cada pieza.",
          "Para calcular la resolución de tu pantalla podés usar nuestra calculadora en la guía de resolución de pantallas LED.",
        ],
      },
      {
        h2: "Qué le pedimos al proveedor",
        bullets: [
          "Mapa de píxeles: la resolución real, que depende de los gabinetes con los que se arma la pantalla.",
          "Procesador y reproductor: códec, cuadros por segundo y si acepta un archivo o varios.",
          "Cuándo necesita los archivos para cargarlos y probarlos antes de la feria.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué pasa si no sé el pitch de la pantalla?",
        a: "Lo averiguamos con el proveedor o la empresa que alquila la pantalla: es un dato que siempre tienen. Con las medidas y el pitch calculamos la resolución; con el mapa de píxeles la confirmamos.",
      },
      {
        q: "¿Pueden hacer contenido para una pantalla LED de exterior?",
        a: "Sí. En exterior el pitch suele ser más grande y la gente mira desde más lejos, así que el diseño usa menos elementos, más contraste y textos todavía más grandes.",
      },
    ],
    projects: ["cocchiola-insumos"],
  },
  {
    slug: "animacion-videowall",
    parent: "videos-para-stands",
    label: "Videowalls",
    seoTitle: "Animación para videowall: contenido para mosaicos de monitores — Mansalva",
    description:
      "Animación para videowall: un lienzo único repartido entre los monitores, sin textos cortados por los marcos. Entrega por salida o lienzo completo.",
    h1: "Animación para videowall",
    intro: [
      "Un videowall es un mosaico de monitores que funciona como una sola pantalla grande, con un detalle que lo cambia todo: los marcos entre monitores. Un texto o una cara que cae justo en la unión queda cortado.",
      "Animamos un único lienzo con la resolución total del videowall, diseñado sabiendo dónde están los marcos, y después lo repartimos entre los monitores.",
    ],
    specs: [
      { label: "Lienzo", value: "Monitores × resolución de cada uno" },
      { label: "Ejemplo", value: "3 × 2 monitores Full HD = 5760 × 2160 px" },
      { label: "Marcos", value: "Nada importante cruza una unión" },
      { label: "Entrega", value: "Archivo por salida o lienzo único" },
    ],
    sections: [
      {
        h2: "Cómo se arma el lienzo",
        paras: [
          "La resolución total sale de multiplicar la cantidad de monitores por la resolución de cada uno: 2 × 2 monitores Full HD forman un lienzo de 3840 × 2160 px; 3 × 2, uno de 5760 × 2160 px. También hay videowalls verticales o con monitores girados, y la cuenta es la misma.",
          "Cuando el controlador lo permite, se puede compensar el ancho de los marcos: el lienzo incluye los píxeles que quedarían ocultos detrás de cada marco, así una línea que cruza dos monitores sigue recta.",
        ],
      },
      {
        h2: "Usar el mosaico a favor",
        bullets: [
          "Una imagen grande que ocupa todo el videowall, con los textos dentro de un solo monitor.",
          "Cada monitor con su propia pieza, sincronizadas para que en ciertos momentos se unan en una sola.",
          "Elementos que viajan de un monitor a otro: el movimiento hace que los marcos se noten menos.",
        ],
      },
      {
        h2: "Qué necesitamos saber",
        bullets: [
          "Cuántos monitores, en qué disposición y de qué resolución.",
          "Si el controlador o reproductor reparte un lienzo único o necesita un archivo por salida.",
          "El ancho de los marcos, si se quiere compensar.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Se puede usar un video común en un videowall?",
        a: "Se puede estirar, pero se nota: queda pixelado, deformado si la proporción no coincide y con textos partidos por los marcos. Animarlo para el mosaico evita las tres cosas.",
      },
      {
        q: "¿Cómo se entregan los archivos?",
        a: "Según lo que pida el controlador: un archivo por salida (uno por monitor o por grupo de monitores) o un único lienzo con el mapa completo. Siempre a la resolución y los cuadros por segundo del equipo.",
      },
    ],
    projects: [],
  },
  {
    slug: "totems-digitales",
    parent: "videos-para-stands",
    label: "Tótems digitales",
    seoTitle: "Contenido para tótems digitales verticales (9:16) — Mansalva",
    description:
      "Animación para tótems digitales verticales en 1080 × 1920 px: jerarquía clara, tipografía grande y la marca a la vista. Para stands, locales y eventos.",
    h1: "Contenido para tótems digitales",
    intro: [
      "Un tótem se mira de cerca y de pie, a uno o dos metros. Es vertical, como un celular gigante, y suele estar en una entrada, al lado de un mostrador o en el pasillo de un stand.",
      "Diseñamos para esa distancia y esa altura: la información importante a la altura de los ojos, poca cantidad de texto y una jerarquía que se entienda de un vistazo.",
    ],
    specs: [
      { label: "Formato", value: "Vertical 9:16" },
      { label: "Resolución", value: "1080 × 1920 px (o 2160 × 3840 en 4K)" },
      { label: "Duración", value: "Loops de 10 a 30 s" },
      { label: "Sonido", value: "Sin audio" },
    ],
    sections: [
      {
        h2: "Cómo se diseña un tótem",
        bullets: [
          "La franja de arriba y el centro son lo que se ve aunque haya gente delante: ahí va el mensaje y la marca.",
          "La parte de abajo suele quedar tapada por personas o muebles: nada importante cerca del borde inferior.",
          "Una idea por pieza. Si hay más para contar, varias piezas cortas que rotan.",
          "Si lleva un código QR, que quede fijo varios segundos, con buen contraste y a una altura cómoda para escanearlo.",
        ],
      },
      {
        h2: "Tótems en stands y en locales",
        paras: [
          "En una feria el tótem compite con todo lo que hay alrededor, así que el movimiento tiene que llamar la atención sin volverse ruido. En un local o una recepción se mira con más calma y se puede contar un poco más: promociones, horarios, un producto por vez.",
          "El mismo contenido vertical se adapta fácil a historias y reels, así que la pieza del tótem también sirve para redes.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué resolución tiene un tótem digital?",
        a: "La mayoría usa pantallas Full HD en vertical, es decir 1080 × 1920 px. Algunos modelos son 4K (2160 × 3840 px). Lo confirmamos con la ficha del equipo o con quien lo alquila.",
      },
      {
        q: "¿Sirve un video horizontal girado?",
        a: "No: queda chico, con franjas negras o recortado. Un tótem necesita una composición pensada en vertical desde el principio.",
      },
    ],
    projects: ["goodly-fit-crm", "goodly-fit-app", "goodly-fit-anuncios"],
  },
  {
    slug: "animacion-3d-producto",
    parent: "videos-para-stands",
    label: "Animación 3D",
    seoTitle: "Animación 3D de productos, máquinas y procesos para stands — Mansalva",
    description:
      "Animación 3D para mostrar lo que no entra en el stand: un producto por dentro, una máquina funcionando o un proceso completo en pocos segundos.",
    h1: "Animación 3D de productos y procesos",
    intro: [
      "Hay cosas que no se pueden llevar a una feria: una máquina de varias toneladas, una planta, un proceso que tarda horas o un producto cuyo valor está por dentro. La animación 3D las muestra en pocos segundos y desde ángulos que en la realidad no existen.",
      "La usamos para stands, presentaciones comerciales y lanzamientos: un loop para la pantalla grande y, del mismo modelo, imágenes fijas para impresos y la web.",
    ],
    specs: [
      { label: "Qué mostramos", value: "Productos, máquinas y procesos" },
      { label: "Recursos", value: "Cortes, despieces, giros, recorridos" },
      { label: "Punto de partida", value: "Archivos CAD o fotos y planos" },
      { label: "Entrega", value: "Loops para pantalla + imágenes fijas" },
    ],
    sections: [
      {
        h2: "Recursos que usamos",
        bullets: [
          "Corte: abrimos el producto para mostrar lo que tiene adentro.",
          "Despiece: las partes se separan y se vuelven a armar, ideal para explicar cómo está hecho.",
          "Giro de producto: una vuelta completa, limpia, para pantallas y redes.",
          "Proceso: de la materia prima al producto terminado, o una máquina trabajando, en pocos segundos.",
        ],
      },
      {
        h2: "De qué partimos",
        paras: [
          "Si tu empresa tiene los modelos de ingeniería (archivos CAD o STEP), los adaptamos para animar y se ahorra el modelado. Si no, modelamos a partir de fotos, planos y medidas.",
          "El resultado se integra con el resto del stand: misma marca, mismos colores y la medida exacta de la pantalla donde se va a ver.",
        ],
      },
      {
        h2: "Cómo se ve en el stand",
        paras: [
          "En una pantalla de feria la animación 3D funciona como un loop corto: el producto aparece, se abre o se pone en marcha, muestra lo que lo hace distinto y vuelve al principio sin que se note el corte. Cada momento lleva un texto breve que se lee de lejos, porque casi nadie va a escuchar una explicación.",
          "Si en el stand también está el producto real, la animación lo complementa: muestra lo que el visitante no puede ver a simple vista, como el interior, el funcionamiento o el proceso de fabricación, y le da al equipo comercial un punto de partida para la charla.",
        ],
      },
      {
        h2: "Qué necesitamos de vos",
        bullets: [
          "Los archivos de ingeniería si existen, o fotos, planos y medidas del producto.",
          "Qué querés que el público entienda: la ventaja principal, no la ficha técnica completa.",
          "La pantalla donde se va a ver (medidas y pitch) y la fecha de la feria.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Necesitan el producto físico para modelarlo?",
        a: "No hace falta. Con archivos de ingeniería es lo más rápido y preciso; si no los hay, alcanzan buenas fotos desde varios ángulos, planos y medidas.",
      },
      {
        q: "¿Se puede usar la animación fuera de la feria?",
        a: "Sí: del mismo modelo salen versiones para la web, redes, presentaciones comerciales e imágenes fijas para catálogos.",
      },
    ],
    projects: ["hoken-industrial-mockup"],
  },
  {
    slug: "motion-graphics",
    label: "Motion graphics",
    seoTitle: "Productora de motion graphics: logos animados, reels y VSL — Mansalva",
    description:
      "Estudio de animación y motion graphics en Argentina: logos animados, videos para redes, videos de venta (VSL) para landings y animación web.",
    h1: "Motion graphics para marcas",
    intro: [
      "Además de stands, hacemos motion graphics para marcas, startups y profesionales: logos animados, videos para redes, videos de venta (VSL) para landings y animación para la web.",
      "La lógica es la misma que en una feria: decidir qué decir, dónde poner el foco y qué dejar afuera. El movimiento está para que el mensaje se entienda y se recuerde, no para adornar.",
    ],
    specs: [
      { label: "Logos animados", value: "Identidad en movimiento" },
      { label: "Video para redes", value: "Reels, historias y piezas cortas" },
      { label: "VSL", value: "Videos de venta para landings" },
      { label: "Web", value: "Animación de interfaz y producto" },
    ],
    sections: [
      {
        h2: "Qué hacemos",
        bullets: [
          "Logos animados: tu logo en movimiento, en versiones para cerrar videos, redes y presentaciones.",
          "Video para redes: edición de reels y videos cortos en vertical, con subtítulos y gráficos.",
          "Videos de venta (VSL): un video que presenta la oferta en la landing y lleva a escribir o comprar.",
          "Animación web: animaciones para el sitio que ayudan a entender el producto sin distraer.",
        ],
      },
      {
        h2: "Cómo trabajamos",
        paras: [
          "Arrancamos por el objetivo de la pieza y dónde se va a ver. Después definimos el guion o la estructura, el estilo visual y recién entonces animamos. Cada entrega sale en los formatos que necesita cada plataforma: vertical, cuadrado u horizontal.",
        ],
      },
      {
        h2: "Logos animados",
        paras: [
          "Un logo animado no es un logo que da vueltas: es un gesto que sale de la propia identidad. Estudiamos las formas del logo y buscamos un movimiento que lo explique, sea una línea que se dibuja, piezas que encajan o una letra que marca el ritmo.",
          "Lo entregamos en las versiones que se usan de verdad: una apertura y un cierre para videos, una versión corta para redes, una con fondo transparente para edición y un loop para pantallas.",
        ],
      },
      {
        h2: "Video para redes y VSL",
        paras: [
          "En redes el primer segundo decide si alguien se queda. Editamos con ritmo, subtítulos legibles en el celular y gráficos que refuerzan lo que se dice, sin tapar a la persona que habla.",
          "En un VSL para una landing el objetivo es otro: que la propuesta se entienda y la persona avance. Ordenamos el mensaje en problema, solución, prueba y llamado a la acción, y usamos el movimiento para guiar la atención en cada paso.",
        ],
      },
      {
        h2: "Qué necesitamos de vos",
        bullets: [
          "El objetivo de la pieza y dónde se va a publicar.",
          "Logo, manual de marca o referencias visuales que te gusten.",
          "El material que tengas: grabaciones, guion, capturas del producto o la landing.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Trabajan con marcas de fuera de Argentina?",
        a: "Sí, trabajamos a distancia: la comunicación y las revisiones son online, así que el lugar no es un problema.",
      },
    ],
    projects: [
      "pedisy-presentacion",
      "maraldi-logo-animation",
      "komasa-logo-animation",
      "magnetic-impulsa-saas-agency",
      "yajaira-podcast-trailer",
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
