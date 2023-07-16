'use client';

import styled from 'styled-components';
import StarRating from '../StarRating';

const ReviewHead = ({ reviews }) => {
  return (
    <Container>
      <Ratings>
        <TotalRatings>
          {reviews.length === 0 ? 0 : reviews.length.toFixed(1)}
        </TotalRatings>
      </Ratings>
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.star};

    @media only screen and (max-width: 26.875em) {
      font-size: 2.65rem;
    }

    @media only screen and (max-width: 18.75em) {
      font-size: 2.45rem;
    }
  }
`;

const Ratings = styled.div`
  
`;

const TotalRatings = styled.span`
  
`;

export default ReviewHead;
