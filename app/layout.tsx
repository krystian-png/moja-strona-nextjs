import './globals.css';
import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Zmiana KRS — strona testowa',
  description: 'Szkielet strony w Next.js (preview).',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-dvh antialiased bg-white text-gray-900">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
