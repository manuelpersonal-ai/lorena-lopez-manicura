'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/config';

const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Mis servicios', href: '/servicios' },
  { label: 'Mis trabajos', href: '/trabajos' },
  { label: 'Contacto', href: '/contacto' },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-height)',
          backgroundColor: 'var(--color-rose-blush)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          padding: '0 var(--section-padding-x)',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
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
              color: 'white',
            }}
          >
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Links — visibilidad controlada por clase CSS (globals.css) */}
        <nav
          style={{
            gap: '1.75rem',
            alignItems: 'center',
          }}
          className="nav-links"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                color: 'rgba(255,255,255,0.88)',
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contacto"
            style={{
              backgroundColor: 'var(--color-espresso)',
              color: 'white',
              padding: '0.45rem 1.1rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Reservar turno
          </Link>
        </nav>

        {/* Hamburger — visibilidad controlada por clase CSS (globals.css) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="nav-burger"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'white' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'white' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'white' }} />
        </button>
      </header>

      {/* Drawer mobile */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
          }}
        >
          <div
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(38,21,16,0.5)',
            }}
          />
          <nav
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '280px',
              background: 'var(--color-espresso)',
              padding: '5rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  color: 'white',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              style={{
                marginTop: '1rem',
                background: 'var(--color-rose-blush)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Reservar turno →
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
