import styled from 'styled-components';
import { useState } from 'react';

import Product from './Product';
import CartModal from './CartModal';

const ProductList = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedProduct, setIsSelectedProduct] = useState({});

  return (
    <Container>
      <ProductsContainer>
        {products.map((product) => {
          return (
            <Product
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 4rem;
  column-gap: 1rem;

  @media only screen and (max-width: 37.5em) {
    padding: 4rem 3rem;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 7rem;
`;

export default ProductList;
