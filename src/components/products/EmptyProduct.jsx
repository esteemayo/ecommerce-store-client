'use client';

import styled from 'styled-components';

const EmptyProduct = () => {
  return (
    <Container>EmptyProduct</Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default EmptyProduct;
