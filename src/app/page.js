'use client';
import styled from 'styled-components';

import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import TopReviews from '@/components/reviews/TopReviews';
import CarouselSlider from '@/components/CarouselSlider';

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
