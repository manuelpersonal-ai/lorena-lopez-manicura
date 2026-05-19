import { ServicesList } from '@/components/services/ServicesList';
import { getServicesByCategory } from '@/lib/services';

export const metadata = {
  title: 'Mis Servicios | Lorena López Manicura',
  description:
    'Todos los servicios de manicura: semipermanente, soft gel, kapping, nail art, belleza de pies y retiros. Precios en pesos argentinos.',
};

export default function ServiciosPage() {
  const categories = getServicesByCategory();

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
          Lorena López Manicura
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
          Mis Servicios
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.65,
          }}
        >
          Todos los trabajos incluyen diseño de base. Los precios son en pesos argentinos.
        </p>
      </div>

      <ServicesList categories={categories} />
    </>
  );
}
