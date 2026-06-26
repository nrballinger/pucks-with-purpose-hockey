import './globals.css';

export const metadata = {
  title: 'Pucks With Purpose Hockey | Play Hard. Give Back.',
  description: 'Competitive adult hockey tournaments benefiting local charities and community causes.',
  metadataBase: new URL('https://puckswithpurposehockey.com'),
  openGraph: {
    title: 'Pucks With Purpose Hockey',
    description: 'Play Hard. Give Back. Adult hockey tournaments benefiting local charities.',
    url: 'https://puckswithpurposehockey.com',
    siteName: 'Pucks With Purpose Hockey',
    images: ['/images/pwp-logo.png'],
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
