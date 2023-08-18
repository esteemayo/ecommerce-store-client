'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Product from '@/components/products/Product';
import Recommendation from '@/components/Recommendation';
import ClientOnly from '@/components/ClientOnly';
import Reviews from '@/components/reviews/Reviews';
import EmptyState from '@/components/EmptyState';

import { storeProducts } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const SingleProduct = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = storeProducts.find((item) => item.id === parseInt(id));
    setProduct(product);
  }, [id]);

  if (!product) {
    return (
      <ClientOnly>
        <Container onMouseOver={() => dispatch(closeSubmenu())}>
          <Wrapper>
            <EmptyState />
          </Wrapper>
        </Container>
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <Container onMouseOver={() => dispatch(closeSubmenu())}>
        <Wrapper>
          <Product product={product} />
          <Line />
          <Recommendation />
          <Reviews />
        </Wrapper>
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  padding-top: 8rem;
  padding-bottom: 4rem;

  @media only screen and (max-width: 37.5em) {
    padding-top: 4rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Line = styled.hr`
  width: 93%;
  height: 1px;
  border: none;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.cartModalBorder};
`;

export default SingleProduct;
