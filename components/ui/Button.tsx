'use client';

import Link from 'next/link';
import { type ReactNode } from 'react';

type Variant = 'primary' | 'primary-inverse' | 'outline';

interface ButtonProps {
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[var(--color-espresso)] text-white hover:bg-[var(--color-mocha)]',
  'primary-inverse':
    'bg-white text-[var(--color-espresso)] hover:bg-[var(--color-cream)]',
  outline:
    'bg-transparent border border-current hover:bg-[color-mix(in_srgb,currentColor_8%,transparent)]',
};

const base =
  'inline-flex items-center gap-2 rounded-full px-7 py-[0.875rem] text-sm font-medium tracking-wide transition-all duration-[250ms] ease-out disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--color-rose-blush)] focus-visible:outline-offset-2';

export function Button({
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  disabled,
  showArrow = false,
  children,
  className = '',
}: ButtonProps) {
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <span
          className="transition-transform duration-[250ms] group-hover:translate-x-1"
          aria-hidden
        >
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${classes}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${classes}`}
    >
      {content}
    </button>
  );
}
