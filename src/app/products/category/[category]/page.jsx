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
              <Select id='color' name='color'>
                <Option>Blue</Option>
              </Select>
            </Filter>
            <Filter>
              <Label htmlFor='size'>Product size</Label>
              <Select id='size' name='size'>
                <Option>XS</Option>
              </Select>
            </Filter>
          </FilterLeft>
          <FilterRight>
            <Filter>
              <Label htmlFor='price'>Product price</Label>
              <Select id='price' name='price'>
                <Option value='newest'>Newest</Option>
                <Option value='asc'>Price (asc)</Option>
                <Option value='desc'>Price (desc)</Option>
              </Select>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const FilterRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.6rem;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  display: inline-block;
  text-transform: capitalize;
`;

const Option = styled.option`
  
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
