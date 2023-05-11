'use client';
import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';
import Link from 'next/link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
                <Order>
                  <OrderDateIconContainer>
                    <OrderDateWrapper>
                      <OrderId>Order id: {id}</OrderId>
                      <OrderDate dateTime={createdAt}>
                        Placed on {new Date(createdAt).toLocaleDateString('en-us', options)}
                      </OrderDate>
                    </OrderDateWrapper>
                    <OrderIconWrapper>
                      <MoreVertIcon />
                    </OrderIconWrapper>
                  </OrderDateIconContainer>
                  <OrderTotal>Total: {' '}
                    <NumericFormat
                      value={total}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                    />
                  </OrderTotal>
                  <Link href={`/orders/${encodeURIComponent(id)}`} passHref>
                    <Button type='button'>
                      Order details
                    </Button>
                  </Link>
                </Order>
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
  border-radius: 1rem;
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);

  &::before {
    content: '';
    display: block;
    width: 95%;
    height: 2px;
    margin: 0 auto;
    background-color: ${({ status }) => status === 0 && 'var(--clr-primary-red)'};
    background-color: ${({ status }) => status === 1 && '#ffb900'};
    background-color: ${({ status }) => status === 2 && 'var(--clr-secondary-green)'};
    border-radius: 1rem;
  }
`;

const OrderDateIconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const OrderDateWrapper = styled.div``;

const OrderIconWrapper = styled.div`
  svg {
    font-size: 1.8rem;
    fill: #bbb;
  }
`;

const Order = styled.div`
  padding: 2rem;

  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: #aaa;
      outline: none;
    }

    &:active {
      color: #aaa;
    }
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
`;

export default Orders;
