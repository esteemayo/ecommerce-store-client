'use client';

import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

import { useSubmenu } from '@/hooks/useSubmenu';
import { useCartStore } from '@/hooks/useCartStore';

import { ProductProps, ReviewItem } from '@/types';
import { recommendations, reviewItems, storeProducts } from '@/data';

const Product = dynamic(() => import('@/components/products/Product'), {
  ssr: false,
});
const EmptyState = dynamic(() => import('@/components/EmptyState'), {
  ssr: false,
});
const Recommendation = dynamic(() => import('@/components/Recommendation'), {
  ssr: false,
});
const Reviews = dynamic(() => import('@/components/reviews/Reviews'), {
  ssr: false,
});

interface IContainer {
  type?: string;
}

const SingleProduct = ({ params }) => {
  const { id } = params;

  const cart = useCartStore((state) => state.cart);
  const closeSubmenu = useSubmenu((state) => state.closeSubmenu);

  const [product, setProduct] = useState<ProductProps | object>({});
  const [sort, setSort] = useState(null);
  const [reviews, setReviews] = useState<ReviewItem>([]);

  const inCart = useMemo(() => {
    const inCart = cart.find((item) => item.id === parseInt(id));
    return !!inCart;
  }, [cart, id]);

  const actionLabel = useMemo(() => {
    return `${inCart ? 'Added' : 'Add'} to cart`;
  }, [inCart]);

  const getSort = useMemo(() => {
    if (sort === 'newest') return 'newest';
    if (sort === 'highest') return 'highest rating';
    if (sort === 'lowest') return 'lowest rating';
  }, [sort]);

  useEffect(() => {
    if (sort === 'newest') {
      setReviews((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    }

    if (sort === 'highest') {
      setReviews((prev) => [...prev].sort((a, b) => b.rating - a.rating));
    }

    if (sort === 'lowest') {
      setReviews((prev) => [...prev].sort((a, b) => a.rating - b.rating));
    }
  }, [sort]);

  useEffect(() => {
    const product = storeProducts.find((item) => item.id === parseInt(id));
    setProduct(product);
  }, [id]);

  useEffect(() => {
    setReviews(reviewItems);
  }, []);

  if (!product) {
    return (
      <Container type='error' onMouseOver={closeSubmenu}>
        <Wrapper>
          <EmptyState />
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container onMouseOver={closeSubmenu}>
      <Wrapper>
        <Product product={product} inCart={inCart} actionLabel={actionLabel} />
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
  );
};

const Container = styled.main<IContainer>`
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
