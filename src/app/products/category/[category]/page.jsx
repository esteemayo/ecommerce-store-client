'use client';
import styled from 'styled-components';
import { useState } from 'react';
import { storeProducts } from '@/data';

const ProductCategory = () => {
  const [products, setProducts] = useState(storeProducts);
  return (
    <Container>
      <Wrapper>
        ProductCategory
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  max-width: 120rem;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 8rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 4rem;
  column-gap: 1rem;
`;

export default ProductCategory;
