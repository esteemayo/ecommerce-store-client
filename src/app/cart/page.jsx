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
          {/* <Heading>Your cart is currently empty!</Heading> */}
          <Image
            src='/img/empty-cart.png'
            width={400}
            height={400}
            alt=''
          />
          <Link href='/products' passHref>
            <Button type='button'>Back to shopping</Button>
          </Link>
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
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 0;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
    padding: 8rem 0;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  /* @media only screen and (max-width: 43.75em) {
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 7rem;
    padding-right: 7rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (max-width: 23.75em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 18.75em) {
    padding-left: 1.3rem;
    padding-right: 1.3rem;
  } */
`;

const HeadingWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    min-height: 50vh;
  }

  img {
    width: 40rem;
    height: 40rem;
    display: block;
    object-fit: cover;

    @media only screen and (max-width: 56.25em) {
      width: 33rem;
      height: 33rem;
    }
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
      font-size: inherit;
      color: currentColor;
      outline: none;
    }

    &:active {
      color: currentColor;
    }
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

  @media only screen and (max-width: 43.75em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export default Cart;
