'use client';

import React from 'react';
import { ThemeProvider } from '@material-tailwind/react';

type LayoutProps = {
  children: React.ReactNode | any
};

export function Layout({ children }: Readonly<LayoutProps>) {
  return (<ThemeProvider>{children}</ThemeProvider>);
};


