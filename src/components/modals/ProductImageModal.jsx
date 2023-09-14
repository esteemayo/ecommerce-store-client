'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@mui/icons-material/Close';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const ProductImageModal = ({
  images,
  isOpen,
  isMoved,
  slideIndex,
  lastIndex,
  onMove,
  onClose,
}) => {
  const { mode } = useSelector((state) => ({ ...state.darkMode }));
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const closeModalHandler = useCallback((e) => {
    e.stopPropagation();

    if (e.target.classList.contains('imageContainer')) {
      onClose();
    }

    const exitModal = (e) => {
      e.preventDefault();

      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', exitModal);
    return () => window.removeEventListener('keydown', exitModal);
  }, [onClose]);

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
    <Overlay type={activeModal} mode={mode.toString()}>
      <CloseButton type='button' onClick={handleClose}>
        <CloseIcon />
      </CloseButton>
      {isMoved && slideIndex > 0 && (
        <ArrowButton
          type='button'
          direction='left'
          onClick={() => onMove('left')}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </ArrowButton>
      )}
      <ImageContainer className='imageContainer' onClick={closeModalHandler}>
        <StyledImage
          src={images?.[slideIndex] ?? '/img/img-1.jpg'}
          width={1200}
          height={1000}
          alt=''
        />
      </ImageContainer>
      <ArrowButton
        type='button'
        direction='right'
        onClick={() => onMove('right')}
        style={{ display: slideIndex === lastIndex && 'none' }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </ArrowButton>
    </Overlay>
  );
}

const Overlay = styled.aside`
  display: none;
  
  @media only screen and (min-width: 50em) {
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    backdrop-filter: ${({ mode }) => mode === 'true' && 'blur(2px)'};
    position: fixed;
    top: 0;
    left: ${({ type }) => type === 'show' ? 0 : '-100vw'};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
    opacity: ${({ type }) => type === 'show' ? 1 : 0};
    transform: scale(${({ type }) => type === 'show' ? 1 : 0});
    z-index: ${({ type }) => type === 'show' ? 4000 : -1};
    transition: all 0.3s linear;
  }
`;

const CloseButton = styled.button`
  border: none;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  color: var(--clr-white);
  outline-color: #777;
  cursor: pointer;

  position: absolute;
  top: 3rem;
  left: 3rem;

  svg {
    font-size: 2rem;
    fill: currentColor;
  }
`;

const ArrowButton = styled.button`
  border: none;
  display: inline-block;
  width: 4rem;
  height: 4rem;
  background-color: var(--clr-black);
  color: var(--clr-white);
  border-radius: 50%;
  outline-color: #777;
  position: absolute;
  top: 50%;
  left: ${({ direction }) => direction === 'left' && '1rem'};
  right: ${({ direction }) => direction === 'right' && '2.5rem'};
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.3s ease;
 
  @media only screen and (max-width: 50em) {
    width: 6.5rem;
    height: 6.5rem;
  }

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.05);
  }

  svg {
    fill: var(--clr-white);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: 50rem;
  height: 100%;
  display: block;
  object-fit: cover;

  @media only screen and (max-width: 64em) {
    height: 90%;
  }

  @media only screen and (max-width: 50em) {
    width: 60rem;
    height: 80rem;
  }
`;

ProductImageModal.propTypes = {
  images: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isMoved: PropTypes.bool.isRequired,
  slideIndex: PropTypes.number.isRequired,
  lastIndex: PropTypes.number.isRequired,
  onMove: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductImageModal;
