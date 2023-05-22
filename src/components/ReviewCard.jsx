import styled from 'styled-components';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StarRating from './StarRating';

const ReviewCard = ({ user, rating, review, createdAt }) => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };

  return (
    <Container>
      <Wrapper>
        <ReviewContainer>
          <Reviewer>
            {!user.img ? (
              <Avatar>{user.name.charAt(0)}</Avatar>
            ) : (
              <Image
                src={user.img}
                width={50}
                height={50}
                alt=''
              />
            )}
            <Name>{user.name}</Name>
          </Reviewer>
          <StarRating value={rating} />
        </ReviewContainer>
        <Review>{review}</Review>
        <DateContainer>
          <ReviewDate dateTime={createdAt}>
            {new Date(createdAt).toLocaleString('en-us', options)}
          </ReviewDate>
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
  background-color: transparent;
  border-radius: 1rem;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  margin-bottom: 2rem;
  line-height: 1.4;

  @media only screen and (max-width: 37.5em) {
    width: 60rem;
    line-height: 1.2;
  }

  @media only screen and (max-width: 31.25em) {
    width: 50rem;
  }

  @media only screen and (max-width: 26.875em) {
    width: 45rem;
  }

  @media only screen and (max-width: 25em) {
    width: 40rem;
  }
`;

const Wrapper = styled.div`
  padding: 3rem;

  @media only screen and (max-width: 26.875em) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 2.5rem;
    color: #89a8a0;
    border: 2px solid #eef2ff;
    border-radius: 0.5rem;
    margin-right: 3px;

    @media only screen and (max-width: 31.25em) {
      font-size: 2.3rem;
      margin-right: 2px;
    }

    @media only screen and (max-width: 25em) {
      font-size: 2rem;
    }
  }
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 31.25em) {
    gap: 0.7rem;
  }

  img {
    width: 5rem;
    height: 5rem;
    display: inline-block;
    object-fit: cover;
    border-radius: 50%;

    @media only screen and (max-width: 31.25em) {
      width: 4.5rem;
      height: 4.5rem;
    }

    @media only screen and (max-width: 25em) {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 5rem;
  height: 5rem;
  font-size: 2.5rem;
  background-color: #d5a66a;
  color: var(--clr-white);
  border-radius: 50%;

  @media only screen and (max-width: 31.25em) {
    width: 4.5rem;
    height: 4.5rem;
    font-size: 2.25rem;
  }

  @media only screen and (max-width: 25em) {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.75rem;
  }
`;

const Name = styled.h3`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.8rem;
  color: inherit;

  @media only screen and (max-width: 31.25em) {
    font-size: 1.75rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.6rem;
  }
`;

const Review = styled.p`
  margin: 2rem 0;
  font-size: 1.65rem;
  color: inherit;
  line-height: 1.3;
  word-wrap: break-word;

  @media only screen and (max-width: 31.25em) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.5rem;
  }
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReviewDate = styled.time`
  font-size: 1.4rem;
  color: #89a8a0;

  @media only screen and (max-width: 26.875em) {
    font-size: 1.35rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.3rem;
  }
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 8rem;
  padding: 0.7rem 1rem;
  font-size: 1.4rem;
  background-color: transparent;
  color: #89a8a0;
  border: 1px solid #89a8a0;
  border-radius: 0.5rem;
  outline-color: #ccc;
  cursor: pointer;

  @media only screen and (max-width: 26.875em) {
    font-size: 1.35rem;
  }

  @media only screen and (max-width: 25em) {
    gap: 1rem;
    font-size: 1.3rem;
    padding: 0.5rem 0.8rem;
  }

  svg {
    font-size: inherit;
    color: currentColor;
  }
`;

export default ReviewCard;
