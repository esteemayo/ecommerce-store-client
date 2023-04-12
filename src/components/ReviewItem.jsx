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
  background-color: #f5f5f5;
  width: 700px;
  height: 50rem;
  margin-right: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  background-color: greenyellow;
`;

const RatingContainer = styled.div`
  
`;

const ReviewCount = styled.span`
  
`;

const ReviewContainer = styled.div`
  
`;

const Review = styled.p`
  
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
