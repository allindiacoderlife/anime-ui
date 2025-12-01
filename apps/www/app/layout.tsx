import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Anime UI - GSAP-powered React Components',
  description: 'Beautiful, production-ready React components powered by GSAP animations. Copy, paste, and customize.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Anime UI - GSAP-powered React Components',
    description: 'Beautiful, production-ready React components powered by GSAP animations',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anime UI - GSAP-powered React Components',
    description: 'Beautiful, production-ready React components powered by GSAP animations',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        cz-shortcut-listen="true"
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
