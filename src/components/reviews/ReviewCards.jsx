'use client';

import styled from 'styled-components';

const ReviewCards = () => {
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
`;

const Wrapper = styled.div`
  
`;

export default ReviewCards;
