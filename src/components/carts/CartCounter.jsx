'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  @media only screen and (max-width: 31.25em) {
    flex-direction: row;
  }
`;

export default CartCounter;
