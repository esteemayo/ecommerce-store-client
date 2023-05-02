'use client';
import styled from 'styled-components';
import CartItem from '@/components/CartItem';
import { cartItems } from '@/data';

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <HeadingMain>My cart</HeadingMain>
          <HeadingSub>2</HeadingSub>
        </Heading>
        <CartItemsContainer>
          {cartItems.map((cart) => {
            return <CartItem key={cart.id} {...cart} />;
          })}
        </CartItemsContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  padding: 8rem 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  border-radius: 1rem;
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.65rem;
  padding: 1rem 5rem;
  margin-bottom: 3rem;
`;

const HeadingMain = styled.span`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
`;

const HeadingSub = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-weight: 300;
  font-size: 1.7rem;
  background-color: var(--clr-white);
  color: inherit;
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  border-radius: 50%;
`;

const CartItemsContainer = styled.div`
  
`;

export default Cart;
