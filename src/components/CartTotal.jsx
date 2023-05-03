import { useState } from 'react';
import styled from 'styled-components';

const CartTotal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <TotalContainer>
          <TotalWrapper>
            <Text>Subtotal:</Text>
            <PriceTotal>$88.97</PriceTotal>
          </TotalWrapper>
        </TotalContainer>
        <TotalContainer>
          <TotalWrapper>
            <Text>Tax:</Text>
            <PriceTotal>$8.897</PriceTotal>
          </TotalWrapper>
        </TotalContainer>
        <TotalContainer>
          <TotalWrapper>
            <Text>Total:</Text>
            <PriceTotal>$97.867</PriceTotal>
          </TotalWrapper>
        </TotalContainer>
        <ButtonContainer>
          {isOpen ? (
            <Button type='button'>Cash on delivery</Button>
          ) : (
            <Button type='button'>Checkout</Button>
          )}
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem 5rem;
  border-top: 1px solid #e2e9e7;
  line-height: 1.2;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.h3`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 2.3rem;
`;

const PriceTotal = styled.span`
  font-weight: 600;
  font-size: 1.7rem;
`;

const ButtonContainer = styled.div`
  padding: 1rem 0;
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  font-size: 1.8rem;
  width: 100%;
  padding: 1rem 3.5rem;
  background-color: var(--clr-black);
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #333 50%
  );
  background-size: 220%;
  border: 1px solid var(--clr-black);
  border-radius: 0.5rem;
  outline-color: #777;
`;

export default CartTotal;
