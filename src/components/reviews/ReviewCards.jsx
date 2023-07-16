'use client';

import styled from 'styled-components';

import ReviewCard from './ReviewCard';

const ReviewCards = ({ reviews }) => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem 0 0.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.cartBorder};
  position: relative;

  @media only screen and (max-width: 26.875em) {
    padding-top: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

export default ReviewCards;
