'use client';
import styled from 'styled-components';
import Slider from '@/components/Slider';
import Categories from '@/components/Categories';

const Home = () => {
  return (
    <Container>
      <Slider />
      <Categories />
    </Container>
  );
}

const Container = styled.div``;

export default Home;
