import styled from 'styled-components';
import { useState } from 'react';

import Product from './Product';
import CartModal from './CartModal';

const ProductList = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelectedProduct, setIsSelectedProduct] = useState(null);

  return (
    <Container>
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
`;

export default ProductList;
