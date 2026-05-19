export const SITE_CONFIG = {
  name: 'Lorena López Manicura',
  tagline: 'Arte en cada detalle',
  location: 'Barrio Juan María Gutiérrez, Berazategui',
  province: 'Buenos Aires',
  schedule: 'Lunes a sábado, 9:00 – 18:00 hs',

  // Reemplazar antes de publicar
  whatsapp: '5491100000000',
  instagram: '@lorena.manicura',
  instagramUrl: 'https://instagram.com/lorena.manicura',
  facebook: 'Lorena López Manicura',
  facebookUrl: 'https://facebook.com/lorenamanicura',
} as const;

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${SITE_CONFIG.whatsapp}`;
  return message
    ? `${base}?text=${encodeURIComponent(message)}`
    : base;
}
