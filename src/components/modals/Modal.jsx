'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { useCallback, useState } from 'react';

const Modal = ({ title, children, isOpen, onClose }) => {
  const closeModalHandler = useCallback((e) => {
    e.stopPropagation();

    if (e.target.classList.contains('overlay')) {
      onClose(false);
    }
  }, [onClose]);

  return (
    <Overlay
      className='overlay'
      type={isOpen ? 'show' : ''}
      onClick={closeModalHandler}
    >
      <Container>
        <Wrapper>
          <ButtonContainer>
            <Heading>{title}</Heading>
            <Button type='button' onClick={onClose}>
              <CloseIcon />
            </Button>
          </ButtonContainer>
          <ModalContent>
            {children}
          </ModalContent>
        </Wrapper>
      </Container>
    </Overlay>
  );
}

const Overlay = styled.aside`
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.bgOverlay};
  position: fixed;
  top: 0;
  right: 0;
  display: ${({ type }) => type === 'show' ? 'block' : 'none'};
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  opacity: ${({ type }) => type === 'show' ? 1 : 0};
  z-index: ${({ type }) => type === 'show' ? 4000 : -1};
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.bgModal};
  border-radius: 0.5rem;

  @media only screen and (max-width: 25em) {
    width: 35rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  @media only screen and (max-width: 18.75em) {
    width: 33rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Heading = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 25em) {
    font-size: 1.85rem;
  }
`;

const Button = styled.button`
  position: absolute;
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 0;
  right: -3rem;
  display: inline-block;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2.3rem;
  background-color: transparent;
  color: #838283;
  outline-color: #f7f3f8;
  cursor: pointer;

  @media only screen and (max-width: 25em) {
    width: 1.25rem;
    height: 1.25rem;
    right: 0.5rem;
  }

  svg {
    font-size: 2.3rem;
    fill: currentColor;
  }
`;

const ModalContent = styled.div``;

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
