'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import ProductCard from './ProductCard';
import CartModal from '../modals/CartModal';

const ProductList = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedProduct, setIsSelectedProduct] = useState({});

  const handleOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  if (products.length < 1) {
    return (
      <Container>
        <ImageContainer>
          <Image
            src='/img/no-result.png'
            width={500}
            height={250}
            alt=''
          />
          <Message>No results found!</Message>
        </ImageContainer>
      </Container>
    );
  }

  return (
    <Container>
      <ProductsContainer>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              openModal={setIsModalOpen}
              setIsSelectedProduct={setIsSelectedProduct}
            />
          );
        })}
      </ProductsContainer>
      <CartModal
        isModalOpen={isModalOpen}
        closeModal={setIsModalOpen}
        product={isSelectedProduct}
        setIsSelectedProduct={setIsSelectedProduct}
      />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 8rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;

  img {
    width: 50rem;
    height: 25rem;
    display: block;
    object-fit: cover;

    @media only screen and (max-width: 25em) {
      width: 40rem;
    }

    @media only screen and (max-width: 18.75em) {
      width: 34.5rem;
    }
  }
`;

const Message = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.textNotFound};
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 7rem;

  @media only screen and (max-width: 59.375em) {
    gap: 4rem;
  }

  @media only screen and (max-width: 37.5em) {
    gap: 2rem;
  }

  @media only screen and (max-width: 31.25em) {
    gap: 1.5rem;
  }

  @media only screen and (max-width: 26.25em) {
    gap: 3rem;
  }

  @media only screen and (max-width: 18.75em) {
    gap: 1rem;
  }
`;

export default ProductList;
