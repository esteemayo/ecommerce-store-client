'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useMemo } from 'react';

import RatingInfo from './RatingInfo';
import ReviewInfo from './ReviewInfo';
import ReviewLink from './ReviewLink';

import { ReviewItemProps } from '@/types';

const ReviewItem = ({ user, rating, review }: ReviewItemProps) => {
  const reviewer = useMemo(() => {
    return `
      ${user.name.split(' ')[0]} 
      ${user.name.split(' ').pop().charAt(0)}.
    `;
  }, [user]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <RatingInfo rating={rating} />
          <ReviewInfo review={review} reviewer={reviewer} />
          <ReviewLink />
        </Left>
        <Right>
          <StyledImage src={user.photo} width={1200} height={1200} alt='' />
        </Right>
      </Wrapper>
    </Container>
  );
};

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
  background-color: ${({ theme }) => theme.bgRevs};

  @media only screen and (max-width: 64em) {
    padding-left: 3rem;
  }

  @media only screen and (max-width: 50em) {
    padding-top: 5rem;
    gap: 3rem;
  }
`;

const Right = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bgRevImg};

  @media only screen and (max-width: 62.5em) {
    height: 45.2rem;
  }

  @media only screen and (max-width: 50em) {
    height: 40.3rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export default ReviewItem;
