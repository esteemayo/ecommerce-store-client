'use client';
import styled from 'styled-components';

import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import TopReviews from '@/components/TopReviews';
import CarouselSlider from '@/components/CarouselSlider';
import ReviewModal from '@/components/ReviewModal';
import { useState } from 'react';

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
