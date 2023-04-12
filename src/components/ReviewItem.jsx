import styled from 'styled-components';
import StarRating from './StarRating';

const ReviewItem = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <RatingContainer>
            <StarRating value={5} />
            <ReviewCount>Based on 61 reviews</ReviewCount>
          </RatingContainer>
          <ReviewContainer>
            <Review>
              Exactly what I wanted - slightly elevated but still warm. Fits like adream with nice big pockets with zippers. Great addition!
            </Review>
            <Reviewer>Sarah P.</Reviewer>
          </ReviewContainer>
          <Button>Shop now</Button>
        </Left>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  background-color: #fffdfd;
  width: 700px;
  height: 50rem;
  margin-right: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 10rem 4rem;
  background-color: tomato;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ReviewCount = styled.span`
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

const ReviewContainer = styled.div`
  
`;

const Review = styled.p`
  width: 80%;
  font-weight: 500;
  font-size: 1.8rem;
`;

const Reviewer = styled.span`
  display: inline-block;
  font-weight: 300;
  font-weight: 1.5rem;
  padding: 1rem 0;
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  text-align: left;
  font-weight: 600;
  font-size: 1.7rem;
  background-color: transparent;
  color: #000;
  cursor: pointer;

  &::after {
    content: '';
    display: inline-block;
  }
`;

const Right = styled.div`
  flex: 1;
  background-color: crimson;
`;

export default ReviewItem;
