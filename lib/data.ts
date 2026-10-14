export const site = {
  name: "Mansalva",
  url: "https://www.mansalvadesign.com",
  domain: "mansalvadesign.com",
  role: "Estudio de motion graphics",
  // Título grande del inicio (gráfico). El <h1> con la búsqueda es heroTitle.
  claim: "Que tu stand se vea primero.",
  heroLabel: "Motion con intención / Argentina",
  // Es el <h1> de la página: la búsqueda principal del sitio.
  heroTitle: "Estudio de diseño especializado en videos para stands de feria.",
  tagline:
    "Damos movimiento a marcas que necesitan hacerse notar. Ante clientes, inversores y público de feria.",
  seoTitle: "Mansalva — Videos para stands de feria y motion graphics",
  // Meta description: hasta 155 caracteres para que Google no la corte.
  description:
    "Estudio de diseño especializado en videos para stands de feria: pantallas LED, videowalls, tótems digitales, loops silenciosos y animación 3D. Argentina.",
  // Fecha del último cambio de contenido (lastmod del sitemap). Actualizarla
  // a mano solo cuando cambia el contenido, no en cada deploy.
  updated: "2026-10-14",
  worksTitle: "El trabajo habla. Y se mueve.",
  // Bajadas de sección: el título es de marca, la bajada lleva la búsqueda.
  worksIntro:
    "Videos para stands de feria, pantallas LED y videowalls, contenido para redes y logos animados.",
  studioLabel: "Mansalva / Desde Argentina",
  studioTitle: "No movemos cosas porque sí.",
  studioText:
    "Somos un estudio de animación y motion graphics. Pensamos el movimiento como una decisión de diseño: qué decir, dónde poner el foco y qué dejar afuera.",
  purpose:
    "Que las empresas comuniquen con la misma precisión con la que trabajan, y que se las recuerde por cómo se mueven.",
  services: [
    {
      name: "Stands de feria",
      text: "Piezas para pantallas y stands que se hacen notar entre el ruido.",
    },
    {
      name: "Animación web",
      text: "Movimiento que acompaña la experiencia, sin distraer del mensaje.",
    },
    {
      name: "Video para redes",
      text: "Edición y motion para contar lo importante antes del próximo scroll.",
    },
    {
      name: "VSL para landings",
      text: "Una narrativa clara para presentar tu propuesta y llevarla a la acción.",
    },
    {
      name: "Logos animados",
      text: "El gesto justo para que tu identidad también se reconozca en movimiento.",
    },
  ],
  personality: [
    {
      name: "Rigurosa",
      text: "Plazos claros, procesos ordenados y cada fotograma con un motivo.",
    },
    {
      name: "Irreverente",
      text: "Rompemos la rutina corporativa sin perder la seriedad.",
    },
    {
      name: "Elegante",
      text: "Pocos elementos, bien elegidos y bien resueltos.",
    },
  ],
  standsLabel: "Pantallas / Tótems / Videowalls",
  standsTitle: "Videos para stands de feria, al píxel de cada pantalla.",
  standsText:
    "Cada soporte tiene su medida, su distancia de lectura y su ruido alrededor. Diseñamos para esas condiciones antes de animar.",
  // `shape` elige el dibujo que muestra la proporción real de cada soporte.
  standFormats: [
    {
      shape: "led",
      name: "Pantallas LED",
      spec: "Resolución según tamaño y pixel pitch",
      text: "Una pantalla LED no tiene una resolución estándar. Una de 5 × 2 m con pitch de 2,5 mm muestra 2000 × 800 px: animamos a esa medida exacta, sin reescalar.",
    },
    {
      shape: "videowall",
      name: "Videowalls",
      spec: "Mosaico de monitores con marcos",
      text: "Repartimos la pieza entre los monitores y cuidamos que ningún texto ni rostro quede cortado por la unión entre pantallas.",
    },
    {
      shape: "totem",
      name: "Tótems digitales",
      spec: "Vertical 9:16 · 1080 × 1920 px",
      text: "Se miran de cerca y de pie: jerarquía clara, tipografía grande y la marca siempre a la vista.",
    },
    {
      shape: "loop",
      name: "Loops silenciosos",
      spec: "10 a 30 s · sin audio · corte invisible",
      text: "En una feria casi nadie escucha: el mensaje se entiende sin sonido y el último cuadro empalma con el primero para que el loop no se note.",
    },
    {
      shape: "cube",
      name: "Animación 3D",
      spec: "Productos, procesos y maquinaria",
      text: "Mostramos lo que no entra en el stand: un producto por dentro, una máquina funcionando o un proceso completo en pocos segundos.",
    },
  ],
  faqTitle: "Preguntas frecuentes sobre videos para stands",
  // También se publican como datos estructurados FAQPage (ver StructuredData).
  faq: [
    {
      q: "¿Qué resolución tiene que tener un video para una pantalla LED de stand?",
      a: "La que resulta de dividir el ancho y el alto de la pantalla, en milímetros, por su pixel pitch. Una pantalla de 5 × 2 m con pitch de 2,5 mm tiene 2000 × 800 px. Antes de animar le pedimos el mapa de píxeles al proveedor de la pantalla y trabajamos a esa medida exacta.",
    },
    {
      q: "¿Qué es el pixel pitch y por qué importa?",
      a: "Es la distancia en milímetros entre los centros de dos LEDs vecinos. Cuanto más chico, más resolución por metro y más cerca se puede mirar sin ver los puntos: como referencia, la distancia mínima de visión en metros es parecida al pitch en milímetros (P2,5 se ve bien desde unos 2,5 m).",
    },
    {
      q: "¿Cuánto tiene que durar un video para un stand de feria?",
      a: "Entre 10 y 30 segundos, en loop. Es lo que suele mirar alguien que pasa caminando frente al stand, así que el mensaje completo tiene que entrar en ese tiempo. Si hay más para contar, armamos varias piezas cortas que rotan.",
    },
    {
      q: "¿Cómo se anima un video para un videowall?",
      a: "Se anima un único lienzo con la resolución total del videowall y después se reparte entre los monitores. Un videowall de 3 × 2 monitores Full HD, por ejemplo, es un lienzo de 5760 × 2160 px. Cuidamos que ningún texto ni rostro quede cortado por los marcos entre pantallas y entregamos un archivo por salida o el lienzo completo, según lo que pida el procesador.",
    },
    {
      q: "¿Los videos para stands llevan sonido?",
      a: "Por lo general no. El ruido de una feria tapa el audio, así que diseñamos para que todo se entienda en silencio: texto en pantalla, alto contraste y pocas ideas por pieza. Si el stand tiene una zona de charlas o demos, hacemos una versión con sonido aparte.",
    },
    {
      q: "¿En qué formato entregan los archivos?",
      a: "En MP4 (H.264 o H.265) a la resolución exacta de cada pantalla y a la cantidad de cuadros por segundo que pida el reproductor. Si el procesador de la pantalla necesita otro códec, como ProRes, lo entregamos así. Para videowalls y stands con varias pantallas enviamos un archivo por salida o un único lienzo con el mapa completo.",
    },
  ],
  contactHeadline: "Hagamos que se note.",
  contactText:
    "Contanos qué necesitás mover: el video de tu stand, el contenido de una pantalla LED o un videowall. Empecemos por ahí.",
  email: "manzo@mansalvadesign.com",
  whatsapp: "5493794232631",
  location: "Argentina",
  // Otros nombres con los que se busca a la marca (para buscadores e IA:
  // "Mansalva" también es una editorial, una tipografía y una expresión).
  alternateName: ["Mansalva Design", "mansalvadesign.com"],
  // Logos de clientes ({ name, src } con el archivo en /public). Mientras esté
  // vacío, la sección "Marcas que confiaron en Mansalva" no se muestra.
  brands: [] as { name: string; src: string }[],
  founder: {
    name: "Sebastián Manzolillo",
    title: "Editor de Video & Motion Graphics Designer",
    photo: "/profile.jpg",
    linkedin: "https://www.linkedin.com/in/sebastian-manzolillo/",
  },
};

// Categorías de los trabajos (se muestran debajo del título de cada uno).
export const categories = [
  { key: "Motion Graphics", label: "Motion graphics" },
  { key: "Reel", label: "Reels" },
  { key: "Landing Page", label: "Landing page" },
  { key: "Podcast", label: "Podcast" },
  { key: "Longform", label: "Longform" },
] as const;

export type Project = {
  slug: string;
  title: string;
  category: (typeof categories)[number]["key"];
  detail?: string; // se muestra después de la categoría, ej. "Reel · Stock / logística"
  description: string;
  youtubeId: string; // ID del video de YouTube (lo que va después de v= en la URL)
  orientation: "vertical" | "horizontal";
  // Hecho para una feria o stand: va en la pestaña principal de Trabajos.
  // El resto aparece en "Otros trabajos".
  fair?: boolean;
};

export const projects: Project[] = [
  {
    slug: "goodly-fit-digital-totem",
    fair: true,
    title: "Goodly Fit — Tótem Digital",
    category: "Motion Graphics",
    description: "Pieza para tótem digital del gimnasio Goodly Fit.",
    youtubeId: "JHuxhk2YIdE",
    orientation: "vertical",
  },
  {
    slug: "maraldi-logo-animation",
    fair: true,
    title: "Maraldi — Logo animado",
    category: "Motion Graphics",
    description: "Animación de logo para Maraldi, marca argentina de electrodomésticos.",
    youtubeId: "B-3tmJ7X1Tk",
    orientation: "horizontal",
  },
  {
    slug: "magnetic-impulsa-saas-agency",
    title: "Magnetic Impulsa — Agencia de marketing SaaS",
    category: "Landing Page",
    description:
      "Video para la landing page de Magnetic Impulsa, agencia de marketing para empresas SaaS.",
    youtubeId: "8WIwIcFDjXk",
    orientation: "horizontal",
  },
  {
    slug: "hoken-industrial-mockup",
    title: "Höken — Mock-up industrial",
    category: "Reel",
    description: "Reel de mock-up industrial para la marca Höken.",
    youtubeId: "inV9Wjm1xhw",
    orientation: "vertical",
  },
  {
    slug: "komasa-logo-animation",
    fair: true,
    title: "Komasa — Logo animado",
    category: "Motion Graphics",
    description: "Animación de logo para Komasa, empresa argentina de bombas eléctricas.",
    youtubeId: "tIO3pqG1DdU",
    orientation: "horizontal",
  },
  {
    slug: "julian-architecture-consultant",
    title: "Julián — Consultor de arquitectura",
    category: "Reel",
    description: "Video de contenido para redes para Julián, consultor de arquitectos.",
    youtubeId: "GJBmOvtedcc",
    orientation: "vertical",
  },
  {
    slug: "yajaira-podcast-trailer",
    title: "Yajaira — Tráiler de Podcast",
    category: "Podcast",
    description: "Tráiler del podcast Yajaira (España).",
    youtubeId: "dDc-0eX2f3U",
    orientation: "horizontal",
  },
  {
    slug: "mark-hyrox-gym",
    title: "Mark — Gimnasio Hyrox",
    category: "Reel",
    description: "Reel de contenido para redes para el gimnasio de Hyrox de Mark.",
    youtubeId: "oeWs1RTdv7o",
    orientation: "vertical",
  },
  {
    slug: "maraldi-appliance-company",
    title: "Maraldi — Electrodomésticos",
    category: "Reel",
    description: "Reel de contenido para redes para la marca de electrodomésticos Maraldi.",
    youtubeId: "3VxtUCGPRF8",
    orientation: "vertical",
  },
  {
    slug: "german-grisotto-investing-coach",
    title: "Germán Grisotto — Coach de inversiones",
    category: "Longform",
    description: "Video longform para el investing coach Germán Grisotto.",
    youtubeId: "7OYRLXfeYv8",
    orientation: "horizontal",
  },
  {
    slug: "berry-investing-financial-startup",
    title: "Berry Investing — Startup financiera",
    category: "Reel",
    description: "Reel de contenido para redes para la startup financiera Berry Investing.",
    youtubeId: "aTii8hzeAYw",
    orientation: "vertical",
  },
  {
    slug: "matias-lago-fitness-coach",
    title: "Matías Lago — Coach de fitness",
    category: "Reel",
    description: "Reel de contenido para redes para el fitness coach Matías Lago.",
    youtubeId: "cYxz3lPuhCI",
    orientation: "vertical",
  },
  {
    slug: "mateo-garcia-fitness-coach",
    title: "Mateo García — Coach de fitness",
    category: "Reel",
    description: "Reel de contenido para redes para el fitness coach Mateo García.",
    youtubeId: "Lch9cMHdCFw",
    orientation: "vertical",
  },
  {
    slug: "rhinos-app-reel",
    title: "Rhinos App — Reel",
    category: "Reel",
    detail: "Stock / logística",
    description:
      "Reel para Rhinos App, aplicación de manejo de stock para empresas de logística.",
    youtubeId: "-4_IcXGxbJs",
    orientation: "vertical",
  },
];
