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
`;

export default ColorSelect;
