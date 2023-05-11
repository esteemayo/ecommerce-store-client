'use client';
import styled from 'styled-components';

const Orders = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Order history</Heading>
        <OrderContainer>
          <OrderWrapper>
            <OrderId>Order id: 63deb1d1a79fe9e5f5a46325</OrderId>
            <OrderDate>Placed on May 11, 2023</OrderDate>
            <OrderTotal>Total: $248</OrderTotal>
          </OrderWrapper>
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
`;

const OrderWrapper = styled.div`
  width: 30%;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
`;

const OrderId = styled.h2`
  display: inline-block;
  font-weight: 400;
  font-size: 2rem;
`;

const OrderDate = styled.time`
  display: block;
  font-size: 1.45rem;
`;

const OrderTotal = styled.p`
  font-weight: 600;
  font-size: 3rem;
`;

export default Orders;
