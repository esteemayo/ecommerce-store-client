'use client';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import CartHeader from '@/components/CartHeader';
import CartItem from '@/components/CartItem';
import PaymentModal from '@/components/PaymentModal';
import CartTotal from '@/components/CartTotal';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import { calcTotals } from '@/features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => ({ ...state.cart }));

  const [isOpen, setIsOpen] = useState(false);
  const [isCash, setIsCash] = useState(false);

  useEffect(() => {
    dispatch(calcTotals());
  }, [cart, dispatch]);

  if (cart.length < 1) {
    return (
      <Container onMouseOver={() => dispatch(closeSubmenu())}>
        <HeadingWrapper>
          <Heading>Your cart is currently empty!</Heading>
          <Image
            src='/img/empty-cart.png'
            width={400}
            height={400}
            alt=''
          />
          <Button type='button'>
            <Link href='/products' passHref>Back to shopping</Link>
          </Button>
        </HeadingWrapper>
      </Container>
    );
  }

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
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

const HeadingWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 40rem;
    height: 40rem;
    display: block;
    object-fit: cover;
  }
`;

const Heading = styled.h1`
  font-weight: 300;
  font-size: 3.2rem;
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  background-color: var(--clr-white);
  color: var(--clr-secondary-green);
  border: 2px solid var(--clr-primary-green);
  border-radius: 0.5rem;
  outline-color: #85beae;
  margin-top: 2rem;
  cursor: pointer;

  a {
    &:link,
    &:visited {
      text-decoration: none;
      font-size: inherit;
      color: currentColor;
    }

    &:active {
      color: currentColor;
    }
  }
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
