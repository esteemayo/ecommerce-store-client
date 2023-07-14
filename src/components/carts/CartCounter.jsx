'use client';

import styled from 'styled-components';

const CartCounter = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 31.25em) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export default CartCounter;
