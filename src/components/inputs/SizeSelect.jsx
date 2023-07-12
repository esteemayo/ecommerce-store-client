'use client';

import styled from 'styled-components';

const SizeSelect = ({ value }) => {
  return (
    <Container>
      <Heading>Select a size</Heading>
      <Wrapper>
        {value?.map((item, index) => {
          return (
            <Size
              key={index}
              type='button'
            />
          );
        })}
      </Wrapper>
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
  display: flex;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 37.5em) {
    margin-top: 1.3rem;
  }
`;

const Size = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1.4rem;
  min-width: 4rem;
  height: 3rem;
  padding: 1.6rem 0.4rem;
  line-height: 0.2;
  background-color: ${({ bcg, theme }) => bcg ? theme.cartSelected : 'transparent'};
  color: ${({ bcg }) => bcg ? 'var(--clr-white)' : 'inherit'};
  border: 2px solid ${({ bcg, theme }) => bcg ? theme.cartSelected : theme.sizeHover};
  border-radius: 0.4rem;
  outline-color: #ccc;
  margin-bottom: 0.8rem;
  cursor: ${({ bcg }) => bcg ? 'default' : 'pointer'};
  transition: all 0.1s ease-in-out;

  @media only screen and (max-width: 37.5em) {
    min-width: 3.75rem;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    font-size: 1.35rem;
  }
`;

export default SizeSelect;
