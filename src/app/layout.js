'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import PasswordModal from '@/components/modals/PasswordModal';
import DataModal from '@/components/modals/DataModal';
import AccountModal from '@/components/modals/AccountModal';
import SearchModal from '@/components/modals/SearchModal';

import Navbar from '@/components/navbar/Navbar';
import Submenu from '@/components/submenu/Submenu';
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Darkmode from '@/components/DarkMode';
import Sidebar from '@/components/sidebar/Sidebar';
import ClientOnly from '@/components/ClientOnly';

import ToastProvider from '@/providers/ToastProvider';
import CartTotalProvider from '@/providers/CartTotalProvider';
import AppThemeProvider from '@/providers/ThemeProvider';

import { persistor, store } from '@/store/store';

import './globals.scss';

export const metadata = {
  title: 'eStore',
  description: '',
  keywords: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <CartTotalProvider>
              <AppThemeProvider>
                <div className='container'>
                  <ClientOnly>
                    <Navbar />
                    <ToastProvider />
                    <Submenu />
                    <Sidebar />
                    <SearchModal />
                    <PasswordModal />
                    <DataModal />
                    <AccountModal />
                  </ClientOnly>
                  {children}
                  <ClientOnly>
                    <Footer />
                    <ScrollToTop />
                    <Darkmode />
                  </ClientOnly>
                </div>
              </AppThemeProvider>
            </CartTotalProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
