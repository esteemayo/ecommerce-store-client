import styled from 'styled-components';
import Product from './Product';
import { useState } from 'react';

const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
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
