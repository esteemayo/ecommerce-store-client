import { useState } from 'react';
import styled from 'styled-components';

const CartTotal = ({ isOpen, setIsOpen, setIsCash }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains('container')) {
      setIsOpen(false);
    }
  };

  return (
    <Container onClick={handleClose}>
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
            <>
              <Button type='button' className='btn-pay' onClick={() => setIsCash(true)}>Cash on delivery</Button>
              <Button type='button' className='btn-pay'>Checkout now</Button>
            </>
          ) : (
            <Button type='button' onClick={() => setIsOpen(true)}>
              Checkout
            </Button>
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
  text-transform: capitalize;
  font-size: 1.8rem;
  width: 100%;
  padding: ${({ btnType }) => btnType === 'check' ? '1rem 3rem' : '1rem 0.5rem'};
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
  line-height: 1.3em;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-position: 100%;
  }
`;

export default CartTotal;
