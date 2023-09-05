'use client';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import ClientOnly from '@/components/ClientOnly';
import ProductList from '@/components/products/ProductList';

import { storeProducts } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const Search = () => {
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeSubmenu());
  }, [dispatch]);

  return (
    <ClientOnly>
      <Container onMouseOver={handleClose}>
        Search
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`

`;

export default Search;
