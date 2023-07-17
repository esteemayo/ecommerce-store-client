'use client';

import styled from 'styled-components';

import Categories from '@/components/categories/Categories';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import TopReviews from '@/components/reviews/TopReviews';
import CarouselSlider from '@/components/sliders/CarouselSlider';
import ClientOnly from '@/components/ClientOnly';

const Home = () => {
  return (
    <Container>
      <CarouselSlider />
      <Categories />
      <FeaturedProducts />
      <TopReviews />
    </Container>
  );
}

const Container = styled.main``;

export default Home;
