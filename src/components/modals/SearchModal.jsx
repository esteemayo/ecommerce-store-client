import styled from 'styled-components';

import Modal from './Modal';
import useSearchModal from '@/hooks/useSearchModal';

const SearchModal = () => {
  const searchModal = useSearchModal();

  return (
    <Modal
      title='Search products'
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
    >
      SearchModal
    </Modal>
  );
}

export default SearchModal;
