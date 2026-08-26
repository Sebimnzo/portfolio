export const site = {
  name: "Sebastián Manzolillo",
  role: "Editor de Video & Motion Graphics Designer",
  tagline:
    "Cuento historias con edición y motion graphics: spots, contenido de redes, videos institucionales y piezas animadas.",
  email: "sebastian15manzo@gmail.com",
  whatsapp: "5493794232631",
  location: "Argentina",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sebastian-manzolillo/" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  youtubeId: string; // ID del video de YouTube (lo que va después de v= en la URL)
  orientation: "vertical" | "horizontal";
};

export const projects: Project[] = [
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
    slug: "maraldi-logo-animation",
    title: "Maraldi — Logo Animation",
    category: "Motion Graphics",
    description: "Animación de logo para Maraldi, marca argentina de electrodomésticos.",
    youtubeId: "B-3tmJ7X1Tk",
    orientation: "horizontal",
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
    slug: "hoken-industrial-mockup",
    title: "Höken — Industrial Mock-up",
    category: "Reel",
    description: "Reel de mock-up industrial para la marca Höken.",
    youtubeId: "inV9Wjm1xhw",
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
];
