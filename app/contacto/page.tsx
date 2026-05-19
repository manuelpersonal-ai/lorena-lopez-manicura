import { BookingForm } from '@/components/contact/BookingForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Contacto y Reservas | Lorena López Manicura',
  description:
    'Reservá tu turno de manicura en Berazategui. Completá el formulario y te respondo por WhatsApp.',
};

export default function ContactoPage() {
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
          Reservas y consultas
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
          Contacto
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
          Completá el formulario y te mando el mensaje directo a WhatsApp.
        </p>
      </div>

      {/* Content */}
      <section
        style={{
          padding: 'var(--section-padding-y) var(--section-padding-x)',
          maxWidth: 'var(--container-xl)',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
            alignItems: 'start',
          }}
        >
          {/* Form */}
          <div
            style={{
              backgroundColor: 'var(--color-parchment)',
              border: '1px solid var(--color-bone)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--color-espresso)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.015em',
              }}
            >
              Solicitar turno
            </h2>
            <BookingForm />
          </div>

          {/* Contact info */}
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
