'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Overlay from './Overlay';
import { useDarkMode } from '@/hooks/useDarkMode';

const DeleteModal = ({ actionId, isOpen, onClose, onAction }) => {
  const mode = useDarkMode((state) => state.mode);
  const [showModal, setShowModal] = useState(isOpen);

  const closeModalHandler = useCallback((e) => {
    e.stopPropagation();

    if (e.target.classList.contains('overlay')) {
      setShowModal(false);
      onClose();
    }

    const exitModal = (e) => {
      e.preventDefault();

      if (e.key === 'Escape') {
        setShowModal(false);
        onClose();
      }
    };

    window.addEventListener('keydown', exitModal);
    return window.removeEventListener('keydown', exitModal);
  }, [onClose]);

  const deleteWishlistHandler = useCallback((wishlistId) => {
    onAction(wishlistId);
    onClose();
  }, [onAction, onClose]);

  const activeModal = useMemo(() => {
    return showModal ? 'show' : '';
  }, [showModal]);

  const modeValue = useMemo(() => {
    return mode.toString();
  }, [mode]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return (
    <Overlay
      type={activeModal}
      mode={modeValue}
      onClick={closeModalHandler}
    >
      <Wrapper>
        <CloseButton type='button' onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <Heading>Remove a wishlist?</Heading>
        <WarningMessage>Are you sure you wanted to remove this item from your wishlist?</WarningMessage>
        <ButtonContainer>
          <CancelButton type='button' onClick={onClose}>
            Not now
          </CancelButton>
          <DeleteButton
            type='button'
            onClick={() => deleteWishlistHandler(actionId)}
          >
            Remove
          </DeleteButton>
        </ButtonContainer>
      </Wrapper>
    </Overlay>
  );
}

const Wrapper = styled.div`
  width: 35rem;
  padding: 5rem;
  background-color: ${({ theme }) => theme.bgModal};
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  position: relative;

  @media only screen and (max-width: 18.75em) {
    width: 32rem;
    padding: 2.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  color: #a2a8b0;
  border: 1px solid #f2f9fB;
  border-radius: 50%;
  outline-color: #f1e4f4;
  cursor: pointer;

  @media only screen and (max-width: 18.75em) {
    right: 1rem;
  }

  svg {
    font-size: 1.8rem;
    fill: currentColor;
  }
`;

const Heading = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  line-height: 1;
  margin-bottom: 2rem;
`;

const WarningMessage = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textModal};
  line-height: 1.2;
`;

const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CancelButton = styled.button`
  display: inline-block;
  font-size: 1.43rem;
  padding: 1rem 3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textModalBtn};
  border: 1px solid #e3e3f3;
  border-radius: 0.5rem;
  outline-color: #f1e4f4;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  display: inline-block;
  font-size: 1.43rem;
  padding: 1rem 3rem;
  background-color: var(--clr-primary-red);
  color: ${({ theme }) => theme.textModalDelBtn};
  border: 1px solid #e3e3f3;
  border-radius: 0.5rem;
  outline-color: #b10101;
  cursor: pointer;
`;

DeleteModal.propTypes = {
  actionId: PropTypes.string,
  isOpen: PropTypes.bool,
  onAction: PropTypes.func,
  onClose: PropTypes.func,
};

export default DeleteModal;