import styled from 'styled-components';

const ReviewItem = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Left</Left>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  background-color: yellowgreen;
  width: 700px;
  height: 50rem;
  margin-right: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  
`;

const Right = styled.div`
  
`;

export default ReviewItem;
