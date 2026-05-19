# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

# Idioma
Comunicarse exclusivamente en español en todas las respuestas.

---

## Comandos

```bash
npm run dev      # servidor de desarrollo (puerto 3000)
npm run build    # build de producción — verificar que pasa sin errores TS
npm run lint     # ESLint sobre todo el proyecto
npm run start    # servidor de producción (requiere build previo)
```

No hay tests automatizados en este proyecto.

---

## Arquitectura

**Next.js 16 App Router** con 4 rutas: `/`, `/servicios`, `/trabajos`, `/contacto`.

### Separación server / client — regla crítica

`lib/services.ts` y `lib/gallery.ts` usan `import fs from 'fs'` y son **exclusivamente server-side**. Nunca importarlos en Client Components.

El patrón correcto para compartir tipos con el cliente:

| Archivo | Uso |
|---|---|
| `lib/types.ts` | Tipos puros — seguro en Client Components |
| `lib/format.ts` | `formatPrice()` — seguro en Client Components |
| `lib/services.ts` | Lee el CSV con `fs` — solo Server Components |
| `lib/gallery.ts` | Lista `public/images/` con `fs` — solo Server Components |
| `lib/config.ts` | `SITE_CONFIG`, `getWhatsAppUrl()` — seguro en ambos |

El flujo es: Server Component llama a `lib/services.ts` o `lib/gallery.ts`, luego pasa los datos como props al Client Component correspondiente.

### Tailwind CSS v4

Los tokens **no** están en `tailwind.config.js`. Están en `docs/design/tokens.css` dentro de un bloque `@theme {}`, importado en `app/globals.css`. Para agregar o modificar tokens, editar ese archivo.

Las utilidades responsivas de Tailwind pueden no funcionar de forma confiable. Preferir media queries CSS cuando sea necesario.

### React 19 — consideraciones

- Los tags `<style>` dentro de componentes son elevados al `<head>` por React 19, causando mismatches de hidratación. Las reglas CSS deben ir en `app/globals.css`, nunca con `dangerouslySetInnerHTML` dentro de componentes.
- Los componentes con event handlers (`onClick`, `onMouseEnter`, etc.) requieren `'use client'` en la primera línea.

---

## Capa de datos

**Servicios**: `docs/services-items.csv` parseado manualmente en `lib/services.ts`. Las filas 2-3 del CSV tienen 5 campos (sin descripción); las demás tienen 6. El parser detecta badges por el campo `badge` del CSV o por palabras en la descripción.

**Galería**: `public/images/` listado con `fs.readdirSync` en `lib/gallery.ts`. Las imágenes son `.jpeg` reales (fotos de trabajos de la clienta).

**Fuentes**: Cormorant Garamond + DM Sans cargadas con `next/font/google` en `app/layout.tsx`, expuestas como variables CSS `--font-display` y `--font-body`.

**Imágenes externas**: Solo `images.pexels.com` está permitido en `next.config.ts` (`remotePatterns`).

---

## Datos de contacto (placeholders)

Todos centralizados en `lib/config.ts`. Reemplazar antes de publicar:

- `whatsapp`: `'5491100000000'`
- `instagram` / `instagramUrl`: `'@lorena.manicura'`
- `facebook` / `facebookUrl`: `'lorenamanicura'`

El formulario de contacto genera un link `wa.me/...` con el texto pre-armado y lo abre en nueva pestaña. No hay backend.
