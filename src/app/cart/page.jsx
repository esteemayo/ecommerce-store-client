'use client';
import styled from 'styled-components';

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <HeadingMain>My cart</HeadingMain>
          <HeadingSub>2</HeadingSub>
        </Heading>
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

const Heading = styled.h1`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.65rem;
`;

const HeadingMain = styled.span`
  display: inline-block;
  font-weight: 400;
`;

const HeadingSub = styled.span`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
`;

export default Cart;
