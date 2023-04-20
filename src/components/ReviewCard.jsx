import styled from 'styled-components';
import StarRating from './StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = () => {
  return (
    <Container>
      <Wrapper>
        <ReviewContainer>
          <Reviewer>
            <Avatar>&nbsp;</Avatar>
            <Name>Jesse hopkins</Name>
          </Reviewer>
          <StarRating value={5} />
        </ReviewContainer>
        <Review>Gorgeous design! Even more responsive than the previous version. A pleasure to use!</Review>
        <DateContainer>
          <ReviewDate dateTime='2023-02-13 20:00'>Feb 13, 2023</ReviewDate>
          <ShareButton type='button'>Share</ShareButton>
        </DateContainer>
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

const Review = styled.p`
  
`;

const DateContainer = styled.div`
  
`;

const ReviewDate = styled.time`
  
`;

const ShareButton = styled.button`
  
`;

export default ReviewCard;
