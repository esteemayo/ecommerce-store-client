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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;

  svg {
    font-size: 2.5rem;
    fill: ${({ theme }) => theme.star};
    margin-right: 0.5rem;
  }
`;

const Message = styled.span`
  
`;

export default EmptyReview;
