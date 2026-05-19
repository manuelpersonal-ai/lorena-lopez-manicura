export const SITE_CONFIG = {
  name: 'Lorena López Manicura',
  tagline: 'Arte en cada detalle',
  location: 'Barrio Juan María Gutiérrez, Berazategui',
  province: 'Buenos Aires',
  schedule: 'Lunes a sábado, 9:00 – 18:00 hs',

  // Reemplazar antes de publicar
  whatsapp: '5491154812048',
  instagram: 'lorelopez_manicura',
  instagramUrl: 'https://www.instagram.com/lorelopez_manicura?igsh=MW00b3J4bDV4ZzVzeQ==',
  facebook: 'Lorena López Manicura',
  facebookUrl: 'https://www.facebook.com/share/14XZZ9iHF6T/',
} as const;

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${SITE_CONFIG.whatsapp}`;
  return message
    ? `${base}?text=${encodeURIComponent(message)}`
    : base;
}
