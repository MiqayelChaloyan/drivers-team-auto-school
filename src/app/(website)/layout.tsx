import { Suspense } from 'react';

import type { Metadata } from 'next';

import { Layout as ThemeProvider } from '@/src/context';

import { StoreProvider } from '@/src/reducer/provider';

import NavBar from '@/src/components/components/NavBar';
import Footer from '@/src/components/components/Footer';
import FormModal from '@/src/components/components/FormModal';
import Modal from '@/src/components/components/Modal';
import ScrollBackToTop from '@/src/components/components/ScrollBackToTop';

import { getContact, getFooterTexts, getRedirectPath } from '@/src/utils/data';

import CacheProvider from 'react-inlinesvg/provider';

import { Mardoto } from '@/src/constants/font';

import { defaultMetadata } from '@/src/utils/default-metadata';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/src/styles/globals.css';


export const metadata: Metadata = defaultMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contact = await getContact();
  const redirects = await getRedirectPath();
  const texts = await getFooterTexts();

  return (
    <html lang='am' className={Mardoto.className}>
      <body>
        <StoreProvider>
          <CacheProvider>
            <ThemeProvider>
              <Modal />
              <FormModal />
              <ScrollBackToTop />
              <NavBar contact={contact} />
              <Suspense>
                {children}
              </Suspense>
              <Footer
                contact={contact}
                redirects={redirects}
                texts={texts}
              />
            </ThemeProvider>
          </CacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
};
