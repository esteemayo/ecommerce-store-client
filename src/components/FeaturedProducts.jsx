import { useState } from 'react';
import styled from 'styled-components';

import Product from './Product';
import { products } from '@/data';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState(products);

  return (
    <Container>
      <Wrapper>
        <Heading>Featured products</Heading>
        <Product />
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  padding: 15rem 0;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
`;

const Heading = styled.h1`
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
  font-size: 2.7rem;
  color: var(--clr-secondary-blue);
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    display: inline-block;
    width: 4rem;
    height: 3px;
    background-color: var(--clr-secondary-blue);
    border-radius: 3px;
  }
`;

export default FeaturedProducts;
