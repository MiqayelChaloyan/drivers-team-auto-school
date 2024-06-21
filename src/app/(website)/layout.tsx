import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import NavBar from '@/components/components/NavBar';
import Footer from '@/components/components/Footer';
import ScrollBackToTop from '@/components/components/ScrollBackToTop';

import { defaultMetadata } from '@/utils/default-metadata';

import '@/styles/globals.css';



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang='en'>
        <body className={inter.className}>
          <NavBar />
          {/* <ScrollBackToTop /> */}
          {children}
          <Footer />
        </body>
      </html>
  );
}
