'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Lightbox } from './Lightbox';
import type { GalleryImage } from '@/lib/types';

interface PhotoGridProps {
  images: GalleryImage[];
}

export function PhotoGrid({ images }: PhotoGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <div className="photo-grid">
        {images.map((img, index) => (
          <button
            key={img.filename}
            className="photo-btn"
            onClick={() => setActiveIndex(index)}
            aria-label={img.alt}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 480px) 50vw, (max-width: 1024px) 33vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="photo-overlay" aria-hidden>
              ⊕
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
