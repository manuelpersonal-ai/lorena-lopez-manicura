'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/lib/types';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const current = images[currentIndex];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (!current) return null;

  const btnBase: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(38,21,16,0.7)',
    border: 'none',
    borderRadius: '9999px',
    width: '48px',
    height: '48px',
    color: 'white',
    fontSize: '1.25rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 200ms',
    zIndex: 1,
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Imagen ${currentIndex + 1} de ${images.length}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-modal)',
        backgroundColor: 'rgba(38,21,16,0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      {/* Image container */}
      <div
        style={{
          position: 'relative',
          width: '90vw',
          maxWidth: '900px',
          height: '85vh',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="90vw"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Cerrar"
        style={{
          position: 'fixed',
          top: '1.25rem',
          right: '1.25rem',
          background: 'rgba(38,21,16,0.7)',
          border: 'none',
          borderRadius: '9999px',
          width: '40px',
          height: '40px',
          color: 'white',
          fontSize: '1.125rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        ×
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Imagen anterior"
          style={{ ...btnBase, left: 'max(1rem, 5vw)' }}
        >
          ←
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Imagen siguiente"
          style={{ ...btnBase, right: 'max(1rem, 5vw)' }}
        >
          →
        </button>
      )}

      {/* Counter */}
      <div
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.8125rem',
          letterSpacing: '0.06em',
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
