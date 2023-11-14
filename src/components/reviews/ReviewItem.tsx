'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useMemo } from 'react';

import { ReviewItemProps } from '@/types';
import ReviewContent from './ReviewContent';

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
        <ReviewContent rating={rating} review={review} reviewer={reviewer} />
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
