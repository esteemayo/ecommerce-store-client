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
`;

export default SizeSelect;
