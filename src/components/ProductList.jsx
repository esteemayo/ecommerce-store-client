import styled from 'styled-components';
import { useState } from 'react';

import Product from './Product';
import CartModal from './CartModal';

const ProductList = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      {products.map((product) => {
        return (
          <Product
            {...product}
            key={product.id}
            openModal={setIsModalOpen}
          />
        );
      })}
      <CartModal
        isModalOpen={isModalOpen}
        closeModal={setIsModalOpen}
      />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
  padding: 8rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5rem;
`;

export default ProductList;
