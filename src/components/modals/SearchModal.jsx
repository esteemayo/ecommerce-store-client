import styled from 'styled-components';

import Modal from './Modal';
import useSearchModal from '@/hooks/useSearchModal';

const SearchModal = () => {
  const searchModal = useSearchModal();

  return (
    <Modal title='Search products'>
      SearchModal
    </Modal>
  );
}

export default SearchModal;
