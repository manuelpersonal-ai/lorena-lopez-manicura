'use client';

import Link from 'next/link';
import { SITE_CONFIG, getWhatsAppUrl } from '@/lib/config';

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Mis servicios', href: '/servicios' },
  { label: 'Mis trabajos', href: '/trabajos' },
  { label: 'Contacto', href: '/contacto' },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-espresso)',
        color: 'var(--color-dust)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-xl)',
          margin: '0 auto',
          padding: '0 var(--section-padding-x)',
        }}
      >
        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(110,64,56,0.3)',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M10 1L11.8 7.2L18 9L11.8 10.8L10 17L8.2 10.8L2 9L8.2 7.2L10 1Z"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--color-blush-pale)',
                }}
              >
                {SITE_CONFIG.name}
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              {SITE_CONFIG.tagline}.
              <br />
              {SITE_CONFIG.location},<br />
              {SITE_CONFIG.province}.
            </p>
            <p style={{ fontSize: '0.8125rem' }}>{SITE_CONFIG.schedule}</p>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-blush-pale)',
              }}
            >
              Páginas
            </p>
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-dust)',
                  textDecoration: 'none',
                  transition: 'color 150ms',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'white')}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--color-dust)')
                }
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-blush-pale)',
              }}
            >
              Contacto
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-dust)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 150ms',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'white')}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--color-dust)')
              }
            >
              WhatsApp
            </a>
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-dust)',
                textDecoration: 'none',
                transition: 'color 150ms',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'white')}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--color-dust)')
              }
            >
              {SITE_CONFIG.instagram}
            </a>
            <a
              href={SITE_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-dust)',
                textDecoration: 'none',
                transition: 'color 150ms',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'white')}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--color-dust)')
              }
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p
          style={{
            marginTop: '2rem',
            fontSize: '0.8125rem',
            textAlign: 'center',
          }}
        >
          © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
