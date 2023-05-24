'use client';
import { ThemeProvider } from 'styled-components';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navbar from '@/components/Navbar';
import Submenu from '@/components/Submenu';
import Footer from '@/components/Footer';
import { persistor, store } from '@/store/store';
import Sidebar from '@/components/Sidebar';
import ScrollToTop from '@/components/ScrollToTop';

import './globals.scss';
import { darkTheme, lightTheme } from '@/utils/Theme';

export default function RootLayout({ children }) {
  const { darkMode } = useSelector((state) => ({ ...state.darkMode }));

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
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
              <div className='container'>
                <Navbar />
                <Submenu />
                <Sidebar />
                {children}
                <Footer />
                <ScrollToTop />
              </div>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
