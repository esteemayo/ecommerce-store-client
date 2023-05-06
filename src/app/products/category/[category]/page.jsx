'use client';
import styled from 'styled-components';
import { useState } from 'react';

import { storeProducts } from '@/data';
import ProductList from '@/components/ProductList';

const ProductCategory = () => {
  const [products, setProducts] = useState(storeProducts);

  return (
    <Container>
      <FilterContainer>
        <FilterHeading>Filter by</FilterHeading>
        <FilterWrapper>
          <FilterLeft>
            <Filter>
              <Label htmlFor='color'>Color</Label>
            </Filter>
          </FilterLeft>
          <FilterRight>
            <Filter>

            </Filter>
          </FilterRight>
        </FilterWrapper>
      </FilterContainer>
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

const FilterContainer = styled.section`
  padding: 7rem 3rem;
  width: 100%;
`;

const FilterHeading = styled.h1`
  display: inline-block;
  font-weight: 600;
  font-size: 2.25rem;
  margin-bottom: 1rem;
`;

const FilterWrapper = styled.div`

`;

const FilterLeft = styled.div`

`;

const FilterRight = styled.div`

`;

const Filter = styled.div`

`;

const Label = styled.label`

`;

const Select = styled.select`

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
