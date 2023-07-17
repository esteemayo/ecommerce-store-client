'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import ProductCard from './ProductCard';
import CartModal from '../modals/CartModal';
import EmptyProduct from './EmptyProduct';

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
              onOpen={handleOpen}
              onSelect={setIsSelectedProduct}
            />
          );
        })}
      </ProductsContainer>
      <CartModal
        product={isSelectedProduct}
        isOpen={isModalOpen}
        onClose={handleClose}
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

export default ProductList;
