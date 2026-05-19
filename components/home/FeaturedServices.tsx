'use client';

import Link from 'next/link';
import { type Service } from '@/lib/types';
import { formatPrice } from '@/lib/format';

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  'Más pedido': { bg: 'var(--color-rose-blush)', text: 'white' },
  'Sin cargo': { bg: 'var(--color-sage)', text: 'white' },
  'Pedir cotización': { bg: 'var(--color-mocha)', text: 'white' },
};

interface FeaturedServicesProps {
  featured: Service[];
}

export function FeaturedServices({ featured }: FeaturedServicesProps) {
  if (featured.length === 0) return null;

  return (
    <section
      style={{
        backgroundColor: 'var(--color-cream)',
        padding: 'var(--section-padding-y) var(--section-padding-x)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-dust)',
              marginBottom: '0.75rem',
            }}
          >
            Servicios
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 400,
              color: 'var(--color-espresso)',
              letterSpacing: '-0.015em',
            }}
          >
            Los más pedidos
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {featured.map((service) => {
            const colors = service.badge ? BADGE_COLORS[service.badge] : null;
            return (
              <div
                key={`${service.categoria}-${service.sub_categoria}-${service.nombre}`}
                style={{
                  backgroundColor: 'var(--color-parchment)',
                  border: '1px solid var(--color-bone)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  transition: 'box-shadow 250ms, transform 250ms',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = 'var(--shadow-md)';
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = 'none';
                  el.style.transform = 'none';
                }}
              >
                {/* Category eyebrow */}
                <p
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-dust)',
                  }}
                >
                  {service.categoria}
                  {service.sub_categoria ? ` · ${service.sub_categoria}` : ''}
                </p>

                {/* Service name */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 500,
                    color: 'var(--color-espresso)',
                    lineHeight: 1.25,
                  }}
                >
                  {service.nombre}
                </h3>

                {/* Price + badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                    paddingTop: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      color: 'var(--color-espresso)',
                    }}
                  >
                    {formatPrice(service.precio)}
                  </span>
                  {colors && service.badge && (
                    <span
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.text,
                        fontSize: '0.6875rem',
                        fontWeight: 500,
                        letterSpacing: '0.06em',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {service.badge}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to all services */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/servicios"
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-mocha)',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              letterSpacing: '0.02em',
            }}
          >
            Ver todos los servicios →
          </Link>
        </div>
      </div>
    </section>
  );
}
