'use client';
import styled from 'styled-components';

const Order = () => {
  return (
    <Container>
      <Wrapper>
        Order
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  padding: 8rem 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
`;

export default Order;
