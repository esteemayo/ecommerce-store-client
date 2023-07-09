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
`;

const CartTotal = styled.span`
  
`;

export default CartQuantity;
