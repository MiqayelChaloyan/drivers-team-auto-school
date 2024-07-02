import type { Metadata } from 'next';

// import { Inter } from 'next/font/google';

import { Layout as ThemeProvider } from '@/context';

import NavBar from '@/components/components/NavBar';
import Footer from '@/components/components/Footer';
import ScrollBackToTop from '@/components/components/ScrollBackToTop';

import { defaultMetadata } from '@/utils/default-metadata';

import '@/styles/globals.css';
// import Snackbar from '@/components/components/Snackbar';


// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>
          {/* <Snackbar/> */}
          <ScrollBackToTop/>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
