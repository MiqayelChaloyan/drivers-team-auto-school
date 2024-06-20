import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
