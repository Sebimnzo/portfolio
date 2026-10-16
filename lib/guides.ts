import type { Metadata } from "next";
import { site } from "@/lib/data";

// Guías publicadas: cada una tiene su página en app/guias/<slug>, y la lista
// alimenta la sección Guías de la home, el sitemap y llms.txt.
// Las entradas salen de mansalva-serp-engine/output/articles/*.meta.json
// (solo reviewed: true) vía scripts/publicar-guias.py; la primera es la guía
// con calculadora, escrita a mano.
export type Guide = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  published: string;
  updated: string;
  readingMinutes: number;
  category: string;
};

export const guides: Guide[] = [
  {
    slug: "resolucion-pantalla-led",
    path: "/guias/resolucion-pantalla-led",
    title: "Resolución de una pantalla LED: cómo calcularla según el pixel pitch",
    seoTitle: "Resolución de pantalla LED y pixel pitch: calculadora y tabla — Mansalva",
    description: "Cómo calcular la resolución de una pantalla LED a partir del tamaño y el pixel pitch, con calculadora, tabla de pitch y distancia de visión.",
    published: "2026-10-14",
    updated: "2026-10-14",
    readingMinutes: 4,
    category: "Pantallas LED",
  },
  {
    slug: "animacion-en-loop-sin-sonido-para-eventos",
    path: "/guias/animacion-en-loop-sin-sonido-para-eventos",
    title: "Cómo se diseña un loop sin sonido que se entiende de reojo",
    seoTitle: "Animación en loop sin sonido para eventos — Mansalva",
    description: "Animación en loop sin sonido para eventos: cómo diseñar uno que se entienda de reojo, con un mensaje por escena y sin corte. Mirá el criterio.",
    published: "2026-10-16",
    updated: "2026-10-16",
    readingMinutes: 8,
    category: "Video para stands",
  },
  {
    slug: "como-atraer-mas-gente-a-un-stand-en-una-feria",
    path: "/guias/como-atraer-mas-gente-a-un-stand-en-una-feria",
    title: "Cómo atraer más gente a tu stand de feria sin repartir folletos",
    seoTitle: "Cómo atraer más gente a tu stand en una feria — Mansalva",
    description: "Cómo atraer más gente a un stand en una feria B2B: por qué el folleto termina en el tacho y qué decide, en segundos, si un visitante frena.",
    published: "2026-10-16",
    updated: "2026-10-16",
    readingMinutes: 8,
    category: "Stands de feria",
  },
  {
    slug: "como-captar-leads-en-ferias-comerciales",
    path: "/guias/como-captar-leads-en-ferias-comerciales",
    title: "El lead de feria empieza en el pasillo, no en la tablet",
    seoTitle: "Cómo captar leads en ferias comerciales — Mansalva",
    description: "Cómo captar leads en ferias comerciales: el lead empieza en el pasillo. Qué tiene que pasar antes de la tablet para que frene el visitante que decide.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Stands de feria",
  },
  {
    slug: "como-hacer-que-la-gente-se-detenga-en-un-stand",
    path: "/guias/como-hacer-que-la-gente-se-detenga-en-un-stand",
    title: "Cómo hacer que la gente se detenga en tu stand y no en el de al lado",
    seoTitle: "Cómo hacer que la gente se detenga en tu stand — Mansalva",
    description: "Qué mira un visitante que camina por el pasillo y qué tenés que mostrarle para que frene. Cómo hacer que la gente se detenga en tu stand, paso a paso.",
    published: "2026-10-16",
    updated: "2026-10-16",
    readingMinutes: 8,
    category: "Stands de feria",
  },
  {
    slug: "como-preparar-un-video-para-videowall",
    path: "/guias/como-preparar-un-video-para-videowall",
    title: "Cómo preparar un video para videowall sin que los marcos lo partan",
    seoTitle: "Cómo preparar un video para videowall — Mansalva",
    description: "Cómo preparar un video para videowall: resolución total, marcos, safe areas y formato de entrega. Lo que tenés que saber antes de exportar el archivo.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Videowalls",
  },
  {
    slug: "como-usar-una-pantalla-led-en-un-stand",
    path: "/guias/como-usar-una-pantalla-led-en-un-stand",
    title: "Cómo usar una pantalla LED en un stand sin que sea un adorno caro",
    seoTitle: "Cómo usar una pantalla LED en un stand — Mansalva",
    description: "¿Tenés la pantalla LED en el stand y no sabés qué hacer con ella? Dónde ponerla, qué brillo pedir y qué contenido hace frenar al que pasa.",
    published: "2026-10-16",
    updated: "2026-10-16",
    readingMinutes: 9,
    category: "Pantallas LED",
  },
  {
    slug: "contenido-para-pantallas-led-en-eventos",
    path: "/guias/contenido-para-pantallas-led-en-eventos",
    title: "Contenido para pantallas LED en eventos que se ve desde lejos",
    seoTitle: "Contenido para pantallas LED en eventos — Mansalva",
    description: "Contenido para pantallas LED en eventos: por qué el video de YouTube falla en la feria y qué pedir para que el pasillo frene frente a tu stand.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Pantallas LED",
  },
  {
    slug: "duracion-ideal-de-un-video-para-stand",
    path: "/guias/duracion-ideal-de-un-video-para-stand",
    title: "Cuánto dura el video de un stand que la gente ve entero",
    seoTitle: "Duración ideal de un video para stand — Mansalva",
    description: "La duración ideal de un video para stand no es la de redes. Mirá por qué un loop de 10 a 30 segundos rinde más que dos minutos y cómo medir el tuyo.",
    published: "2026-10-16",
    updated: "2026-10-16",
    readingMinutes: 9,
    category: "Video para stands",
  },
  {
    slug: "errores-comunes-en-stands-de-ferias",
    path: "/guias/errores-comunes-en-stands-de-ferias",
    title: "Errores comunes en stands de ferias, del más barato al más caro",
    seoTitle: "Errores comunes en stands de ferias — Mansalva",
    description: "Los errores comunes en stands de ferias, ordenados por los leads que cuestan. El más caro no es el folleto: es la pantalla. Mirá cómo evitarlo.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Stands de feria",
  },
  {
    slug: "estrategias-para-stands-con-poco-espacio",
    path: "/guias/estrategias-para-stands-con-poco-espacio",
    title: "Stand chico, pasillo grande: cómo ganar con nueve metros cuadrados",
    seoTitle: "Estrategias para stands con poco espacio — Mansalva",
    description: "Estrategias para stands con poco espacio: por qué más mobiliario no alcanza y cómo la altura y un loop en movimiento te ganan el pasillo.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Stands de feria",
  },
  {
    slug: "formato-de-video-para-pantalla-led-de-stand",
    path: "/guias/formato-de-video-para-pantalla-led-de-stand",
    title: "Qué video mandarle al proveedor de la pantalla LED de tu stand",
    seoTitle: "Formato de video para pantalla LED de stand — Mansalva",
    description: "¿El proveedor te pide el video para la pantalla LED del stand? Resolución, MP4 con H.264, fps, bitrate y loop sin corte, en una tabla lista para usar.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Pantallas LED",
  },
  {
    slug: "ideas-para-pantallas-en-stands",
    path: "/guias/ideas-para-pantallas-en-stands",
    title: "Siete ideas para pantallas en stands que la gente mira dos veces",
    seoTitle: "Ideas para pantallas en stands que frenan gente — Mansalva",
    description: "Ideas para pantallas en stands: por qué el video institucional con audio falla en el pasillo y qué loop poner para que el visitante frene.",
    published: "2026-10-16",
    updated: "2026-10-16",
    readingMinutes: 8,
    category: "Pantallas LED",
  },
  {
    slug: "ideas-para-stands-comerciales-que-destaquen",
    path: "/guias/ideas-para-stands-comerciales-que-destaquen",
    title: "Ideas para stands comerciales que destaquen y además vendan",
    seoTitle: "Ideas para stands comerciales que destaquen — Mansalva",
    description: "Ideas para stands comerciales que destaquen en una feria B2B: qué frena al visitante, qué genera leads y qué es decoración. Con criterio, sin caramelos.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Stands de feria",
  },
  {
    slug: "medidas-de-video-para-totem-vertical",
    path: "/guias/medidas-de-video-para-totem-vertical",
    title: "El video de tu tótem vertical mide 1080×1920, no al revés",
    seoTitle: "Medidas de video para tótem vertical — Mansalva",
    description: "Medidas de video para tótem vertical: 1080×1920 en Full HD, 2160×3840 en 4K. Mirá la tabla, el margen seguro y el formato antes de mandar el archivo.",
    published: "2026-10-16",
    updated: "2026-10-16",
    readingMinutes: 9,
    category: "Tótems",
  },
  {
    slug: "motion-graphics-para-eventos-corporativos",
    path: "/guias/motion-graphics-para-eventos-corporativos",
    title: "El motion que brilla en la notebook y desaparece en la feria",
    seoTitle: "Motion graphics para eventos corporativos — Mansalva",
    description: "¿Vas a encargar motion graphics para eventos corporativos? Mirá qué separa una pieza que se lee de lejos, sin audio y en pasillo, de una que nadie ve.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Video para stands",
  },
  {
    slug: "por-que-nadie-se-detiene-en-mi-stand",
    path: "/guias/por-que-nadie-se-detiene-en-mi-stand",
    title: "Por qué nadie se detiene en tu stand aunque esté bien ubicado",
    seoTitle: "Por qué nadie se detiene en mi stand — Mansalva",
    description: "¿Por qué nadie se detiene en tu stand si está bien ubicado? Mirá los tres errores que lo vuelven invisible en el pasillo y qué cambiar antes de la feria.",
    published: "2026-10-16",
    updated: "2026-10-16",
    readingMinutes: 8,
    category: "Stands de feria",
  },
  {
    slug: "que-proyectar-en-un-stand-de-feria",
    path: "/guias/que-proyectar-en-un-stand-de-feria",
    title: "Qué proyectar en un stand de feria, escena por escena",
    seoTitle: "Qué proyectar en un stand de feria — Mansalva",
    description: "Qué proyectar en un stand de feria cuando nadie escucha y todos miran de reojo: el error del reel con audio y qué pedir para tu pantalla.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Video para stands",
  },
  {
    slug: "resolucion-de-pantalla-led-para-stand",
    path: "/guias/resolucion-de-pantalla-led-para-stand",
    title: "Por qué tu video 4K se ve mal en la pantalla LED del stand",
    seoTitle: "Resolución de pantalla LED para stand — Mansalva",
    description: "Resolución de pantalla LED para stand: por qué tu video 4K se deforma, cómo pasar metros a píxeles y qué pedirle al proveedor antes de la feria.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Pantallas LED",
  },
  {
    slug: "video-para-stand-de-feria",
    path: "/guias/video-para-stand-de-feria",
    title: "Qué pedir cuando encargás el video para tu stand de feria",
    seoTitle: "Video para stand de feria: qué pedir — Mansalva",
    description: "El video para stand de feria se gana o se pierde en el pedido. Mirá el brief de 5 puntos que tenés que mandar antes de que alguien empiece a animar.",
    published: "2026-10-16",
    updated: "2026-10-16",
    readingMinutes: 8,
    category: "Video para stands",
  },
  {
    slug: "video-vertical-para-pantalla-de-feria",
    path: "/guias/video-vertical-para-pantalla-de-feria",
    title: "Tu tótem vertical no necesita un recorte, necesita otro video",
    seoTitle: "Video vertical para pantalla de feria — Mansalva",
    description: "¿Tu pantalla de feria es vertical y tu video, horizontal? Mirá por qué recortarlo no sirve y qué cambia al diseñar un video vertical para tu stand.",
    published: "2026-10-16",
    updated: "2026-10-16",
    readingMinutes: 8,
    category: "Tótems",
  },
  {
    slug: "videos-para-ferias-de-negocios",
    path: "/guias/videos-para-ferias-de-negocios",
    title: "El video para tu feria de negocios no es el institucional",
    seoTitle: "Videos para ferias de negocios que frenan gente — Mansalva",
    description: "Un video para ferias de negocios no es un institucional. Mirá qué cambia en formato, ritmo y objetivo, y qué pedir para que tu pantalla frene gente.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Video para stands",
  },
  {
    slug: "videowall-para-stand-de-feria",
    path: "/guias/videowall-para-stand-de-feria",
    title: "Tu videowall tiene cuatro pantallas y debería parecer una sola",
    seoTitle: "Videowall para stand de feria: qué mostrar — Mansalva",
    description: "¿Alquilaste un videowall para tu stand de feria? Mirá por qué una sola imagen grande frena más gente que cuatro pantallas chicas y qué pedir.",
    published: "2026-10-15",
    updated: "2026-10-15",
    readingMinutes: 8,
    category: "Videowalls",
  },
];

// Orden de las categorías en la home.
export const guideCategories = ["Pantallas LED", "Videowalls", "Tótems", "Video para stands", "Stands de feria"];

export function getGuide(slug: string): Guide {
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) throw new Error(`Guía sin datos en lib/guides.ts: ${slug}`);
  return guide;
}

// La guía de resolución LED se enlaza desde servicios, Stands y el pie.
export const ledGuide = getGuide("resolucion-pantalla-led");

export const guideMetadata = (guide: Guide): Metadata => ({
  title: guide.seoTitle,
  description: guide.description,
  alternates: { canonical: guide.path },
  openGraph: {
    title: guide.title,
    description: guide.description,
    url: guide.path,
    siteName: site.name,
    locale: "es_AR",
    type: "article",
  },
});

export const guideJsonLd = (guide: Guide) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.title,
  description: guide.description,
  inLanguage: "es-AR",
  datePublished: guide.published,
  dateModified: guide.updated,
  mainEntityOfPage: `${site.url}${guide.path}`,
  image: `${site.url}/opengraph-image`,
  author: { "@id": `${site.url}/#fundador` },
  publisher: { "@id": `${site.url}/#estudio` },
});

// Pitch más usados; resoluciones calculadas para una pantalla de 5 × 2 m.
export const pitchTable = [
  { pitch: 1.5, where: "Mostradores y pantallas que se miran de muy cerca" },
  { pitch: 1.9, where: "Stands premium y recepciones" },
  { pitch: 2.5, where: "Stands de feria en interiores (el más común)" },
  { pitch: 2.9, where: "Escenarios y pantallas de alquiler para eventos" },
  { pitch: 3.9, where: "Escenarios grandes y auditorios" },
  { pitch: 4.8, where: "Exteriores y pantallas que se miran de lejos" },
];
