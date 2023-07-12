'use client';

import styled from 'styled-components';

const SizeSelect = () => {
  return (
    <Container>SizeSelect</Container>
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
  
`;

export default SizeSelect;
