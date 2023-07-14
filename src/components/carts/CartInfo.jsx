'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';

const CartInfo = ({ images }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={images[0]}
          width={120}
          height={120}
          alt=''
        />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  flex: 3;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  width: 12rem;
  height: 12rem;
  background-color: #ede9e6;
  border-radius: 3px;

  @media only screen and (max-width: 25em) {
    width: 10rem;
    height: 10rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 8rem;
    height: 8rem;
  }

  img {
    width: 12rem;
    height: 12rem;
    display: block;
    object-fit: cover;
    border-radius: 3px;

    @media only screen and (max-width: 25em) {
      width: 10rem;
      height: 10rem;
    }

    @media only screen and (max-width: 18.75em) {
      width: 8rem;
      height: 8rem;
    }
  }
`;

export default CartInfo;
