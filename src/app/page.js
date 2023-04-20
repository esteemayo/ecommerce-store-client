'use client';
import styled from 'styled-components';

import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import TopReviews from '@/components/TopReviews';
import CarouselSlider from '@/components/CarouselSlider';
import ReviewModal from '@/components/ReviewModal';
import { useState } from 'react';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <CarouselSlider />
      <button onClick={() => setOpenModal(true)}>Open</button>
      <Categories />
      <FeaturedProducts />
      <TopReviews />
      <ReviewModal onOpen={openModal} onClose={() => setOpenModal(false)} />
    </Container>
  );
}

const Container = styled.main``;

export default Home;
