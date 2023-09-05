'use client';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import ClientOnly from '@/components/ClientOnly';
import ProductList from '@/components/products/ProductList';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

import { storeProducts } from '@/data';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      Search
    </Container>
  );
}

const Container = styled.main`

`;

export default Search;
