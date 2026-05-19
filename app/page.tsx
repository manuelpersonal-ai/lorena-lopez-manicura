import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedServices } from '@/components/home/FeaturedServices';
import { Button } from '@/components/ui/Button';
import { getFeaturedServices } from '@/lib/services';

export default function HomePage() {
  const featured = getFeaturedServices();
  return (
    <>
      <HeroSection />
      <FeaturedServices featured={featured} />

      {/* Mini CTA de cierre */}
      <section
        style={{
          backgroundColor: 'var(--color-parchment)',
          padding: 'var(--section-padding-y) var(--section-padding-x)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 400,
              color: 'var(--color-espresso)',
              marginBottom: '1rem',
              letterSpacing: '-0.015em',
            }}
          >
            ¿Lista para lucir uñas increíbles?
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--color-mocha)',
              lineHeight: 1.65,
              marginBottom: '2rem',
            }}
          >
            Escribime y acordamos tu turno. Atiendo de lunes a sábado, con cita previa.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Button href="/contacto" variant="primary" showArrow>
              Reservar turno
            </Button>
            <Button href="/servicios" variant="outline">
              Ver servicios
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
