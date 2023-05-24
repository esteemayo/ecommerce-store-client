'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { orders } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import OrderCard from '@/components/OrderCard';

const Orders = () => {
  const dispatch = useDispatch();

  if (orders.length < 1) {
    return (
      <Container onMouseOver={() => dispatch(closeSubmenu())}>
        <Wrapper>
          <ImageContainer>
            <Image
              src='/img/empty-list.png'
              width={500}
              height={500}
              alt=''
            />
            <Message>No orders found</Message>
          </ImageContainer>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <Wrapper>
        <Heading>Order history</Heading>
        <OrderContainer>
          {orders.map((order) => {
            return <OrderCard key={order.id} {...order} />
          })}
        </OrderContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  padding: 10rem 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
  }

  /* @media only screen and (max-width: 64em) {
    max-width: 90rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 43.75em) {
    max-width: 65rem;
  }

  @media only screen and (max-width: 37.5em) {
    max-width: 50rem;
  }

  @media only screen and (max-width: 28.75em) {
    max-width: 40rem;
  }

  @media only screen and (max-width: 21.875em) {
    padding: 0 2rem;
  } */
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 30rem;
    height: 30rem;
    display: block;
    object-fit: cover;
  }
`;

const Message = styled.span`
  display: block;
  font-size: 3rem;
  margin-top: -5rem;

  @media only screen and (max-width: 37.5em) {
    font-size: 2.5rem;
  }
`;

const Heading = styled.h1`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 2.8rem;

  @media only screen and (max-width: 64em) {
    font-size: 2.5rem;
  }
`;

const OrderContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;

  @media only screen and (max-width: 37.5em) {
    justify-content: center;
  }

  @media only screen and (max-width: 21.875em) {
    justify-content: flex-start;
  }
`;

export default Orders;
