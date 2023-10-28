'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { useSubmenu } from '@/hooks/useSubmenu';
import usePaymentModal from '@/hooks/usePaymentModal';
import { useCartStore } from '@/hooks/useCartStore';

import CartHeader from '@/components/carts/CartHeader';

const CartItem = dynamic(() => import('@/components/carts/CartItem'), {
  ssr: false,
});
const PaymentModal = dynamic(() => import('@/components/modals/PaymentModal'), {
  ssr: false,
});
const CartTotal = dynamic(() => import('@/components/carts/CartTotal'), {
  ssr: false,
});

const Cart = () => {
  const cart = useCartStore((state) => state.cart);

  const paymentModal = usePaymentModal();
  const closeSubmenu = useSubmenu((state) => state.closeSubmenu);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  let bodyContent;

  if (cart.length < 1) {
    bodyContent = (
      <EmptyWrapper>
        <StyledImage
          src='/img/empty-cart.png'
          width={400}
          height={400}
          alt=''
        />
        <Link href='/products' passHref>
          <Button type='button'>Back to shopping</Button>
        </Link>
      </EmptyWrapper>
    );
  } else {
    bodyContent = (
      <Wrapper>
        <CartHeader />
        <CartItemsContainer>
          {cart.map((cart) => {
            return <CartItem key={cart.id} {...cart} />;
          })}
        </CartItemsContainer>
        <CartTotal
          isOpen={isOpen}
          onOpen={handleOpen}
          onClose={handleClose}
          onAction={paymentModal.onOpen}
        />
      </Wrapper>
    );
  }

  return (
    <Container onMouseOver={closeSubmenu}>
      <CartContainer>{bodyContent}</CartContainer>
      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={handleClose}
        onExit={paymentModal.onClose}
      />
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const CartContainer = styled.div`
  width: 100%;
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

  @media only screen and (max-width: 23.75em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 18.75em) {
    padding-left: 1.3rem;
    padding-right: 1.3rem;
  }
`;

const EmptyWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    min-height: 50vh;
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

const StyledImage = styled(Image)`
  width: 40rem;
  height: 40rem;
  display: block;
  object-fit: cover;

  @media only screen and (max-width: 56.25em) {
    width: 33rem;
    height: 33rem;
  }
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textEmptyCartBtn};
  border: 2px solid ${({ theme }) => theme.textEmptyCartBtn};
  border-radius: 0.5rem;
  outline-color: #85beae;
  margin-top: 2rem;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.boxCart};
  -webkit-box-shadow: ${({ theme }) => theme.boxCart};
  -moz-box-shadow: ${({ theme }) => theme.boxCart};
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

  @media only screen and (max-width: 18.75em) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export default Cart;