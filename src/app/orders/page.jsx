'use client';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { orders } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import OrderCard from '@/components/OrderCard';

const Orders = () => {
  const dispatch = useDispatch();

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
`;

const Heading = styled.h1`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 2.8rem;
`;

const OrderContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
`;

const OrderDate = styled.time`
  display: block;
  font-size: 1.45rem;
  color: #aaa;
`;

const OrderTotal = styled.p`
  font-weight: 500;
  font-size: 2.5rem;
  color: inherit;
  margin: 1rem 0 0.5rem;
`;

const Button = styled.button`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.3rem;
  padding: 1rem 2rem;
  background-color: transparent;
  color: #aaa;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  outline-color: #eee;
  cursor: pointer;
`;

export default Orders;
