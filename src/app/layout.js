'use client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/store/store';
import Submenu from '@/components/Submenu';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

import './globals.css';

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
            <div className='container'>
              <Navbar />
              <Submenu />
              <Sidebar />
              {children}
              <Footer />
              <ScrollToTop />
            </div>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
