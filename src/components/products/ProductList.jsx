'use client';

import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import CartModal from '../modals/CartModal';
import EmptyProduct from './EmptyProduct';

import useCartModal from '@/hooks/useCartModal';

const ProductList = ({ products }) => {
  const { isOpen, onOpen, onClose } = useCartModal();
  const [isSelectedProduct, setIsSelectedProduct] = useState({});

  if (products.length < 1) {
    return (
      <Container>
        <EmptyProduct
          src='/img/no-result.png'
          title='No results found!'
        />
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
              onOpen={onOpen}
              onSelect={setIsSelectedProduct}
            />
          );
        })}
      </ProductsContainer>
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
  width: 100%;
  padding: 8rem 0;
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

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
