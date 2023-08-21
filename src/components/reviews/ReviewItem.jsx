'use client';

import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';

import StarRating from '../StarRating';

const ReviewItem = ({ user, rating, review }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <RatingContainer>
            <StarRating value={rating} />
            <ReviewCount>Based on 61 reviews</ReviewCount>
          </RatingContainer>
          <ReviewContainer>
            <Review>{review}</Review>
            <Reviewer>{user.name.split(' ')[0]} {user.name.split(' ')[1].charAt(0)}.</Reviewer>
          </ReviewContainer>
          <Button>
            <Link href='/products' passHref>
              Shop now
            </Link>
          </Button>
        </Left>
        <Right>
          <Image
            src={user.photo}
            width={1200}
            height={1200}
            alt=''
          />
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  background-color: ${({ theme }) => theme.bgRev};
  width: 700px;
  height: 50rem;
  max-height: 50rem;
  margin-right: 30px;

  @media only screen and (max-width: 64em) {
    height: 45rem;
    max-height: 45rem;
  }

  @media only screen and (max-width: 50em) {
    height: 40rem;
    max-height: 40rem;
  }
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
  width: 100%;
  height: 100%;
  padding: 8rem 0 10rem 4rem;
  background-color: ${({ theme }) => theme.bg};

  @media only screen and (max-width: 64em) {
    padding-left: 3rem;
  }

  @media only screen and (max-width: 50em) {
    padding-top: 5rem;
    gap: 3rem;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
    color:  ${({ theme }) => theme.star};
    margin-right: 0.5rem;

    @media only screen and (max-width: 18.75em) {
      font-size: 1.87rem;
      margin-right: 3px;
    }
  }
`;

const ReviewCount = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textRevCount};
  letter-spacing: 0.5px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Review = styled.p`
  width: 70%;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textRev};

  @media only screen and (max-width: 18.75em) {
    width: 60%;
    font-size: 1.65rem;
  }
`;

const Reviewer = styled.span`
  display: inline-block;
  font-weight: 300;
  font-weight: 1.6rem;
  color: ${({ theme }) => theme.textReviewer};
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  text-align: left;
  font-weight: 600;
  font-size: 1.8rem;
  width: 9rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textRevBtn};
  outline-color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 18.75em) {
    font-size: 1.7rem;
  }

  &:hover {
    opacity: 0.7;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 8.5rem;
    height: 1px;
    background-color: ${({ theme }) => theme.star};
  }

  a {
    &:link,
    &:visited {
      width: 9rem;
      text-decoration: none;
      color: inherit;
      outline-color: #ccc;
    }

    &:active {
      color: currentColor;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  width: 100%;
  height: 49.8rem;
  background-color: ${({ theme }) => theme.bgRevImg};

  @media only screen and (max-width: 62.5em) {
    height: 45.2rem;
  }

  @media only screen and (max-width: 50em) {
    height: 40.3rem;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

ReviewItem.propTypes = {
  user: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
};

export default ReviewItem;
