'use client';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import ClientOnly from '@/components/ClientOnly';
import OrderStatus from '@/components/images/orders/OrderStatus';
import FormatPrice from '@/components/FormatPrice';

import { useCloseSubmenu } from '@/hooks/useCloseSubmenu';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const Order = () => {
  const { handleSubmenu } = useCloseSubmenu();
  const dispatch = useDispatch();
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return 'done';
    if (index - status === 1) return 'inProgress';
    if (index - status > 1) return 'undone';
  };

  return (
    <ClientOnly>
      <Container onMouseOver={handleSubmenu}>
        <OrderWrapper>
          <Wrapper>
            <OrderContainer>
              <Left>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Order ID</Th>
                      <Th>Customer</Th>
                      <Th>Address</Th>
                      <Th>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <OrderId>63deb1d1</OrderId>
                      </Td>
                      <Td>
                        <OrderName>Mary Doe</OrderName>
                      </Td>
                      <Td>
                        <OrderAddress>Lagos,Nigeria</OrderAddress>
                      </Td>
                      <Td>
                        <OrderTotal>
                          <FormatPrice value={420} />
                        </OrderTotal>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
                <OrderStatus statusClass={statusClass} />
              </Left>
              <Right>
                <RightWrapper>
                  <Heading>Cart total</Heading>
                  <TotalContainer>
                    <TotalText>Subtotal:</TotalText>
                    <FormatPrice value={99.99} />
                  </TotalContainer>
                  <TotalContainer>
                    <TotalText>Discount:</TotalText>
                    <FormatPrice value={0.00} />
                  </TotalContainer>
                  <TotalContainer>
                    <TotalText>Total:</TotalText>
                    <FormatPrice value={88.90} />
                  </TotalContainer>
                  <Button type='button' disabled>Paid</Button>
                </RightWrapper>
              </Right>
            </OrderContainer>
          </Wrapper>
        </OrderWrapper>
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const OrderWrapper = styled.div`
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
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  @media only screen and (max-width: 64em) {
    max-width: 85rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 80rem;
  }
`;

const OrderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 2;

  @media only screen and (max-width: 37.5em) {
    width: 100%;
  }
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
  margin-bottom: 5rem;
`;

const Thead = styled.thead``;

const Tr = styled.tr``;

const Th = styled.th`
  font-weight: 600;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 64em) {
    font-size: 1.6rem;
  }
`;

const Tbody = styled.tbody``;

const Td = styled.td`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const OrderId = styled.span`
  display: inline-block;
  text-transform: uppercase;
`;

const OrderName = styled.span``;

const OrderAddress = styled.span``;

const OrderTotal = styled.span``;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 37.5em) {
    width: 100%;
  }
`;

const RightWrapper = styled.div`
  width: 90%;
  max-height: 30rem;
  background-color: ${({ theme }) => theme.bgOrderTotal};
  color: ${({ theme }) => theme.textOrderTotal};
  padding: 5rem;
  padding-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxOrderTotal};
  -webkit-box-shadow: ${({ theme }) => theme.boxOrderTotal};
  -moz-box-shadow: ${({ theme }) => theme.boxOrderTotal};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 64em) {
    width: 100%;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Heading = styled.h2`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  line-height: 1.3;

  @media only screen and (max-width: 64em) {
    line-height: 1.4;
  }

  @media only screen and (max-width: 37.5em) {
    align-items: baseline;
  }

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

const TotalText = styled.b`
  display: inline-block;
  text-transform: capitalize;

  @media only screen and (max-width: 37.5em) {
    font-size: 1.7rem;
    letter-spacing: 3px;
  }
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 1.35rem 3rem;
  background-color: var(--clr-black);
  color: ${({ theme }) => theme.textBtn};
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #333 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #222;
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 64em) {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }

  @media only screen and (max-width: 37.5em), only screen and (hover: none) {
    font-size: 1.55rem;
  }

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    opacity: 0.75;
  }
`;

export default Order;
