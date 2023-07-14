'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';

const CartInfo = ({ name, images }) => {
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
      <CartDetails>
        <Title>{name}</Title>
        <PriceContainer>
          <Label>Price:</Label>
        </PriceContainer>
      </CartDetails>
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

const CartDetails = styled.div`
  width: 30rem;
`;

const Title = styled.h2`
  display: block;
  font-weight: 500;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 43.75em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 31.25em) {
    word-wrap: break-word;
    word-break: break-all;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.6rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.p`
  text-transform: capitalize;
`;

const Price = styled.span`
  
`;

export default CartInfo;
