'use client';

import styled from 'styled-components';

const ReviewHead = () => {
  return (
    <Container>ReviewHead</Container>
  );
}

const Container = styled.div`
  padding: 3rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.star};
  }
`;

export default ReviewHead;
