'use client';

import styled from 'styled-components';

const Counter = () => {
  return (
    <Container>
      <Heading>Quantity</Heading>
      <Wrapper></Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem 0;
`;

const Heading = styled.h3`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.65rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export default Counter;
