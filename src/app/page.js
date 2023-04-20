'use client';
import styled from 'styled-components';

import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import TopReviews from '@/components/TopReviews';
import CarouselSlider from '@/components/CarouselSlider';
import ReviewModal from '@/components/ReviewModal';
import { useState } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <CarouselSlider />
      <button onClick={() => setIsModalOpen(true)}>Open</button>
      <Categories />
      <FeaturedProducts />
      <TopReviews />
      <ReviewModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  );
}

const Container = styled.main``;

export default Home;
