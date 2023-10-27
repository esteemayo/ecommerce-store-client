import ClientOnly from './ClientOnly';
import Navbar from './navbar/Navbar';
import ToastProvider from '@/providers/ToastProvider';
import Submenu from './submenu/Submenu';
import Sidebar from './sidebar/Sidebar';
import ModalProvider from '@/providers/ModalProvider';
import Footer from './footer/Footer';
import ScrollToTop from './ScrollToTop';
import Darkmode from './DarkMode';

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
