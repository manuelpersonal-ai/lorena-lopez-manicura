'use client';

import { type CategoryGroup } from '@/lib/types';
import { formatPrice } from '@/lib/format';

const BADGE_STYLES: Record<string, { bg: string; color: string }> = {
  'Más pedido': { bg: 'var(--color-rose-blush)', color: 'white' },
  'Sin cargo': { bg: 'var(--color-sage)', color: 'white' },
  'Pedir cotización': { bg: 'var(--color-mocha)', color: 'white' },
};

const SECTION_BACKGROUNDS = ['white', 'var(--color-cream)'] as const;

function PriceDisplay({ precio, badge }: { precio: number; badge: string | null }) {
  if (badge === 'Sin cargo') {
    return (
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.125rem',
          fontWeight: 500,
          color: 'var(--color-sage)',
        }}
      >
        Sin cargo
      </span>
    );
  }
  if (badge === 'Pedir cotización') {
    return (
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.125rem',
          fontWeight: 500,
          color: 'var(--color-mocha)',
          fontStyle: 'italic',
        }}
      >
        Consultar precio
      </span>
    );
  }
  if (precio === 0) {
    return (
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-dust)' }}>
        Incluido
      </span>
    );
  }
  return (
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        fontWeight: 600,
        color: 'var(--color-espresso)',
      }}
    >
      {formatPrice(precio)}
    </span>
  );
}

function ServiceCard({ service }: { service: CategoryGroup['subGroups'][0]['services'][0] }) {
  const badgeStyle = service.badge ? BADGE_STYLES[service.badge] : null;

  return (
    <article
      style={{
        backgroundColor: 'var(--color-parchment)',
        border: '1px solid var(--color-bone)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        transition: 'box-shadow 250ms, transform 250ms',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = 'var(--shadow-sm)';
        el.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = 'none';
        el.style.transform = 'none';
      }}
    >
      {/* Badge */}
      {badgeStyle && service.badge && (
        <span
          style={{
            alignSelf: 'flex-start',
            backgroundColor: badgeStyle.bg,
            color: badgeStyle.color,
            fontSize: '0.625rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '0.2rem 0.6rem',
            borderRadius: '9999px',
          }}
        >
          {service.badge}
        </span>
      )}

      {/* Name */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontWeight: 500,
          color: 'var(--color-espresso)',
          lineHeight: 1.25,
        }}
      >
        {service.nombre}
      </h3>

      {/* Description */}
      {service.descripcion && (
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-mocha)',
            lineHeight: 1.5,
            flexGrow: 1,
          }}
        >
          {service.descripcion}
        </p>
      )}

      {/* Price */}
      <div style={{ marginTop: '0.5rem' }}>
        <PriceDisplay precio={service.precio} badge={service.badge} />
      </div>
    </article>
  );
}

interface ServicesListProps {
  categories: CategoryGroup[];
}

export function ServicesList({ categories }: ServicesListProps) {
  return (
    <div>
      {categories.map((cat, catIndex) => (
        <section
          key={cat.categoria}
          id={cat.categoria.toLowerCase().replace(/\s+/g, '-')}
          style={{
            backgroundColor: SECTION_BACKGROUNDS[catIndex % 2],
            padding: 'var(--section-padding-y) var(--section-padding-x)',
          }}
        >
          <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
            {/* Category title */}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 400,
                color: 'var(--color-espresso)',
                letterSpacing: '-0.015em',
                marginBottom: '2rem',
              }}
            >
              {cat.categoria}
            </h2>

            {/* Sub-groups */}
            {cat.subGroups.map((sub) => (
              <div key={sub.sub_categoria || 'main'} style={{ marginBottom: '2.5rem' }}>
                {/* Sub-category label */}
                {sub.sub_categoria && (
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--color-dust)',
                      marginBottom: '1rem',
                    }}
                  >
                    {sub.sub_categoria}
                  </p>
                )}

                {/* Services grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {sub.services.map((service) => (
                    <ServiceCard key={`${service.sub_categoria}-${service.nombre}`} service={service} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
