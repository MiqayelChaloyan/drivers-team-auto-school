import type { Metadata } from 'next';

import { Layout as ThemeProvider } from '@/src/context';

import { StoreProvider } from '@/src/reducer/provider';

import NavBar from '@/src/components/components/NavBar';
import Footer from '@/src/components/components/Footer';
import ScrollBackToTop from '@/src/components/components/ScrollBackToTop';
import Snackbar from '@/src/components/components/Snackbar';
import CacheProvider from 'react-inlinesvg/provider';

import { defaultMetadata } from '@/src/utils/default-metadata';

import '@/src/styles/globals.css';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='am'>
      <body>
        <StoreProvider>
          <CacheProvider>
            <ThemeProvider>
              {/* <Snackbar /> */}
              <ScrollBackToTop />
              <NavBar />
              {children}
              <Footer />
            </ThemeProvider>
          </CacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
};
