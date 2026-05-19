# Guía de Estilo — Lorena López Manicura

> Documento de referencia visual para el diseño y desarrollo del sitio web.  
> Imagen de referencia: `docs/design/references/1.png`

---

## Dirección Estética

### Concepto

**Lujo accesible y calidez artesanal.** El sitio comunica profesionalismo de alta gama sin distancia fría. Es como entrar a un estudio íntimo donde el arte y el cuidado personal se funden: rosa cálido, superficies limpias, tipografía serif con carácter.

El referente visual es un estudio de manicura artístico: fotos reales de trabajos, presentación de la artista, confianza a través de credenciales. El diseño amplifica esto con una paleta acogedora y un ritmo visual que invita a quedarse.

### Personalidad de Marca

| Atributo    | Expresión visual                                        |
|-------------|--------------------------------------------------------|
| Artístico   | Tipografía serif con carácter, composición asimétrica  |
| Cálido      | Paleta rosa fucsia, fotos de ambiente                  |
| Profesional | Limpieza espacial, jerarquía tipográfica clara         |
| Femenino    | Curvas suaves, colores pastel profundos                |
| Local       | Escala íntima, no corporativa                          |

---

## Paleta de Colores

### Colores de Marca

| Token                  | Valor hex  | Uso principal                                |
|------------------------|------------|----------------------------------------------|
| `rose-blush`           | `#F06292`  | Fondo del hero, navbar, secciones destacadas |
| `rose-deep`            | `#EC407A`  | Hover states, variante más intensa           |
| `blush-light`          | `#F8BBD9`  | Acentos decorativos, degradados suaves       |
| `blush-pale`           | `#FCE4EC`  | Separadores, fondos de sección tenue         |
| `cream`                | `#FDF4F1`  | Fondo principal de secciones claras          |
| `parchment`            | `#F5EBE6`  | Fondo de tarjetas, cards                     |
| `bone`                 | `#E8DDD9`  | Bordes sutiles                               |
| `espresso`             | `#261510`  | Texto principal, botón CTA oscuro            |
| `mocha`                | `#6E4038`  | Texto secundario, subtítulos                 |
| `dust`                 | `#A89088`  | Texto atenuado, placeholders                 |
| `sage`                 | `#8DA98A`  | Estados de disponibilidad, éxito             |

### Uso de Color

**Hero y secciones de marca:** fondo `rose-blush`, texto en `white`.

**Secciones de contenido:** fondo `cream` o `white`, texto `espresso`.

**Tarjetas y cards:** fondo `parchment`, borde `bone`.

**Regla del 60-30-10:**
- 60% → `cream` / `white` (fondo)
- 30% → `rose-blush` / `parchment` (secciones alternadas)
- 10% → `espresso` (botones, énfasis tipográfico)

---

## Tipografía

### Familias

#### Display — Cormorant Garamond
Usado en títulos principales (`h1`, `h2`), el nombre de la artista, y cualquier texto que necesite elegancia clásica.

```
Cormorant Garamond — 300, 400, 500, 600, 700
Alternativa: Garamond, Georgia (system fallback)
```

**Características**: Serif clásico italiano, alto contraste entre trazos finos y gruesos, reminiscente de la tipografía de moda y lujo. Excelente en tamaños grandes.

#### Body — DM Sans
Usado en párrafos, navegación, botones, etiquetas, todo el contenido de lectura.

```
DM Sans — 300, 400, 500
Alternativa: Helvetica Neue, Arial (system fallback)
```

**Características**: Sans-serif geométrico humanista, muy legible en cuerpo pequeño, neutral pero con carácter propio. Complementa perfectamente a Cormorant.

### Carga de Fuentes (Next.js 16)

Leer la documentación en `node_modules/next/dist/docs/` para la API actual de `next/font`. El patrón general es:

```tsx
// app/layout.tsx
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});
```

### Escala Tipográfica

| Rol            | Tamaño          | Peso   | Familia  | Leading  | Tracking  |
|----------------|-----------------|--------|----------|----------|-----------|
| Hero H1        | 60–72px (fluid) | 400–500| Display  | 1.10     | -0.025em  |
| Section H2     | 36–48px         | 400    | Display  | 1.15     | -0.015em  |
| Card H3        | 24–30px         | 500    | Display  | 1.25     | 0         |
| Subtítulo      | 18–20px         | 400    | Display  | 1.35     | 0         |
| Body regular   | 16px            | 400    | Body     | 1.55     | 0         |
| Body destacado | 18px            | 400    | Body     | 1.55     | 0         |
| Caption        | 14px            | 400    | Body     | 1.5      | 0.02em    |
| Eyebrow        | 12px            | 500    | Body     | 1.4      | 0.15em    |
| Botón          | 14–16px         | 500    | Body     | 1        | 0.06em    |
| Nav link       | 14px            | 400    | Body     | 1        | 0.04em    |

### Reglas Tipográficas

- **Nunca** usar `display` (Cormorant) en cuerpos de texto largos — solo para titulares.
- Los títulos de sección (`h2`) deben tener **margen inferior generoso** (mínimo 32px) antes del contenido.
- Usar `font-style: italic` de Cormorant en citas, frases especiales o palabras extranjeras para añadir elegancia.
- El ancho ideal de línea para cuerpo es **60–75 caracteres** — limitar con `max-width: var(--container-content)`.
- Las etiquetas eyebrow ("SOBRE MÍ", "PORTFOLIO") van en **mayúsculas con tracking amplio**.

---

## Espaciado y Layout

### Principios de Layout

El diseño usa un sistema de **secciones alternadas**: fondos `rose-blush` y `cream`/`white` se alternan para crear ritmo visual sin necesidad de separadores duros.

**Patrón de alternancia de secciones:**
1. Hero → `rose-blush`
2. Sobre mí → `white`
3. Portfolio → `cream`
4. Servicios → `rose-blush`
5. Reseñas → `white`
6. Contacto → `parchment`

### Grid

- **Layout base**: 12 columnas en desktop, 4 en mobile
- **Gutter**: 24px (desktop), 16px (mobile)
- **Margen lateral**: `clamp(1rem, 5vw, 2rem)`
- **Ancho de contenedor**: 1280px máximo, con padding lateral

### Sección tipo (padding)

```
Vertical: clamp(3rem, 8vw, 6rem)   → se adapta entre 48px y 96px
Horizontal: clamp(1rem, 5vw, 2rem) → se adapta entre 16px y 32px
```

### Composición Asimétrica

Siguiendo la referencia visual, se prefieren composiciones **split** donde:
- Texto ocupa ~55% del ancho
- Imagen o elemento visual ocupa ~45%
- Los márgenes se rompen deliberadamente (la imagen puede salir del contenedor)

---

## Componentes de Imagen

### Fotografía de Producto (Uñas)

- **Aspect ratio**: cuadrado (1:1) para galerías, rectangular (4:3) para featured
- **Tratamiento**: Sin filtros pesados — las fotos deben mostrar los colores reales del nail art
- **Presentación**: Bordes redondeados `radius-xl` (16px), sombra `shadow-md`
- **Hover**: Escala sutil `scale(1.03)` + sombra más pronunciada

### Fotografía de Retrato (Artista)

- **Estilo**: Cálido, auténtico, no editorial fría
- **Tratamiento**: Contraste suave, ligeramente más cálido
- **Formas**: La imagen principal del hero se recorta de forma orgánica (sin cuadrado recto)

### Iconos

- **Estilo**: Línea fina, stroke 1.5px, sin relleno sólido
- **Tamaño**: 24px (nav, inline), 40px (feature cards), 32px (footer)
- **Color**: `mocha` sobre fondo claro, `blush-light` sobre fondo oscuro

---

## Elementos Interactivos

### Botón CTA Principal

```
Estado normal:
  - Fondo: espresso (#261510)
  - Texto: white
  - Padding: 14px 28px
  - Border-radius: full (píldora)
  - Con ícono flecha → a la derecha

Estado hover:
  - Fondo: mocha (#6E4038)
  - Transición: 250ms ease-out
  - Transformación: translateX(2px) en la flecha
```

### Botón Secundario / Outline

```
Estado normal:
  - Fondo: transparent
  - Borde: 1.5px espresso
  - Texto: espresso
  - Padding: 12px 24px
  - Border-radius: full

Estado hover:
  - Fondo: espresso (10% opacidad)
```

### Links de Navegación

```
Estado normal:
  - Texto: white (sobre rose-blush) / espresso (sobre white)
  - Peso: 400
  - Sin subrayado

Estado hover:
  - Opacidad: 70%
  - Underline sutil con offset 3px
  - Transición: 150ms
```

### Campos de Formulario

```
Fondo: white
Borde: 1.5px bone → rose-blush (focus)
Padding: 12px 16px
Border-radius: radius-lg (12px)
Font: body 16px
Placeholder: dust
Focus ring: rose-blush 2px con 2px offset
```

---

## Animaciones y Micro-interacciones

### Principios

- **Propósito**: Toda animación debe guiar la atención o confirmar una acción. Sin animaciones decorativas sin razón.
- **Duración**: Interacciones cortas (150ms), entradas de página (400–600ms), transiciones de sección (300ms).
- **Easing**: `ease-spring` para elementos que aparecen (pequeño rebote suave), `ease-out` para desapariciones.

### Entrada de Página (Hero)

```
1. Eyebrow label: fade in + translateY(8px) → 0 — delay: 0ms
2. H1 title: fade in + translateY(16px) → 0 — delay: 100ms
3. Body text: fade in — delay: 250ms
4. CTA button: fade in + scale(0.96) → 1 — delay: 350ms
5. Hero image: fade in + translateX(20px) → 0 — delay: 200ms
```

### Scroll Reveal (Secciones)

- Usar `IntersectionObserver` con `threshold: 0.1`
- Animación: `opacity: 0 → 1` + `translateY(24px) → 0`
- Duración: `400ms ease-out`
- Stagger entre elementos del mismo grupo: `80ms`

### Hover en Tarjetas de Galería

```
transform: translateY(-4px) scale(1.02)
box-shadow: shadow-lg
transition: 300ms ease-spring
```

### Flecha del CTA

```css
.cta-arrow {
  transition: transform 250ms ease-spring;
}
.cta-button:hover .cta-arrow {
  transform: translateX(4px);
}
```

---

## Voz y Tono

### Personalidad

La voz de Lorena López es **cálida, experta y cercana**. Habla como la profesional que es, sin distancia corporativa, pero con orgullo en su oficio.

### Directrices

| ✅ Usar                              | ❌ Evitar                          |
|--------------------------------------|-----------------------------------|
| Primera persona (yo, mi)             | Tercera persona ("Lorena López")  |
| Frases cortas y directas             | Jerga técnica sin contexto        |
| Palabras sensoriales (suave, cálido) | Hipérboles vacías ("increíble")   |
| Invitaciones ("Ven a conocerme")     | Presión de venta ("¡Compra ya!")  |
| Nombres de técnicas concretas        | Generalidades ("buena calidad")   |

### Ejemplos de Copywriting

**Hero headline:** "Arte en cada detalle. Manicura que te define."

**Subtítulo:** "Gel, acrílico o nail art personalizado — hecho con dedicación en mi estudio de [Ciudad]."

**CTA principal:** "Reserva tu cita →"

**About:** "Llevo más de [X] años convirtiendo uñas en lienzos. Cada trabajo es único porque tú lo eres."

---

## Accesibilidad

- **Contraste mínimo**: 4.5:1 para texto normal, 3:1 para texto grande (WCAG AA)
  - `white` sobre `rose-blush`: verificar con herramienta — puede requerir sombra de texto en textos pequeños
  - `espresso` sobre `cream`: relación ~14:1 ✅
  - `white` sobre `espresso` (botón): relación ~18:1 ✅
- **Focus visible**: Siempre mostrar `focus-visible` — usar ring de `rose-blush` 2px
- **Imágenes**: Alt text descriptivo en todas las fotos de nail art (describir el diseño)
- **Movimiento**: Respetar `prefers-reduced-motion` envolviendo todas las animaciones
- **Tamaño mínimo de tap**: 44×44px en elementos interactivos móvil
- **Idioma**: `lang="es"` en el elemento `<html>`

---

## Checklist de Implementación

- [ ] Cargar Cormorant Garamond + DM Sans via `next/font`
- [ ] Importar `tokens.css` en `globals.css`
- [ ] Aplicar alias de colores semánticos a components (no colores raw)
- [ ] Configurar `max-width` de contenedor en layout raíz
- [ ] Implementar `prefers-reduced-motion` en animaciones
- [ ] Verificar contraste `white`/`rose-blush` con herramienta
- [ ] Probar en viewport 375px (iPhone SE) y 1280px (desktop referencia)
- [ ] Validar todos los alt text de imágenes
