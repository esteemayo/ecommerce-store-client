'use client';

import styled from 'styled-components';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { RecommendationItemProps } from '@/types';
import { formatCurrency } from '@/utils/formatCurrency';

const RecommendationItem: FC<RecommendationItemProps> = ({
  id,
  name,
  price,
  image,
}) => {
  return (
    <Container>
      <Link href={`/products/${encodeURIComponent(id)}`} passHref>
        <StyledImage src={image} width={400} height={500} alt='' />
        <Wrapper>
          <Title>{name}</Title>
          <Price>{formatCurrency(price)}</Price>
        </Wrapper>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: inherit;
      outline-color: #ddd;
    }
  }
`;

const StyledImage = styled(Image)`
  width: 40rem;
  height: 50rem;
  display: block;
  object-fit: cover;
  border-radius: 0.5rem;

  @media only screen and (max-width: 64em) {
    width: 35rem;
  }

  @media only screen and (max-width: 50em) {
    width: 60rem;
    height: 70rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 45rem;
    height: 50rem;
  }

  @media only screen and (max-width: 25em) {
    width: 40rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 30rem;
    height: auto;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  display: block;
  width: 100%;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.8rem;
  margin: 1rem 0;

  @media only screen and (max-width: 18.75em) {
    font-size: 1.5rem;
  }
`;

const Price = styled.p`
  display: inline-block;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.3em;
`;

export default RecommendationItem;
