import { useState } from 'react';
import styled from 'styled-components';

import Product from './Product';
import { storeProducts } from '@/data';
import CartModal from './CartModal';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState(storeProducts);

  return (
    <Container>
      <Wrapper>
        <Heading>Featured products</Heading>
        <ProductsContainer>
          {featuredProducts
            .filter((product) => product.featured === true)
            .map((product) => {
              return <Product key={product.id} {...product} />;
            })
          }
        </ProductsContainer>
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

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5rem;
`;

export default FeaturedProducts;
