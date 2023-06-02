'use client';
import styled from 'styled-components';

const NewProduct = () => {
  return (
    <Container>
      NewProduct
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

export default NewProduct;
