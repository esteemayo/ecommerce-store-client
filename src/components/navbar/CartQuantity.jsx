'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const CartQuantity = () => {
  const { qty } = useSelector((state) => ({ ...state.cart }));

  return (
    <Container>
      <Link href='/cart' passHref>
        <FontAwesomeIcon icon={faBagShopping} />
        <CartTotal>{qty}</CartTotal>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: var(--clr-white);
      outline-color: var(--clr-primary-green);
    }

    &:active {
      color: currentColor;
    }

    svg {
      font-size: 2.3rem;
      fill: currentColor;
    }
  }
`;

const CartTotal = styled.span`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  background-color: var(--clr-tertiary-green);
  color: var(--clr-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

export default CartQuantity;
