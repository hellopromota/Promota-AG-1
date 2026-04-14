import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Promota — 360° Digital Marketing Agency | Bareilly',
  description: 'Promota is a full-service digital marketing agency from Bareilly. We offer social media marketing, web development, SaaS solutions, AI agents, SEO, and paid advertising to help your brand grow online.',
  keywords: 'digital marketing, social media marketing, web development, SaaS, AI agents, SEO, paid advertising, Bareilly, India',
  openGraph: {
    title: 'Promota — 360° Digital Marketing Agency',
    description: 'Grow your brand with 360° digital marketing solutions. Social media, web dev, SaaS, AI agents, SEO & more.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
