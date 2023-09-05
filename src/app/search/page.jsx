'use client';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import ClientOnly from '@/components/ClientOnly';
import ProductList from '@/components/products/ProductList';

import { storeProducts } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <ClientOnly>
      <Container>
        Search
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main`

`;

export default Search;
