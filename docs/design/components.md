# Especificaciones de Componentes — Lorena López Manicura

> Stack: Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript  
> Todos los componentes usan tokens definidos en `docs/design/tokens.css`

---

## Índice

1. [Navbar](#1-navbar)
2. [Hero Section](#2-hero-section)
3. [Botón CTA](#3-botón-cta)
4. [Sección "Sobre Mí"](#4-sección-sobre-mí)
5. [Galería de Trabajos](#5-galería-de-trabajos)
6. [Tarjeta de Trabajo](#6-tarjeta-de-trabajo)
7. [Sección de Servicios / Features](#7-sección-de-servicios--features)
8. [Tarjeta de Feature](#8-tarjeta-de-feature)
9. [Carrusel de Portfolio](#9-carrusel-de-portfolio)
10. [Formulario de Reserva](#10-formulario-de-reserva)
11. [Reseñas / Testimonios](#11-reseñas--testimonios)
12. [Footer](#12-footer)

---

## 1. Navbar

### Descripción
Barra de navegación fija en la parte superior. Fondo `rose-blush` que se vuelve ligeramente más opaco al hacer scroll.

### Anatomía
```
[Logo/Nombre]    [Nav Links]    [Redes Sociales]
```

### Especificaciones

| Propiedad         | Valor                                      |
|-------------------|--------------------------------------------|
| Height            | 72px desktop / 60px mobile                 |
| Background        | `rose-blush` con backdrop-blur en scroll   |
| Posición          | `fixed` top 0, z-index `sticky` (200)      |
| Padding X         | `clamp(1rem, 5vw, 2rem)`                   |
| Transición        | background 300ms ease                      |

### Logo
- Ícono: pequeño diamante/estrella SVG (4 puntas, trazo fino)
- Texto: nombre del estudio en Cormorant Garamond 18px, weight 500
- Color: `white`
- Spacing ícono–texto: 8px

### Nav Links (desktop)
- Font: DM Sans 14px, weight 400
- Color: `white` (opacity 90%)
- Hover: opacity 70%, underline `rose-deep` offset 3px
- Gap entre links: 32px
- Secciones: Inicio · Sobre mí · Portfolio · Servicios · Reserva · Contacto

### Iconos de Redes Sociales
- Tamaño: 20px
- Estilo: línea fina
- Plataformas: Instagram · WhatsApp · TikTok (o las que apliquen)
- Hover: escala 1.1, transición 150ms

### Mobile (< 768px)
- Ocultar nav links y mostrar hamburger icon (24px)
- Menu drawer desde la derecha, fondo `espresso` con links en blanco
- Ancho del drawer: 280px

### Código de Referencia

```tsx
// components/Navbar.tsx
'use client';

interface NavbarProps {
  links: { label: string; href: string }[];
}

export function Navbar({ links }: NavbarProps) {
  // Leer docs de Next.js 16 para el manejo de scroll en Client Components
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: 'var(--nav-height)',
        backgroundColor: 'var(--color-rose-blush)',
        zIndex: 'var(--z-sticky)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--section-padding-x)',
      }}
    >
      {/* Logo, links, redes sociales */}
    </nav>
  );
}
```

---

## 2. Hero Section

### Descripción
Sección principal de bienvenida. Ocupa el 100% del viewport height menos la navbar. Layout split: texto a la izquierda, imagen del modelo/artista a la derecha. Fondo `rose-blush`.

### Anatomía
```
┌─────────────────────────────────────────┐
│  [Eyebrow label]                        │
│  [H1 — Título principal]                │
│  [Subtítulo — 1-2 líneas]               │
│  [CTA Botón] [CTA secundario?]          │
│  [Elemento decorativo: caja/producto]   │
│                         [Foto modelo]   │
└─────────────────────────────────────────┘
```

### Especificaciones

| Propiedad          | Valor                                               |
|--------------------|-----------------------------------------------------|
| Min-height         | `calc(100svh - var(--nav-height))`                  |
| Background         | `rose-blush`                                        |
| Layout             | CSS Grid 12col, texto col 1–6, imagen col 7–12      |
| Padding-top        | `var(--nav-height)` + 48px                          |
| Padding-x          | `var(--section-padding-x)`                          |
| Overflow           | `hidden` (imagen puede sobresalir del contenedor)   |

### Texto (columna izquierda)

- **Eyebrow**: DM Sans 12px, weight 500, `tracking-widest`, `white` opacity 80%, MAYÚSCULAS
  - Ejemplo: "MANICURA ARTÍSTICA · [CIUDAD]"
- **H1**: Cormorant Garamond 60–72px (fluid), weight 400–500, `white`, `leading-tight`
  - Máximo 3 líneas en desktop
- **Subtítulo**: DM Sans 18px, weight 400, `white` opacity 85%, `leading-relaxed`
  - Máximo 2 líneas
- **CTA Area**: margin-top 40px

### Imagen (columna derecha)

- Fotografía del artista o de un trabajo destacado
- Ocupa toda la altura de la columna
- `object-fit: cover`, `object-position: center top`
- Puede sobresalir por la parte derecha y inferior del hero
- Forma: recortada con forma orgánica (clip-path curvo) o rectangular simple
- Sombra: `shadow-rose`

### Elemento Flotante (opcional)
Siguiendo la referencia: una imagen del producto/kit de manicura flotando en la esquina inferior izquierda. Posición `absolute`, rotación ligera (-8 a +8 grados), z-index `raised`.

### Mobile (< 768px)
- Layout stacked: texto arriba, imagen abajo
- Imagen: aspect ratio 3:4, ancho 100%
- H1: 36–42px
- Eliminar elemento flotante

---

## 3. Botón CTA

### Variantes

#### Primario (oscuro)
```
Fondo:        espresso (#261510)
Texto:        white
Padding:      14px 28px
Border-radius: full (9999px)
Font:         DM Sans 15px, weight 500, tracking 0.06em
Layout:       texto + ícono flecha →
Hover:        fondo mocha, flecha translateX(4px)
```

#### Primario Invertido (sobre fondo oscuro)
```
Fondo:        white
Texto:        espresso
Igual padding y border-radius
Hover:        fondo cream
```

#### Secundario / Outline
```
Fondo:        transparent
Borde:        1.5px solid currentColor
Texto:        hereda del padre
Hover:        fondo rgba(currentColor, 0.08)
```

### Estados
- **Default**: sin sombra
- **Hover**: sombra `shadow-sm`, ícono se desplaza
- **Active/Press**: escala `scale(0.97)`, transición 100ms
- **Disabled**: opacity 40%, cursor `not-allowed`
- **Loading**: spinner en lugar de flecha, pointer-events none

### Código de Referencia

```tsx
// components/ui/Button.tsx
type ButtonVariant = 'primary' | 'primary-inverse' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  showArrow?: boolean;
  isLoading?: boolean;
}

export function Button({
  variant = 'primary',
  showArrow = false,
  isLoading = false,
  children,
  ...props
}: ButtonProps) {
  // Implementación según la guía de estilo
}
```

---

## 4. Sección "Sobre Mí"

### Descripción
Sección de presentación personal de la artista. Layout split: bio + certificados a la izquierda, foto a la derecha. Fondo `white`.

### Anatomía
```
┌─────────────────────────────────────────────┐
│  [Eyebrow: SOBRE MÍ]                        │
│  [H2: Título de sección]                    │
│                                             │
│  [Bio texto — 3-4 párrafos]  [Foto]         │
│  [Lista de certificados]                    │
└─────────────────────────────────────────────┘
```

### Especificaciones

| Área           | Propiedad                                        |
|----------------|--------------------------------------------------|
| Sección        | Fondo `white`, padding `section-padding-y`       |
| H2             | Cormorant 42–48px, centrado, `espresso`          |
| Bio texto      | DM Sans 16px, `mocha`, max-width 480px           |
| Foto           | Aspect ratio 3:4, border-radius `2xl`            |
| Certificados   | Lista numerada, DM Sans 14px, `espresso`         |

### Certificados / Credenciales
```
Formato: "YYYY — [Nombre del curso / certificación]"
Estilo: lista ordenada, sin bullets estándar
Font: DM Sans 14px, weight 400
Color: espresso
Line-height: 1.8
Separador entre items: 8px
```

### Mobile
- Layout stacked: foto arriba, texto abajo
- Foto: ancho 100%, max-height 320px

---

## 5. Galería de Trabajos

### Descripción
Grid de imágenes de nail art. Puede tener variante de masonry o grid uniforme. Fondo `cream`. Título tipo "Summer Vibes" o por temporada/estilo.

### Layout — Grid Uniforme (recomendado)

```
Desktop: 4 columnas, gap 12px
Tablet:  3 columnas, gap 8px
Mobile:  2 columnas, gap 6px
```

### Layout — Grid Masonry (avanzado)

```css
columns: 4 / 3 / 2;
column-gap: 12px;
/* Cada imagen usa break-inside: avoid */
```

### Especificaciones por Imagen

| Propiedad          | Valor                                           |
|--------------------|-------------------------------------------------|
| Aspect ratio       | 1:1 (cuadrado)                                  |
| Object-fit         | cover                                           |
| Border-radius      | `radius-xl` (16px)                              |
| Hover              | scale 1.04, shadow-md, duración 300ms spring    |
| Overlay en hover   | gradiente oscuro sutil desde abajo              |
| Etiqueta en hover  | nombre de la técnica, fondo espresso 80% opac. |

### Filtros de Categoría (opcional)
```
Estilo: pills/chips horizontales
Fondo activo: espresso, texto white
Fondo inactivo: transparent, borde bone, texto mocha
Border-radius: full
Transición: 200ms
```

---

## 6. Tarjeta de Trabajo

### Descripción
Unidad de la galería. Muestra imagen del trabajo con overlay informativo al hacer hover.

### Estados

**Reposo:**
```
└── Contenedor (border-radius xl, overflow hidden)
    └── Imagen (100% width, aspect-ratio 1:1)
```

**Hover:**
```
└── Contenedor (shadow-md, scale 1.03)
    └── Imagen (scale 1.06, brightness 90%)
    └── Overlay (gradiente transparente → espresso 70%)
        └── Texto: nombre de técnica (14px, white, weight 500)
        └── Texto: "Ver más" (12px, white, opacity 70%)
```

### Código de Referencia

```tsx
// components/gallery/WorkCard.tsx
interface WorkCardProps {
  src: string;
  alt: string;
  technique: string;
  category?: string;
}

export function WorkCard({ src, alt, technique, category }: WorkCardProps) {
  return (
    <article
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        aspectRatio: '1 / 1',
        cursor: 'pointer',
      }}
    >
      {/* next/image con fill layout — revisar API de Next.js 16 */}
      {/* Overlay con información */}
    </article>
  );
}
```

---

## 7. Sección de Servicios / Features

### Descripción
Grid de iconos con razones para elegir a Lorena López o los servicios ofrecidos. Equivalente a la sección "10 razones por qué" de la referencia. Fondo `rose-blush` (sobre fondo oscuro) o `cream`.

### Anatomía
```
┌────────────────────────────────────────────────┐
│  [Eyebrow]                                     │
│  [H2: Título de sección]                       │
│                                                │
│  [Feature][Feature][Feature]                   │
│  [Feature][Feature][Feature]                   │
│  [Feature][Feature][Feature]                   │
└────────────────────────────────────────────────┘
```

### Grid
```
Desktop: 3 columnas, gap 24px
Tablet:  2 columnas, gap 20px
Mobile:  1 columna (cards horizontales)
```

---

## 8. Tarjeta de Feature

### Descripción
Tarjeta con ícono + título + descripción corta. Puede ir sobre `rose-blush` (texto blanco) o `white`/`cream` (texto oscuro).

### Variante sobre fondo claro

| Propiedad     | Valor                                              |
|---------------|----------------------------------------------------|
| Fondo         | `parchment`                                        |
| Borde         | 1px `bone`                                         |
| Border-radius | `2xl` (24px)                                       |
| Padding       | 24px                                               |
| Ícono         | 40px, color `mocha`                                |
| Título        | Cormorant 20px, weight 600, `espresso`             |
| Texto         | DM Sans 14px, `mocha`, leading-relaxed             |
| Hover         | sombra `shadow-sm`, translateY(-2px)               |

### Variante sobre fondo rose (hero features)

| Propiedad     | Valor                                              |
|---------------|----------------------------------------------------|
| Fondo         | `white` opacity 15% (glassmorphism sutil)          |
| Borde         | 1px `white` opacity 20%                            |
| Ícono         | color `blush-light`                                |
| Título        | Cormorant 20px, `white`                            |
| Texto         | DM Sans 14px, `white` opacity 80%                  |

---

## 9. Carrusel de Portfolio

### Descripción
Slider horizontal de imágenes de trabajos, con navegación por flechas. Mostrado en secciones como "Summer Vibes" con título y grid de hasta 6-8 imágenes visibles.

### Especificaciones

| Propiedad       | Valor                                               |
|-----------------|-----------------------------------------------------|
| Tipo            | Scroll snap horizontal (CSS puro, sin librería)     |
| Items visibles  | 3 desktop / 2 tablet / 1.5 mobile                   |
| Gap             | 12px                                                |
| Scroll snap     | `mandatory`, `start`                                |
| Flechas         | Circular, 40px, fondo `espresso`, ícono `white`     |
| Indicadores     | Dots pequeños, activo `espresso`, inactivo `bone`   |
| Autoplay        | NO (evitar accesibilidad issues)                    |

### Código CSS de Referencia

```css
.carousel-track {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  /* Ocultar scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.carousel-track::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  flex-shrink: 0;
  width: calc(33.33% - 8px); /* 3 items desktop */
  scroll-snap-align: start;
}
```

---

## 10. Formulario de Reserva

### Descripción
Formulario de contacto/reserva de cita. Puede ser modal o sección dedicada. Fondo `white` o `parchment`.

### Campos

| Campo              | Tipo      | Placeholder                    | Requerido |
|--------------------|-----------|--------------------------------|-----------|
| Nombre             | text      | "Tu nombre"                    | Sí        |
| Teléfono           | tel       | "+52 55 1234 5678"             | Sí        |
| Servicio           | select    | "¿Qué servicio deseas?"        | Sí        |
| Fecha preferida    | date      | —                              | No        |
| Mensaje            | textarea  | "¿Algún diseño en mente?"      | No        |

### Especificaciones de Campos

| Propiedad     | Valor                                                    |
|---------------|----------------------------------------------------------|
| Fondo         | `white`                                                  |
| Borde         | 1.5px `bone`                                             |
| Border-radius | `radius-lg` (12px)                                       |
| Padding       | 12px 16px                                                |
| Font          | DM Sans 16px, `espresso`                                 |
| Placeholder   | `dust`                                                   |
| Focus border  | `rose-blush`                                             |
| Focus ring    | `rose-blush` 2px, offset 2px                             |
| Error border  | rojo coral `#D4504A`                                     |
| Error text    | 12px, `#D4504A`                                          |

### Labels
- DM Sans 13px, weight 500, `espresso`
- Margin-bottom: 6px
- Los campos requeridos llevan `*` en `rose-blush`

### CTA del Formulario
- Botón primario ancho completo
- Texto: "Solicitar cita →"
- Loading state con spinner

### Validación
- Validación en tiempo real al perder focus (`onBlur`)
- Errores inline debajo de cada campo
- No bloquear el submit antes de que el usuario interactúe

---

## 11. Reseñas / Testimonios

### Descripción
Sección de reseñas de clientes. Puede ser carrusel o grid. Fondo `white`.

### Tarjeta de Reseña

| Propiedad     | Valor                                              |
|---------------|----------------------------------------------------|
| Fondo         | `parchment`                                        |
| Borde         | 1px `bone`                                         |
| Border-radius | `2xl` (24px)                                       |
| Padding       | 24px 28px                                          |
| Rating stars  | 5 estrellas, color `rose-blush`, tamaño 16px       |
| Texto reseña  | Cormorant italic 18px, `espresso`, leading-relaxed |
| Autor         | DM Sans 14px, weight 500, `mocha`                  |
| Fecha         | DM Sans 12px, `dust`                               |

### Cita decorativa
- Símbolo `"` de apertura: Cormorant 80px, `blush-light`, posición absolute top-left de la tarjeta

---

## 12. Footer

### Descripción
Pie de página con información de contacto, navegación rápida y redes sociales. Fondo `espresso`, texto en tonos claros.

### Anatomía
```
┌─────────────────────────────────────────────────┐
│  [Logo + tagline]   [Nav]   [Contacto]          │
│  [Redes sociales]                               │
│  ─────────────────────────────────────────────  │
│  [© Lorena López YYYY]   [Política privacidad]  │
└─────────────────────────────────────────────────┘
```

### Especificaciones

| Propiedad     | Valor                                             |
|---------------|---------------------------------------------------|
| Fondo         | `espresso`                                        |
| Texto títulos | Cormorant 16px, weight 500, `blush-pale`          |
| Texto links   | DM Sans 14px, `dust` → hover `white`              |
| Separador     | `mocha` opacity 30%                               |
| Padding-y     | 64px                                              |
| Padding-x     | `section-padding-x`                               |
| Copyright     | DM Sans 13px, `dust`                              |

### Contacto
- WhatsApp: link `https://wa.me/...`
- Instagram: @handle con enlace
- Ubicación: Ciudad/Zona (sin dirección exacta si no aplica)
- Horario: "Lunes a sábado, 10am–7pm"

---

## Notas de Implementación

### Imports de Fuentes (Next.js 16)
Consultar `node_modules/next/dist/docs/` para la API actualizada de `next/font`. La implementación puede diferir del patrón de Next.js 14/15.

### Imágenes (next/image)
- Revisar la API de `next/image` en Next.js 16 — puede haber cambios en props como `fill`, `sizes`, etc.
- Usar siempre el componente `Image` de Next.js para optimización automática
- Configurar los dominios de imágenes externas en `next.config.ts`

### CSS y Tailwind v4
- En Tailwind CSS v4, **NO existe `tailwind.config.js`** para tokens — todo se configura en CSS usando `@theme {}`.
- Los tokens de `tokens.css` deben importarse en `globals.css`:
  ```css
  @import "tailwindcss";
  @import "./tokens.css"; /* ajustar ruta relativa */
  ```
- Las clases de utilidad se generan automáticamente desde los tokens del `@theme`.

### Animaciones con `prefers-reduced-motion`
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Server vs Client Components
- Componentes de UI estáticos → Server Components (por defecto en Next.js)
- Componentes con estado, eventos, `useEffect` → `'use client'`
- Consultar la documentación de Next.js 16 para reglas actualizadas de RSC.
