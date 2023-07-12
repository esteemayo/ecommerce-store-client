'use client';

import styled from 'styled-components';

const ColorSelect = () => {
  return (
    <Container>
      <Heading>Color</Heading>
      <Wrapper>
        <Color type='button' />
      </Wrapper>
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

const Color = styled.button`
  border: none;
  display: block;
  width: 2.2rem;
  height: 2.2rem;
  background-color: ${({ color, mode }) => mode && color === 'black' ? '#111' : color};
  background-color: ${({ color, mode }) => !mode && color === 'white' && '#f9f9f9'};
  border-radius: 50%;
  outline: 1px solid ${({ theme, selected }) => selected ? theme.cartSelected : 'transparent'};
  outline-offset: 2px;
  cursor: ${({ selected }) => selected ? 'default' : 'pointer'};
`;

export default ColorSelect;
