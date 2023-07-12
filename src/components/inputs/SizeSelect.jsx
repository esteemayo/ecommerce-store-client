'use client';

import styled from 'styled-components';

const SizeSelect = () => {
  return (
    <Container>
      <Heading>Select a size</Heading>
      <Wrapper></Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 4rem;

  @media only screen and (max-width: 37.5em) {
    margin-bottom: 2rem;
  }
`;

const Heading = styled.h3`
  display: inline-block;
  font-weight: 400;
  font-size: 1.65rem;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  margin-top: 1.5rem;
`;

export default SizeSelect;
