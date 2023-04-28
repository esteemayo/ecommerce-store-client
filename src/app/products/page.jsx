'use client';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { products } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import Pagination from '@/components/Pagination';
import ProductList from '@/components/ProductList';

const Products = () => {
  const dispatch = useDispatch();

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <FilterContainer>

      </FilterContainer>
      <ProductList products={products} />
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
  border: 1px solid #ddd;
  border-radius: 3px;
  outline-color: #eee;
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
  border: 1px solid #ddd;
  border-radius: 3px;
  outline-color: #eee;
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
  border: 1px solid #ddd;
  border-radius: 3px;
  outline-color: #eee;
`;

export default Products;
