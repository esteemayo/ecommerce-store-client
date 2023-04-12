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
  font-size: 1.8rem;
`;

const Reviewer = styled.span`
  
`;

const Button = styled.button`
  
`;

const Right = styled.div`
  flex: 1;
  background-color: crimson;
`;

export default ReviewItem;
