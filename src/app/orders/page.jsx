'use client';
import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { orders } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const Orders = () => {
  const dispatch = useDispatch();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <Wrapper>
        <Heading>Order history</Heading>
        <OrderContainer>
          {orders.map((order) => {
            const { id, total, status, createdAt } = order;
            return (
              <OrderWrapper key={id} status={status}>
                <OrderId>Order id: {id}</OrderId>
                <OrderDate dateTime={createdAt}>
                  Placed on {new Date(createdAt).toLocaleDateString('en-us', options)}
                </OrderDate>
                <OrderTotal>Total: {' '}
                  <NumericFormat
                    value={total}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  />
                </OrderTotal>
                <Button type='button'>
                  <Link href={`/orders/${encodeURIComponent(id)}`} passHref>
                    Order details
                  </Link>
                </Button>
              </OrderWrapper>
            );
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
  align-items: center;
  gap: 3rem;
`;

const OrderWrapper = styled.div`
  width: 30%;
  /* padding: 2rem; */
  border-radius: 1rem;
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--clr-secondary-green);
  }
`;

const OrderId = styled.h2`
  display: inline-block;
  font-weight: 400;
  font-size: 2rem;
`;

const OrderDate = styled.time`
  display: block;
  font-size: 1.45rem;
  color: #aaa;
`;

const OrderTotal = styled.p`
  font-weight: 500;
  font-size: 3rem;
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

  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: currentColor;
      outline: none;
    }

    &:active {
      color: currentColor;
    }
  }
`;

export default Orders;
