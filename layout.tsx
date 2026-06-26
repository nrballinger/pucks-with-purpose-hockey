import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pucks With Purpose Hockey',
  description: 'Competitive adult hockey tournaments benefiting local charities.',
  openGraph: {
    title: 'Pucks With Purpose Hockey',
    description: 'Play Hard. Give Back.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
