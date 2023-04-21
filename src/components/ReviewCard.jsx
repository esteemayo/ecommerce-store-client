import styled from 'styled-components';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StarRating from './StarRating';

const ReviewCard = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <ReviewContainer>
            <Reviewer>
              <Avatar>J</Avatar>
              <Name>Jesse hopkins</Name>
            </Reviewer>
            <StarRating value={5} />
          </ReviewContainer>
          <Review>Gorgeous design! Even more responsive than the previous version. A pleasure to use!</Review>
          <DateContainer>
            <ReviewDate dateTime='2023-02-13 20:00'>Feb 13, 2023</ReviewDate>
            <ShareButton type='button'>
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
              Share
            </ShareButton>
          </DateContainer>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <ReviewContainer>
            <Reviewer>
              <Avatar>A</Avatar>
              <Name>Alice banks</Name>
            </Reviewer>
            <StarRating value={5} />
          </ReviewContainer>
          <Review>
            The device has a clean design, and the metal housing feels sturdy in my hands.
            Soft rounded corners make it a pleasure to look at.
          </Review>
          <DateContainer>
            <ReviewDate dateTime='2023-02-13 20:00'>Feb 13, 2023</ReviewDate>
            <ShareButton type='button'>
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
              Share
            </ShareButton>
          </DateContainer>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.article`
  width: 40rem;
  background-color: #eef2ff;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  padding: 3rem;
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 2.3rem;
  }
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 4rem;
  height: 4rem;
  background-color: #d56a6a;
  color: var(--clr-white);
  border-radius: 50%;
`;

const Name = styled.h3`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.8rem;
`;

const Review = styled.p`
  margin: 2rem 0;
  font-size: 1.8rem;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReviewDate = styled.time`
  font-size: 1.4rem;
  color: #8a8ca0;
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 8rem;
  padding: 0.7rem 1rem;
  font-size: 1.4rem;
  background-color: transparent;
  color: #8a8ca0;
  border: 1px solid #757785;
  border-radius: 0.5rem;
  cursor: pointer;

  svg {
    font-size: inherit;
    color: currentColor;
  }
`;

export default ReviewCard;
