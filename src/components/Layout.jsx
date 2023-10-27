import ClientOnly from './ClientOnly';
import Darkmode from './DarkMode';
import ScrollToTop from './ScrollToTop';

import Navbar from './navbar/Navbar';
import Submenu from './submenu/Submenu';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';

import ToastProvider from '@/providers/ToastProvider';
import ModalProvider from '@/providers/ModalProvider';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <ClientOnly>
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
