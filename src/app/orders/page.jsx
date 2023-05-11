'use client';
import styled from 'styled-components';

const Orders = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Order history</Heading>
        <OrderContainer>
          <OrderWrapper>

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
  
`;

const OrderWrapper = styled.div`
  
`;

const OrderId = styled.h2`
  
`;

export default Orders;
