'use client';
import styled from 'styled-components';

import { cartItems } from '@/data';
import CartHeader from '@/components/CartHeader';
import CartItem from '@/components/CartItem';
import CartTotal from '@/components/CartTotal';
import { useState } from 'react';
import PaymentModal from '@/components/PaymentModal';

const Cart = () => {
  const [isCash, setIsCash] = useState(false);

  return (
    <Container>
      <Wrapper>
        <CartHeader />
        <CartItemsContainer>
          {cartItems.map((cart) => {
            return <CartItem key={cart.id} {...cart} />;
          })}
        </CartItemsContainer>
        <CartTotal setIsCash={setIsCash} />
      </Wrapper>
      <PaymentModal />
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

const CartItemsContainer = styled.div`
  padding: 0.5rem 5rem 3rem 5rem;
`;

export default Cart;
