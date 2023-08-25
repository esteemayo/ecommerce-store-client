import AccountModal from '@/components/modals/AccountModal';
import DataModal from '@/components/modals/DataModal';
import PasswordModal from '@/components/modals/PasswordModal';
import Sidebar from '@/components/sidebar/Sidebar';
import SearchModal from '@/components/modals/SearchModal';

const ModalProvider = () => {
  return (
    <>
      <Sidebar />
      <SearchModal />
      <PasswordModal />
      <DataModal />
      <AccountModal />
    </>
  );
}

export default ModalProvider;
