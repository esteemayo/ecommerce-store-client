'use client';
import styled from 'styled-components';

const Orders = () => {
  return (
    <Container>
      <Wrapper>
        Orders
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

export default Orders;
