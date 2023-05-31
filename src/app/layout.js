'use client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navbar from '@/components/Navbar';
import Submenu from '@/components/Submenu';
import Footer from '@/components/Footer';
import { persistor, store } from '@/store/store';
import Sidebar from '@/components/Sidebar';
import ScrollToTop from '@/components/ScrollToTop';
import AppTheme from '@/components/AppTheme';
import Darkmode from '@/components/DarkMode';

import './globals.scss';
import Darkmode from '@/components/DarkMode';

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
            <AppTheme>
              <div className='container'>
                <Navbar />
                <Submenu />
                <Sidebar />
                {children}
                <Footer />
                <ScrollToTop />
                <Darkmode />
              </div>
            </AppTheme>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
