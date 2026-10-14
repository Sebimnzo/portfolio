# Figma — "Mansalva — Nueva home"

Leído una vez con el conector de Figma (2026-10-14) para no gastar lecturas (plan Starter, ~20/mes).
- Archivo: `REHACER-MANSALVA-WEB` · fileKey `AUqBfFXMrbDmJ6SvVeVStl` · nodo `23:6257`
- Captura completa: `nueva-home.png` · Miniaturas exportadas: `miniaturas/` · Onda del hero: `public/brand/trayectoria.svg`

## Colores nuevos (además de la paleta del manual)
| Uso | Hex |
|---|---|
| Líneas / bordes claros | `#DDE1E6` |
| Texto secundario | `#69717C` |
| Fondo suave (marcas, ítem activo) | `#F4F6F8` |
| Texto secundario sobre grafito | `#B8C3D2` |
| Línea sobre grafito | `#48505B` |

## Estructura (desktop, padding lateral 48px)
1. **Navegación** (alto 88, borde inferior): wordmark 32px · Trabajos / Servicios / Estudio (Archivo 500, 14px) · botón azul "Hablemos →".
2. **Presentación**: etiqueta mono 11px "MOTION CON INTENCIÓN / ARGENTINA" · H1 Archivo 900 84px, interlineado 0,93, tracking −0,045em · acento azul 32×3 + "Explorá nuestros trabajos ↓". Columna derecha 380px: onda, "Estudio de motion graphics en Argentina." (800, 27px) y "Damos movimiento a marcas que necesitan hacerse notar. Ante clientes, inversores y público de feria." (17px, #69717C).
3. **Trabajos**: "El trabajo habla. Y se mueve." (800, 38px) + mono "14 PROYECTOS / DISTINTOS FORMATOS" · pestañas con contador (Todos · 14, Motion graphics · 3, Reels · 8, Landing page · 1, Podcast · 1, Longform · 1) · carrusel de tarjetas de 352px (título 800 19px "→", categoría 13px) · controles "01 / 14" + barra de progreso + "Recorré los proyectos" y flechas circulares 40px · navegador de 7 columnas × 2 filas (miniatura 44px, radio 4px, activo con fondo #F4F6F8 y borde azul).
   Orden: Goodly Fit, Maraldi logo, Magnetic Impulsa, Höken, Komasa, Julián, Yajaira, Mark, Maraldi reel, Germán Grisotto, Berry, Matías Lago, Mateo García, Rhinos ("Reel · Stock / logística").
4. **Servicios y estudio** (fondo grafito): mono azul claro "MANSALVA / DESDE ARGENTINA" · "No movemos cosas porque sí." (800, 39px) · "Pensamos el movimiento como una decisión de diseño: qué decir, dónde poner el foco y qué dejar afuera." · fundador (foto 80×88, "Fundador · Editor de Video & Motion Graphics Designer", "Conoceme en LinkedIn →"). Pestañas Servicios / El estudio. Servicios en 2 columnas:
   - Stands de feria — Piezas para pantallas y stands que se hacen notar entre el ruido.
   - Animación web — Movimiento que acompaña la experiencia, sin distraer del mensaje.
   - Video para redes — Edición y motion para contar lo importante antes del próximo scroll.
   - VSL para landings — Una narrativa clara para presentar tu propuesta y llevarla a la acción.
   - Logos animados — El gesto justo para que tu identidad también se reconozca en movimiento.
   - "¿No sabés qué formato necesitás?" → "Contanos tu idea y lo pensamos juntos →"
5. **Marcas que confiaron en Mansalva** (fondo #F4F6F8, 5 espacios para logos — en el diseño figuran "por incorporar").
6. **Contacto**: "Hagamos que se note." · "Contanos qué necesitás mover. Empecemos por ahí." · mail grande en azul → · botón "Pedir propuesta" + "WhatsApp →".
7. **Cierre**: wordmark 26px · dominio · LinkedIn → · mono "© 2026 MANSALVA".

## Diferencias decididas al implementar
- Mail y dominio: se usan `manzo@mansalvadesign.com` / `mansalvadesign.com` (decisión de Sebastián), no los de `mansalva.studio` del diseño.
- Claim del hero (`site.claim`): "Que tu stand se vea primero." reemplaza al lorem ipsum ("Nada se queda quieto." fue descartado). El `<h1>` sigue siendo `site.heroTitle`, en la columna derecha.
