import styled from 'styled-components';

const ReviewItem = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Left</Left>
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
  
`;

const Left = styled.div`
  
`;

export default ReviewItem;
