import styled from 'styled-components';
import StarRating from './StarRating';

const ReviewItem = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <RatingContainer>
            <StarRating value={5} />
          </RatingContainer>
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
  background-color: greenyellow;
`;

const RatingContainer = styled.div`
  
`;

const Right = styled.div`
  flex: 1;
  background-color: crimson;
`;

export default ReviewItem;
