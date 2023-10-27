import ClientOnly from './ClientOnly';
import Darkmode from './DarkMode';
import ScrollToTop from './ScrollToTop';

import Navbar from './navbar/Navbar';
import Submenu from './submenu/Submenu';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';


import ToastProvider from '@/providers/ToastProvider';
import ModalProvider from '@/providers/ModalProvider';

const Layout = () => {
  return (
    <div className='container'>
      <ClientOnly>
        <Navbar />
        <ToastProvider />
        <Submenu />
        <Sidebar />
        <ModalProvider />
      </ClientOnly>
      {children}
      <ClientOnly>
        <Footer />
        <ScrollToTop />
        <Darkmode />
      </ClientOnly>
    </div>
  );
};

export default Layout;
