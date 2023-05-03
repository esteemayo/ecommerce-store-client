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
  
`;

const Button = styled.button`
  
`;

export default CartTotal;
