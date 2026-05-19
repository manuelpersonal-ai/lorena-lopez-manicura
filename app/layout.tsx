import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lorena López Manicura | Berazategui',
  description:
    'Estudio de manicura profesional en el barrio Juan María Gutiérrez, Berazategui. Semipermanente, soft gel, kapping, nail art y más. Reservá tu turno.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="flex flex-col min-h-svh antialiased">
        <Navbar />
        <main className="flex-1 pt-[var(--nav-height)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
