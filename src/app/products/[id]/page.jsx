'use client';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Recommendation from '@/components/Recommendation';
import Reviews from '@/components/Reviews';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import { storeProducts } from '@/data';
import Product from '@/components/Product';

const SingleProduct = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = storeProducts.find((item) => item.id === parseInt(id));
    setProduct(product);
  }, [id]);

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <Wrapper>
        <Product product={product} />
        <Line />
        <Recommendation />
        <Reviews />
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--clr-white);
  padding-top: 8rem;
  padding-bottom: 4rem;

  @media only screen and (max-width: 37.5em) {
    padding-top: 4rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ProductContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
    flex-direction: column;
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

const Left = styled.div`
  flex: 2;
  padding: 1rem 0;
`;

const ImagesContainer = styled.div`
  position: relative;
`;

const Line = styled.hr`
  width: 93%;
  height: 1px;
  border: none;
  margin: 0 auto;
  background-color: #e2e9e7;
`;

export default SingleProduct;

