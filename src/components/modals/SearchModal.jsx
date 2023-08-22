import styled from 'styled-components';

import Modal from './Modal';
import useSearchModal from '@/hooks/useSearchModal';

const SearchModal = () => {
  const isOpen = useSearchModal((state) => state.isOpen);
  const onClose = useSearchModal((state) => state.isOpen);

  return (
    <Modal
      title='Search products'
      isOpen={isOpen}
      onClose={onClose}
    >
      SearchModal
    </Modal>
  );
}

export default SearchModal;
