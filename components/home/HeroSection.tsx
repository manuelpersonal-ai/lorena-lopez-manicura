import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/config';

export function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'var(--hero-min-height)',
        backgroundColor: 'var(--color-rose-blush)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background image */}
      <Image
        src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(105deg, var(--color-rose-blush) 45%, rgba(240,98,146,0.55) 70%, transparent 100%)',
        }}
        aria-hidden
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 'var(--container-xl)',
          margin: '0 auto',
          padding: '5rem var(--section-padding-x)',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '580px' }}>
          {/* Eyebrow */}
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.8)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              animation: 'fadeInUp 500ms ease-out both',
              animationDelay: '0ms',
            }}
          >
            {SITE_CONFIG.location} · {SITE_CONFIG.province}
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'white',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              animation: 'fadeInUp 500ms ease-out both',
              animationDelay: '80ms',
            }}
          >
            Arte en cada detalle.
            <br />
            <em>Manicura que te define.</em>
          </h1>

          {/* Subtítulo */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: 'rgba(255,255,255,0.87)',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
              maxWidth: '440px',
              animation: 'fadeInUp 500ms ease-out both',
              animationDelay: '200ms',
            }}
          >
            Semipermanente, soft gel, nail art personalizado y mucho más.
            Hecho con dedicación en mi estudio de Berazategui.
          </p>

          {/* CTAs */}
          <div
            className="hero-ctas"
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'nowrap',
              animation: 'fadeInUp 500ms ease-out both',
              animationDelay: '320ms',
            }}
          >
            <Button href="/contacto" variant="primary" showArrow>
              Reservar turno
            </Button>
            <Button href="/servicios" variant="primary-inverse">
              Ver servicios
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
