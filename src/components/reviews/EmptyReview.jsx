'use client';

import styled from 'styled-components';
import StarRating from '../StarRating';

const EmptyReview = ({ rating }) => {
  return (
    <Container>
      <StarRating value={rating} />
    </Container>
  );
}

const Container = styled.div`
  
`;

const Message = styled.span`
  
`;

export default EmptyReview;
