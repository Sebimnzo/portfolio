export const site = {
  name: "Mansalva",
  url: "https://www.mansalvadesign.com",
  domain: "mansalvadesign.com",
  role: "Estudio de motion graphics",
  // Título del inicio: provisorio (lorem ipsum) hasta definir el claim.
  claim: "Lorem ipsum dolor sit.",
  heroLabel: "Motion con intención / Argentina",
  heroTitle: "Estudio de motion graphics en Argentina.",
  tagline:
    "Damos movimiento a marcas que necesitan hacerse notar. Ante clientes, inversores y público de feria.",
  worksTitle: "El trabajo habla. Y se mueve.",
  studioLabel: "Mansalva / Desde Argentina",
  studioTitle: "No movemos cosas porque sí.",
  studioText:
    "Pensamos el movimiento como una decisión de diseño: qué decir, dónde poner el foco y qué dejar afuera.",
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
  contactHeadline: "Hagamos que se note.",
  contactText: "Contanos qué necesitás mover. Empecemos por ahí.",
  email: "manzo@mansalvadesign.com",
  whatsapp: "5493794232631",
  location: "Argentina",
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

// Categorías en el orden de las pestañas, con el texto que se muestra.
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
};

export const projects: Project[] = [
  {
    slug: "goodly-fit-digital-totem",
    title: "Goodly Fit — Tótem Digital",
    category: "Motion Graphics",
    description: "Pieza para tótem digital del gimnasio Goodly Fit.",
    youtubeId: "JHuxhk2YIdE",
    orientation: "vertical",
  },
  {
    slug: "maraldi-logo-animation",
    title: "Maraldi — Logo Animation",
    category: "Motion Graphics",
    description: "Animación de logo para Maraldi, marca argentina de electrodomésticos.",
    youtubeId: "B-3tmJ7X1Tk",
    orientation: "horizontal",
  },
  {
    slug: "magnetic-impulsa-saas-agency",
    title: "Magnetic Impulsa — SaaS Marketing Agency",
    category: "Landing Page",
    description:
      "Video para la landing page de Magnetic Impulsa, agencia de marketing para empresas SaaS.",
    youtubeId: "8WIwIcFDjXk",
    orientation: "horizontal",
  },
  {
    slug: "hoken-industrial-mockup",
    title: "Höken — Industrial Mock-up",
    category: "Reel",
    description: "Reel de mock-up industrial para la marca Höken.",
    youtubeId: "inV9Wjm1xhw",
    orientation: "vertical",
  },
  {
    slug: "komasa-logo-animation",
    title: "Komasa — Logo Animation",
    category: "Motion Graphics",
    description: "Animación de logo para Komasa, empresa argentina de bombas eléctricas.",
    youtubeId: "tIO3pqG1DdU",
    orientation: "horizontal",
  },
  {
    slug: "julian-architecture-consultant",
    title: "Julián — Architecture Consultant",
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
    title: "Mark — Hyrox Gym",
    category: "Reel",
    description: "Reel de contenido para redes para el gimnasio de Hyrox de Mark.",
    youtubeId: "oeWs1RTdv7o",
    orientation: "vertical",
  },
  {
    slug: "maraldi-appliance-company",
    title: "Maraldi — Appliance Company",
    category: "Reel",
    description: "Reel de contenido para redes para la marca de electrodomésticos Maraldi.",
    youtubeId: "3VxtUCGPRF8",
    orientation: "vertical",
  },
  {
    slug: "german-grisotto-investing-coach",
    title: "Germán Grisotto — Investing Coach",
    category: "Longform",
    description: "Video longform para el investing coach Germán Grisotto.",
    youtubeId: "7OYRLXfeYv8",
    orientation: "horizontal",
  },
  {
    slug: "berry-investing-financial-startup",
    title: "Berry Investing — Financial Startup",
    category: "Reel",
    description: "Reel de contenido para redes para la startup financiera Berry Investing.",
    youtubeId: "aTii8hzeAYw",
    orientation: "vertical",
  },
  {
    slug: "matias-lago-fitness-coach",
    title: "Matías Lago — Fitness Coach",
    category: "Reel",
    description: "Reel de contenido para redes para el fitness coach Matías Lago.",
    youtubeId: "cYxz3lPuhCI",
    orientation: "vertical",
  },
  {
    slug: "mateo-garcia-fitness-coach",
    title: "Mateo García — Fitness Coach",
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
