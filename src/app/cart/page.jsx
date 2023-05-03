'use client';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartHeader from '@/components/CartHeader';
import CartItem from '@/components/CartItem';
import PaymentModal from '@/components/PaymentModal';
import CartTotal from '@/components/CartTotal';
import { calcTotals } from '@/features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => ({ ...state.cart }));

  const [isOpen, setIsOpen] = useState(false);
  const [isCash, setIsCash] = useState(false);

  useEffect(() => {
    dispatch(calcTotals());
  }, [cart, dispatch]);

  return (
    <Container>
      <Wrapper>
        <CartHeader />
        <CartItemsContainer>
          {cart.map((cart) => {
            return <CartItem key={cart.id} {...cart} />;
          })}
        </CartItemsContainer>
        <CartTotal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsCash={setIsCash}
        />
      </Wrapper>
      <PaymentModal
        openModal={isCash}
        setIsOpen={setIsOpen}
        closeModal={setIsCash}
      />
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
