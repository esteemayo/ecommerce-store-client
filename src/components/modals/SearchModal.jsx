import Modal from './Modal';
import Search from '../Search';

import useSearchModal from '@/hooks/useSearchModal';

const SearchModal = () => {
  const isOpen = useSearchModal((state) => state.isOpen);
  const onClose = useSearchModal((state) => state.onClose);

  return (
    <Modal
      title='Search products'
      isOpen={isOpen}
      onClose={onClose}
    >
      <Search />
    </Modal>
  );
}

export default SearchModal;
