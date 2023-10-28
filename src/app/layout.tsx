'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import CartProvider from '@/providers/CartProvider';
import Layout from '@/components/Layout';
import AppThemeProvider from '@/providers/ThemeProvider';

import { persistor, store } from '@/store/store';

import './globals.scss';

export const metadata = {
  title: 'eStore',
  description: '',
  keywords: '',
};

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <CartProvider>
              <AppThemeProvider>
                <Layout>{children}</Layout>
              </AppThemeProvider>
            </CartProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
