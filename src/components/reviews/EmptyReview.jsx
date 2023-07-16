'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';

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

    @media only screen and (max-width: 26.875em) {
      font-size: 2.25rem;
    }

    @media only screen and (max-width: 18.75em) {
      font-size: 2rem;
    }
  }
`;

const Message = styled.span`
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 18.75em) {
    font-size: 1.5rem;
  }
`;

EmptyReview.defaultProps = {
  title: 'Currently, there are no reviews for this product.',
  label: 'Leave a review',
};

EmptyReview.propTypes = {
  rating: PropTypes.number.isRequired,
  title: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default EmptyReview;
