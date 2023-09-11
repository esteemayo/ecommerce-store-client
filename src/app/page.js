'use client';

import styled from 'styled-components';
import dynamic from 'next/dynamic';

import ClientOnly from '@/components/ClientOnly';
import CarouselSlider from '@/components/sliders/CarouselSlider';

const Categories = dynamic(() => import('@/components/categories/Categories'), { ssr: false });
const FeaturedProducts = dynamic(() => import('@/components/products/FeaturedProducts'), { ssr: false });
const TopReviews = dynamic(() => import('@/components/reviews/TopReviews'), { ssr: false });

const Home = () => {
  return (
    <ClientOnly>
      <Container>
        <CarouselSlider />
        <Categories />
        <FeaturedProducts />
        <TopReviews />
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main``;

export default Home;
