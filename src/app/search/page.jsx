'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import ClientOnly from '@/components/ClientOnly';
import ProductList from '@/components/products/ProductList';
import ProductBox from '@/components/products/ProductBox';

import { storeProducts } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState(storeProducts);

  const handleClose = useCallback(() => {
    dispatch(closeSubmenu());
  }, [dispatch]);

  return (
    <ClientOnly>
      <Container onMouseOver={handleClose}>
        <Wrapper>
          <ProductList products={products} />
        </Wrapper>
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export default Search;
