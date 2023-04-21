'use client';
import styled from 'styled-components';

import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import TopReviews from '@/components/TopReviews';
import CarouselSlider from '@/components/CarouselSlider';
import ReviewCard from '@/components/ReviewCard';
import { reviews } from '@/data';

const Home = () => {
  return (
    <Container>
      <CarouselSlider />
      <Categories />
      <FeaturedProducts />
      <TopReviews />
      <ReviewCard />
    </Container>
  );
}

const Container = styled.main``;

export default Home;
