'use client';
import styled from 'styled-components';
import { useState } from 'react';

import { storeProducts } from '@/data';
import ProductList from '@/components/ProductList';

const ProductCategory = () => {
  const [products, setProducts] = useState(storeProducts);

  return (
    <Container>
      <FilterWrapper>

      </FilterWrapper>
      <ProductWrapper>
        <ProductList products={products} />
      </ProductWrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  max-width: 120rem;
  margin: 0 auto;
`;

const FilterWrapper = styled.section`
  padding: 7rem 3rem;
  width: 100%;
`;

const FilterHeading = styled.h1`

`;

const ProductWrapper = styled.div`
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
