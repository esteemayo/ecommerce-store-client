'use client';

import styled from 'styled-components';
import dynamic from 'next/dynamic';

import CarouselSlider from '@/components/sliders/CarouselSlider';

import { useSubmenu } from '@/hooks/useSubmenu';

const Categories = dynamic(() => import('@/components/categories/Categories'), {
  ssr: false,
});
const FeaturedProducts = dynamic(
  () => import('@/components/products/FeaturedProducts'),
  { ssr: false }
);
const TopReviews = dynamic(() => import('@/components/reviews/TopReviews'), {
  ssr: false,
});

const Home = () => {
  const closeSubmenu = useSubmenu((state) => state.closeSubmenu);

  return (
    <Container onMouseOver={closeSubmenu}>
      <CarouselSlider />
      <Categories />
      <FeaturedProducts />
      <TopReviews />
    </Container>
  );
};

const Container = styled.main``;

export default Home;
