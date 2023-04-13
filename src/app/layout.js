'use client';
import { Provider } from 'react-redux';

import store from '@/store/store';
import Submenu from '@/components/Submenu';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './globals.css';
import ScrollToTop from '@/components/ScrollToTop';

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
          <div className='container'>
            <Navbar />
            <Submenu />
            <Sidebar />
            {children}
            <Footer />
            <ScrollToTop />
          </div>
        </Provider>
      </body>
    </html>
  );
}
