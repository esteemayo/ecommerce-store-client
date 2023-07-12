'use client';

import styled from 'styled-components';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Counter = () => {
  return (
    <Container>
      <Heading>Quantity</Heading>
      <Wrapper>
        <Button type='button'>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <Button type='button'>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Wrapper>
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

  @media only screen and (max-width: 37.5em) {
    gap: 1.5rem;
  }
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  text-align: center;
  font-size: 1.4rem;
  min-width: 3rem;
  height: 3rem;
  padding: 0 0.4rem;
  line-height: 0.2;
  background-color: transparent;
  color: inherit;
`;

export default Counter;
