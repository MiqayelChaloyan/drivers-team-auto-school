import { Suspense } from 'react';

import type { Metadata } from 'next';

import { notFound } from 'next/navigation';

import { Layout as ThemeProvider } from '@/src/context';

import { StoreProvider } from '@/src/reducer/provider';

import NavBar from '@/src/components/components/NavBar';
import Footer from '@/src/components/components/Footer';
import FormModal from '@/src/components/components/FormModal';
import Modal from '@/src/components/components/Modal';
import ScrollBackToTop from '@/src/components/components/ScrollBackToTop';

import { getContact, getFooterTexts, getRedirectPath, getSiteMeta } from '@/src/utils/data';

import { ImagePath } from '@/src/types';
import { urlForImage } from '@/sanity/lib/imageUrlBuilder';
import { generateMetadataDynamic } from '@/src/utils/default-metadata';

import CacheProvider from 'react-inlinesvg/provider';

import { Mardoto } from '@/src/constants/font';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/src/styles/globals.css';


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contact = await getContact();
  const redirects = await getRedirectPath();
  const texts = await getFooterTexts();

  if (!contact || !redirects || !texts) return notFound();

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

export async function generateMetadata(): Promise<Metadata> {
  const meta: SEO_QUERYResult = await getSiteMeta();
  const { ogDescription, ogTitle, ogKeywords, ogImage, ogIcon } = meta;
  const path: ImagePath = urlForImage(ogImage);
  const icon: ImagePath = urlForImage(ogIcon);

  const metadata = generateMetadataDynamic(ogDescription, ogKeywords, ogTitle, path, icon);
  return metadata;
};
