import { useState } from 'react';
import styled from 'styled-components';

import Product from './Product';
import { storeProducts } from '@/data';
import CartModal from './CartModal';
import Header from './Header';

const FeaturedProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedProduct, setIsSelectedProduct] = useState({});
  const [featuredProducts, setFeaturedProducts] = useState(storeProducts);

  return (
    <Container>
      <Wrapper>
        <Heading>Featured products</Heading>
        <ProductsContainer>
          {featuredProducts
            .filter((product) => product.featured === true)
            .map((product) => {
              return (
                <Product
                  key={product.id}
                  product={product}
                  openModal={setIsModalOpen}
                  setIsSelectedProduct={setIsSelectedProduct}
                />
              );
            })
          }
        </ProductsContainer>
      </Wrapper>
      <CartModal
        isModalOpen={isModalOpen}
        closeModal={setIsModalOpen}
        product={isSelectedProduct}
        setIsSelectedProduct={setIsSelectedProduct}
      />
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
  max-width: 120rem;
  margin: 0 auto;
`;

const Heading = styled.h1`
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
  font-size: 2.7rem;
  color: var(--clr-secondary-green);
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    display: inline-block;
    width: 4rem;
    height: 3px;
    background-color: var(--clr-secondary-green);
    border-radius: 3px;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

export default FeaturedProducts;
