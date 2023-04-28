'use client';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { products } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import Pagination from '@/components/Pagination';
import ProductList from '@/components/ProductList';
import ProductFilter from '@/components/ProductFilter';

const Products = () => {
  const dispatch = useDispatch();

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <ProductFilter />
      <ProductList products={products} />
      <Pagination />
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
`;

export default Products;
