'use client';

import styled from 'styled-components';

import ReviewButton from './ReviewButton';
import StarRating from '../StarRating';
import ReviewFilter from './ReviewFilter';

const ReviewHead = ({
  sort,
  sortLabel,
  rating,
  reviews,
  onOpen,
  onSort,
  onToggle,
}) => {
  return (
    <Container>
      <Ratings>
        <TotalRatings>
          {reviews.length === 0 ? 0 : reviews.length.toFixed(1)}
        </TotalRatings>
        <StarRating value={rating} />
        <TotalReviews>{reviews.length} reviews</TotalReviews>
      </Ratings>
      <Wrapper>
        {reviews.length > 0 && (
          <ReviewButtonWrapper>
            <ReviewButton
              actionLabel='Leave a review'
              onAction={onOpen}
            />
          </ReviewButtonWrapper>
        )}
        <ReviewFilter
          sort={sort}
          value={sortLabel}
          isOpen={isFilterOpen}
          onClick={onToggle}
          onSort={onSort}
        />
      </Wrapper>
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 26.875em) {
    margin-bottom: 2rem;
  }
`;

const TotalRatings = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.text};
  line-height: 3.2rem;

  @media only screen and (max-width: 26.875em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2.8rem;
  }
`;

const TotalReviews = styled.span`
  display: inline-block;
  font-weight: normal;
  font-size: 1.8rem;
`;

const Wrapper = styled.div`
  
`;

const ReviewButtonWrapper = styled.div``;

export default ReviewHead;
