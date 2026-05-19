import fs from 'fs';
import path from 'path';
import type { GalleryImage } from './types';

export type { GalleryImage } from './types';

export function getGalleryImages(): GalleryImage[] {
  const imagesDir = path.join(process.cwd(), 'public', 'images');

  return fs
    .readdirSync(imagesDir)
    .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
    .sort()
    .map((filename, index) => ({
      filename,
      src: `/images/${encodeURIComponent(filename)}`,
      alt: `Trabajo de manicura ${index + 1}`,
    }));
}
