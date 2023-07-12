'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductImage = ({ images }) => {
  return (
    <Container>
      <ArrowButton
        type='button'
        direction='left'
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </ArrowButton>
      <Wrapper>
        {images?.map((item, index) => {
          return (
            <Image
              key={index}
              src={item}
              width={350}
              height={350}
              alt=''
            />
          );
        })}
      </Wrapper>
      <ArrowButton
        type='button'
        direction='right'
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </ArrowButton>
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

  img {
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
  }
`;

const ArrowButton = styled.button`
  border: none;
`;

export default ProductImage;
