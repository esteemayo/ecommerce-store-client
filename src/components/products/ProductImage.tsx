'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useRef, useState } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import useImageModal from '@/hooks/useImageModal';
import ProductImageModal from '../modals/ProductImageModal';

const ProductImage = ({ images }) => {
  const { isOpen, onOpen, onClose } = useImageModal();

  const imgContainerRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [isSliderMoved, setIsSliderMoved] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 235);

  const lastIndex = images?.lastIndexOf(images[images.length - 1]);

  const handleOpen = useCallback((index) => {
    setSlideIndex(index);
    onOpen();
  }, [onOpen]);

  const handleMove = useCallback((direction) => {
    let newSlideIndex;

    setIsMoved(true);
    if (direction === 'left') {
      newSlideIndex = slideIndex - 1;
    }

    if (direction === 'right') {
      newSlideIndex = slideIndex + 1;
    }

    setSlideIndex(newSlideIndex);
  }, [slideIndex]);

  const handleDirection = useCallback((direction) => {
    setIsSliderMoved(true);
    const distance = imgContainerRef.current.getBoundingClientRect().x;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber((value) => value - 1);
      imgContainerRef.current.style.transform = `translateX(${235 + distance}px)`;
    }

    if (direction === 'right' && slideNumber < 6 - clickLimit) {
      setSlideNumber((value) => value + 1);
      imgContainerRef.current.style.transform = `translateX(${-235 + distance}px)`;
    }
  }, [clickLimit, slideNumber]);

  return (
    <Container>
      <ArrowButton
        type='button'
        direction='left'
        onClick={() => handleDirection('left')}
        style={{ display: (!isSliderMoved || slideNumber === 0) && 'none' }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </ArrowButton>
      <Wrapper ref={imgContainerRef}>
        {images?.map((item, index) => {
          return (
            <StyledImage
              key={index}
              src={item}
              width={350}
              height={350}
              alt=''
              onClick={() => handleOpen(index)}
            />
          );
        })}
      </Wrapper>
      <ArrowButton
        type='button'
        direction='right'
        onClick={() => handleDirection('right')}
        style={{ display: slideNumber === lastIndex && 'none' }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </ArrowButton>
      <ProductImageModal
        images={images}
        isOpen={isOpen}
        onClose={onClose}
        isMoved={isMoved}
        slideIndex={slideIndex}
        lastIndex={lastIndex}
        onMove={handleMove}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.figure`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 50em) {
    flex-wrap: nowrap;
    width: max-content;
    transition: all 0.3s ease;
  }
`;

const StyledImage = styled(Image)`
  display: block;
  width: 35rem;
  height: 35rem;
  object-fit: cover;
  border-radius: 0.5rem;
  cursor: pointer;

  @media only screen and (max-width: 64em) {
    width: 30rem;
  }

  @media only screen and (max-width: 59.375em) {
    width: 23rem;
    height: 30rem;
  }

  @media only screen and (max-width: 50em) {
    width: 225px;
    border-radius: revert;
  }

  @media only screen and (max-width: 37.5em) {
    height: 20rem;
  }

  @media only screen and (max-width: 18.75em) {
    height: 15rem;
  }
`;

const ArrowButton = styled.button`
  border: none;
  width: 4rem;
  height: 4rem;
  background-color: var(--clr-white);
  color: #777;
  border-radius: 50%;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  -webkit-box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  outline-color: #777;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: ${({ direction }) => direction === 'left' && '2rem'};
  right: ${({ direction }) => direction === 'right' && '54%'};
  transform: translate(-50%);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: inherit;
  }

  @media only screen and (min-width: 50em) {
    display: none;
  }

  @media only screen and (max-width: 37.5em) {
    width: 3.5rem;
    height: 3.5rem;
    right: ${({ direction }) => direction === 'right' && '76%'};
  }

  @media only screen and (max-width: 18.75em) {
    right: ${({ direction }) => direction === 'right' && '83%'};
  }
`;

ProductImage.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProductImage;
