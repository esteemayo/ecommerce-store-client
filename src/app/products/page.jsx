'use client';
import styled from 'styled-components';

import { products } from '@/data';
import Product from '@/components/Product';
import { useDispatch } from 'react-redux';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import Pagination from '@/components/Pagination';

const Products = () => {
  const dispatch = useDispatch();

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <FilterContainer>
        <FilterHeading>Filter by</FilterHeading>
        <FilterWrapper>
          <Filter>
            <Label htmlFor='color'>Color</Label>
            <Select id='color'>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Blue</Option>
              <Option>Pink</Option>
              <Option>Red</Option>
            </Select>
          </Filter>
          <Filter>
            <Label htmlFor='category'>Category</Label>
            <Select id='category'>
              <Option>Jeans</Option>
              <Option>Shirts</Option>
              <Option>Electronics</Option>
              <Option>Sneakers</Option>
              <Option>Gadgets</Option>
            </Select>
          </Filter>
          <Filter>
            <Label htmlFor='price'>Product price</Label>
            <Input type='range' id='price' min={0} max={900} />
          </Filter>
          <Filter>
            <Label htmlFor='size'>Product size</Label>
            <SizeInputs>
              <SizeInput type='number' name='size' id='size' />
              <SizeInput type='number' name='size' id='size' />
            </SizeInputs>
          </Filter>
        </FilterWrapper>
      </FilterContainer>
      <ProductContainer>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </ProductContainer>
      <Pagination />
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
`;

const FilterContainer = styled.div`
  padding: 7rem 0;
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
`;

const FilterHeading = styled.h1`
  display: inline-block;
  font-weight: 600;
  font-size: 2.25rem;
  margin-bottom: 1rem;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
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
  width: 20rem;
  padding: 3px;
  font-size: 1.4rem;
  background-color: transparent;
  color: #999;
  border: 1px solid #89a8a0;
  border-radius: 3px;
  outline-color: #74948c;
`;

const Option = styled.option`
  background-color: var(--clr-white);
  color: inherit;
`;

const Input = styled.input`
  display: inline-block;
  width: 20rem;
  padding: 3px;
  font-size: 1.4rem;
  background-color: transparent;
  color: #999;
  border: 1px solid #89a8a0;
  border-radius: 3px;
  outline-color: #74948c;
`;

const SizeInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SizeInput = styled.input`
  display: inline-block;
  width: 8rem;
  padding: 3px;
  font-size: 1.4rem;
  background-color: transparent;
  color: #999;
  border: 1px solid #89a8a0;
  border-radius: 3px;
  outline-color: #74948c;
`;

const ProductContainer = styled.section`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
  padding: 8rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5rem;
`;

export default Products;
