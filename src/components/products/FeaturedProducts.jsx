'use client';

import styled from 'styled-components';
import { useState } from 'react';

import Header from '../Header';
import ProductCard from './ProductCard';

import CartModal from '../modals/CartModal';

import { storeProducts } from '@/data';
import { StyledWrapper } from '../StyledWrapper';

import useCartModal from '@/hooks/useCartModal';

const FeaturedProducts = () => {
  const { isOpen, onOpen, onClose } = useCartModal();

  const [isSelectedProduct, setIsSelectedProduct] = useState({});
  const [featuredProducts, setFeaturedProducts] = useState(storeProducts);

  return (
    <Container>
      <StyledWrapper>
        <Header title='Featured products' />
        <ProductsContainer>
          {featuredProducts
            .filter((product) => product.featured === true)
            .map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpen={onOpen}
                  onSelect={setIsSelectedProduct}
                />
              );
            })
          }
        </ProductsContainer>
      </StyledWrapper>
      <CartModal
        product={isSelectedProduct}
        isOpen={isOpen}
        onClose={onClose}
        onSelect={setIsSelectedProduct}
      />
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  padding: 15rem 0;
  background-color: ${({ theme }) => theme.soft};

  @media only screen and (max-width: 64em) {
    padding: 13rem 0;
  }
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

export default FeaturedProducts;
