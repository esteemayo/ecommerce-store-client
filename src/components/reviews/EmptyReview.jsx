'use client';

import styled from 'styled-components';

import StarRating from '../StarRating';
import ReviewButton from './ReviewButton';

const EmptyReview = ({ rating, title, label, onClick }) => {
  return (
    <Container>
      <StarRating value={rating} />
      <Message>{title}</Message>
      <ReviewButton
        actionLabel={label}
        onAction={onClick}
      />
    </Container>
  );
}

const Container = styled.div`
  
`;

const Message = styled.span`
  
`;

export default EmptyReview;
