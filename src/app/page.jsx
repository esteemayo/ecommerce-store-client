'use client';
import styled from 'styled-components';

import Categories from '@/components/Categories';
import Slider from '@/components/Slider';
import FeaturedProducts from '@/components/FeaturedProducts';
import TopReviews from '@/components/TopReviews';

const Home = () => {
  return (
    <Container>
      <Slider />
      <Categories />
      <FeaturedProducts />
      <TopReviews />
    </Container>
  );
}

const Container = styled.main``;

export default Home;
