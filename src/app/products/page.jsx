'use client';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { products } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import ProductList from '@/components/ProductList';
import Pagination from '@/components/Pagination';
import ProductFilter from '@/components/ProductFilter';
import { useState } from 'react';

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
