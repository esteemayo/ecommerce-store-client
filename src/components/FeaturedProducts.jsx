import { useState } from 'react';
import styled from 'styled-components';

import Product from './Product';
import { storeProducts } from '@/data';
import Header from './Header';
import CartModal from './CartModal';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedProduct, setIsSelectedProduct] = useState({});
  const [featuredProducts, setFeaturedProducts] = useState(storeProducts);

  return (
    <Container>
      <Wrapper>
        <Header title='Featured products' />
        <ProductsContainer>
          {featuredProducts
            .filter((product) => product.featured === true)
            .map((product) => {
              return (
                // <Product
                //   key={product.id}
                //   product={product}
                //   openModal={setIsModalOpen}
                //   setIsSelectedProduct={setIsSelectedProduct}
                // />
                <ProductCard
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

  @media only screen and (max-width: 64em) {
    padding: 13rem 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-between; */
  /* row-gap: 5rem;
  column-gap: 0rem; */
  gap: 7rem;
`;

export default FeaturedProducts;
