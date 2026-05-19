import { getGalleryImages } from '@/lib/gallery';
import { PhotoGrid } from '@/components/gallery/PhotoGrid';

export const metadata = {
  title: 'Mis Trabajos | Lorena López Manicura',
  description:
    'Galería de trabajos de manicura: semipermanente, soft gel, nail art y más. Mirá los diseños y reservá tu turno.',
};

export default function TrabajosPage() {
  const images = getGalleryImages();

  return (
    <>
      {/* Page header */}
      <div
        style={{
          backgroundColor: 'var(--color-rose-blush)',
          padding: '4rem var(--section-padding-x) 3rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '0.75rem',
          }}
        >
          Portfolio
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: 'white',
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Mis Trabajos
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '440px',
            margin: '0 auto',
            lineHeight: 1.65,
          }}
        >
          {images.length} diseños únicos. Hacé clic en cualquier foto para verla en detalle.
        </p>
      </div>

      {/* Gallery */}
      <section
        style={{
          padding: '2rem var(--section-padding-x)',
          maxWidth: 'var(--container-wide)',
          margin: '0 auto',
        }}
      >
        <PhotoGrid images={images} />
      </section>
    </>
  );
}
