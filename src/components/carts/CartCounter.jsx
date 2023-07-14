'use client';

import styled from 'styled-components';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartCounter = ({ quantity }) => {
  return (
    <Container>
      <Wrapper>
        <Button type='button'>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Amount>{quantity}</Amount>
        <Button type='button'>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </Wrapper>
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

const Button = styled.button`
  border: none;
  display: inline-block;
`;

const Amount = styled.span`
  
`;

export default CartCounter;
