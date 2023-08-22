'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import ClientOnly from '@/components/ClientOnly';
import Product from '@/components/products/Product';
import EmptyState from '@/components/EmptyState';
import Recommendation from '@/components/Recommendation';
import Reviews from '@/components/reviews/Reviews';

import { closeSubmenu } from '@/features/submenu/submenuSlice';
import { recommendations, reviewItems, storeProducts } from '@/data';

const SingleProduct = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState(reviewItems);
  const [sort, setSort] = useState(null);

  const handleCloseSubmenu = useCallback(() => {
    dispatch(closeSubmenu());
  }, [dispatch]);

  const getSort = useMemo(() => {
    if (sort === 'newest') return 'newest';
    if (sort === 'highest') return 'highest rating';
    if (sort === 'lowest') return 'lowest rating';
  }, [sort]);

  useEffect(() => {
    if (sort === 'newest') {
      setReviews((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }

    if (sort === 'highest') {
      setReviews((prev) =>
        [...prev].sort((a, b) => b.rating - a.rating)
      );
    }

    if (sort === 'lowest') {
      setReviews((prev) =>
        [...prev].sort((a, b) => a.rating - b.rating)
      );
    }
  }, [sort]);

  useEffect(() => {
    const product = storeProducts.find((item) => item.id === parseInt(id));
    setProduct(product);
  }, [id]);

  if (!product) {
    return (
      <ClientOnly>
        <Container type='error' onMouseOver={handleCloseSubmenu}>
          <Wrapper>
            <EmptyState />
          </Wrapper>
        </Container>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container onMouseOver={handleCloseSubmenu}>
        <Wrapper>
          <Product product={product} />
          <Line />
          <Recommendation data={recommendations} />
          <Reviews
            reviews={reviews}
            sortLabel={getSort}
            sort={sort}
            onSort={setSort}
          />
        </Wrapper>
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  padding-top: ${({ type }) => type !== 'error' && '8rem'};
  padding-bottom: ${({ type }) => type !== 'error' && '4rem'};

  @media only screen and (max-width: 37.5em) {
    padding-top: ${({ type }) => type !== 'error' && '4rem'};
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
