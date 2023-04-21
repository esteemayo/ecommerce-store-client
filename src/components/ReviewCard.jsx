import styled from 'styled-components';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StarRating from './StarRating';
import Image from 'next/image';

const ReviewCard = ({ user, rating, review }) => {
  return (
    <Container>
      <Wrapper>
        <ReviewContainer>
          <Reviewer>
            {!user.img && <Avatar>J</Avatar>}
            <Image
              src='/img/user-1.jpg'
              width={500}
              height={500}
              alt=''
            />
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
  );
}

const Container = styled.article`
  width: 65rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  margin-bottom: 1rem;
  line-height: 1.4;
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

  & > img {
    width: 5rem;
    height: 5rem;
    display: inline-block;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 5rem;
  height: 5rem;
  font-size: 1.85rem;
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
