import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gehad Qabel • Software Developer | Desktop Applications & ERP Systems',
  description: 'Portfolio of Gehad Qabel - Software Developer focused on building reliable Windows desktop applications, offline-first POS systems, ERP platforms, and database-driven business solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
