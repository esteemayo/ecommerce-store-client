import styled from 'styled-components';
import StarRating from './StarRating';
import { useState } from 'react';
import ReviewModal from './ReviewModal';

const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Heading>Reviews</Heading>
        <ReviewContainer>
          <StarRating value={0} />
          <TotalReviews>0 reviews</TotalReviews>
        </ReviewContainer>
        <ReviewsWrapper>
          <EmptyReview>
            <StarRating value={5} />
            <Message>Currently, there are no reviews for this product.</Message>
            <ReviewButton
              type='button'
              onClick={() => setIsModalOpen(true)}
            >
              Leave a review
            </ReviewButton>
          </EmptyReview>
        </ReviewsWrapper>
      </Wrapper>
      <ReviewModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  background-color: var(--clr-white);
  padding-bottom: 4rem;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 4rem;
  background-color: #f4f8f7;
`;

const Heading = styled.h1`
  display: inline-block;
  width: 100%;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 3.2rem;
`;

const ReviewContainer = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  svg {
    font-size: 3rem;
    color: #89a8a0;
  }
`;

const TotalRatings = styled.span`

`;

const TotalReviews = styled.span`
  display: inline-block;
  font-weight: normal;
  font-size: 1.8rem;
  color: inherit;
  line-height: 1.8rem;
`;

const ReviewsWrapper = styled.div`
  padding: 5rem 0;
  border-top: 1px solid #e2e9e7;
`;

const EmptyReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size: 2.5rem;
    color: #89a8a0;
    margin-right: 0.5rem;
  }
`;

const Message = styled.span`
  color: inherit;
`;

const ReviewButton = styled.button`
  border: none;
  display: inline-block;
  padding: 1rem;
  background-color: #e2e9e7;
  color: #89a8a0;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #eaf7f3 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #89a8a0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-position: 100%;
  }
`;

export default Reviews;
