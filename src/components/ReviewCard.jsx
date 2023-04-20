import styled from 'styled-components';

const ReviewCard = () => {
  return (
    <Container>
      <Wrapper>
        <ReviewContainer>
          <Reviewer>
            <Avatar>&nbsp;</Avatar>
          </Reviewer>
        </ReviewContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  width: 40rem;
  background-color: #f9f9f9;
`;

const Wrapper = styled.div`
  padding: 3rem;
`;

const ReviewContainer = styled.div`
  
`;

const Reviewer = styled.div`

`;

const Avatar = styled.span`
  
`;

const Name = styled.h3`
  
`;

export default ReviewCard;
