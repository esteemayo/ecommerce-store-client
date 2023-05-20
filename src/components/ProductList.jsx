import styled from 'styled-components';
import { useState } from 'react';

import CartModal from './CartModal';
import ProductCard from './ProductCard';
import Image from 'next/image';

const ProductList = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedProduct, setIsSelectedProduct] = useState({});

  if (products.length < 1) {
    return (
      <Container>
        <ImageContainer>
          <Image src='/img/no-result.png' width={500} height={300} alt='' />
        </ImageContainer>
      </Container>
    )
  }

  return (
    <Container>
      <ProductsContainer>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              openModal={setIsModalOpen}
              setIsSelectedProduct={setIsSelectedProduct}
            />
          );
        })}
      </ProductsContainer>
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
  width: 100%;
  padding: 8rem 0;
`;

const ImageContainer = styled.div`
  
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 7rem;

  @media only screen and (max-width: 59.375em) {
    gap: 4rem;
  }

  @media only screen and (max-width: 37.5em) {
    gap: 2rem;
  }

  @media only screen and (max-width: 31.25em) {
    gap: 1.5rem;
  }

  @media only screen and (max-width: 26.25em) {
    gap: 3rem;
  }

  @media only screen and (max-width: 18.75em) {
    gap: 1rem;
  }
`;

export default ProductList;
