import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Footer } from './_components';

const DMSans = DM_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-dm_sans',
});

export const metadata: Metadata = {
  title: 'DevopsGPT',
  description:
    'An AI-powered assistant that simplifies DevOps tasks with intelligent prompts, reducing repetitive work and enhancing productivity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DMSans.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
