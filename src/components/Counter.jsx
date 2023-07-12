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
`;

const Wrapper = styled.div`

`;

export default Counter;
