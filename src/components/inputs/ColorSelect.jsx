'use client';

import styled from 'styled-components';

const ColorSelect = () => {
  return (
    <Container>
      <Heading>Color</Heading>
      <Wrapper></Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem 0;
`;

const Heading = styled.h2`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.6rem;
  margin: 1.5rem 0;

  @media only screen and (max-width: 59.375em) {
    gap: 2.35rem;
  }

  @media only screen and (max-width: 37.5em) {
    margin-top: 1.3rem;
  }

  @media only screen and (max-width: 18.75em) {
    gap: 2rem;
  }
`;

export default ColorSelect;
