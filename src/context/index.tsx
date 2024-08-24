'use client';

import React from 'react';
import { ThemeProvider, Dialog } from '@material-tailwind/react';

interface LayoutProps {
  children?: React.ReactNode | null | any;
}

export function Layout({ children = null }: Readonly<LayoutProps>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export { Dialog };
