import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import StarRating from './StarRating';

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
  background-color: #fffdfd;
  width: 700px;
  height: 50rem;
  max-height: 50rem;
  margin-right: 30px;

  @media only screen and (max-width: 64em) {
    height: 45rem;
  }

  @media only screen and (max-width: 50em) {
    height: 40rem;
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
  background-color: var(--clr-white);

  @media only screen and (max-width: 64em) {
    padding-left: 3rem;
  }

  @media only screen and (max-width: 50em) {
    gap: 3rem;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
    color: #89a8a0;
    margin-right: 0.5rem;
  }
`;

const ReviewCount = styled.span`
  font-size: 1.2rem;
  color: #666;
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
  color: var(--clr-black);
`;

const Reviewer = styled.span`
  display: inline-block;
  font-weight: 300;
  font-weight: 1.6rem;
  color: #66667f;
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  text-align: left;
  font-weight: 600;
  font-size: 1.8rem;
  width: 9rem;
  background-color: transparent;
  color: var(--clr-black);
  outline-color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;

  &:hover {
    opacity: 0.7;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 8.5rem;
    height: 1px;
    background-color: #89a8a0;
  }

  a {
    &:link,
    &:visited {
      width: 9rem;
      text-decoration: none;
      color: inherit;
      outline-color: #ccc;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #ebe7e2;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export default ReviewItem;
