'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const CartQuantity = () => {
  const { qty } = useSelector((state) => ({ ...state.cart }));

  return (
    <Container>CartQuantity</Container>
  );
}

const Container = styled.div`
  
`;

const CartTotal = styled.span`
  
`;

export default CartQuantity;
