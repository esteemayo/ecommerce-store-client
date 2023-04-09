'use client';
import styled from 'styled-components';
import Slider from '@/components/Slider';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';

const Home = () => {
  return (
    <Container>
      <Slider />
      <Categories />
      <FeaturedProducts />
    </Container>
  );
}

const Container = styled.div``;

export default Home;
