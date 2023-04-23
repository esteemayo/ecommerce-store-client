import styled from 'styled-components';
import StarRating from './StarRating';

const Reviews = () => {
  return (
    <Container>
      <Heading>Reviews</Heading>
      <ReviewContainer>
        <StarRating value={0} />
        <TotalReviews>0 reviews</TotalReviews>
      </ReviewContainer>
      <ReviewsWrapper>

      </ReviewsWrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
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
  
`;

export default Reviews;
