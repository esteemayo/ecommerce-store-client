import { FC } from 'react';
import { Nunito } from '@next/font/google';

import Annoucement from './Annoucement';
import ClientOnly from './ClientOnly';
import ScrollToTop from './ScrollToTop';
import Darkmode from './DarkMode';

import Navbar from './navbar/Navbar';
import Submenu from './submenu/Submenu';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';

import ToastProvider from '@/providers/ToastProvider';
import ModalProvider from '@/providers/ModalProvider';

import { LayoutProps } from '@/types';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`${nunito.className} container`}>
      <ClientOnly>
        <Annoucement />
        <Navbar />
        <ToastProvider />
        <Submenu />
        <Sidebar />
        <ModalProvider />
        {children}
        <Footer />
        <ScrollToTop />
        <Darkmode />
      </ClientOnly>
    </div>
  );
};

export default Layout;
