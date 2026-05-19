'use client';

import { SITE_CONFIG, getWhatsAppUrl } from '@/lib/config';

interface InfoItemProps {
  label: string;
  children: React.ReactNode;
}

function InfoItem({ label, children }: InfoItemProps) {
  return (
    <div>
      <p
        style={{
          fontSize: '0.6875rem',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--color-dust)',
          marginBottom: '0.375rem',
        }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

export function ContactInfo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 400,
            color: 'var(--color-espresso)',
            letterSpacing: '-0.015em',
            marginBottom: '0.75rem',
          }}
        >
          Contacto directo
        </h2>
        <p
          style={{
            fontSize: '1rem',
            color: 'var(--color-mocha)',
            lineHeight: 1.65,
          }}
        >
          Escribime por WhatsApp o seguime en redes para ver los últimos diseños.
        </p>
      </div>

      {/* WhatsApp */}
      <InfoItem label="WhatsApp">
        <a
          href={getWhatsAppUrl('Hola Lorena! Te quiero consultar sobre turnos.')}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.625rem',
            backgroundColor: '#25D366',
            color: 'white',
            padding: '0.65rem 1.25rem',
            borderRadius: '9999px',
            fontSize: '0.9375rem',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'filter 200ms',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.filter = 'brightness(0.9)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.filter = 'none')
          }
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Escribir por WhatsApp
        </a>
      </InfoItem>

      {/* Instagram */}
      <InfoItem label="Instagram">
        <a
          href={SITE_CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '1rem',
            color: 'var(--color-espresso)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 150ms',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = 'var(--color-rose-deep)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = 'var(--color-espresso)')
          }
        >
          {SITE_CONFIG.instagram}
        </a>
      </InfoItem>

      {/* Facebook */}
      <InfoItem label="Facebook">
        <a
          href={SITE_CONFIG.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '1rem',
            color: 'var(--color-espresso)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 150ms',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = 'var(--color-rose-deep)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = 'var(--color-espresso)')
          }
        >
          {SITE_CONFIG.facebook}
        </a>
      </InfoItem>

      {/* Dirección y horario */}
      <InfoItem label="Ubicación">
        <p style={{ fontSize: '1rem', color: 'var(--color-espresso)', lineHeight: 1.6 }}>
          {SITE_CONFIG.location},
          <br />
          {SITE_CONFIG.province}
        </p>
      </InfoItem>

      <InfoItem label="Horario de atención">
        <p style={{ fontSize: '1rem', color: 'var(--color-espresso)' }}>
          {SITE_CONFIG.schedule}
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-mocha)', marginTop: '0.25rem' }}>
          Solo con turno previo
        </p>
      </InfoItem>
    </div>
  );
}
