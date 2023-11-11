'use client';

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { WishlistInfoProps } from '@/types';

const WishlistInfo = ({
  id,
  desc,
  name,
  image,
  excerpts,
}: WishlistInfoProps) => {
  return (
    <Container>
      <ImageContainer>
        <StyledImage
          src={image ?? '/img/img-1.jpg'}
          width={80}
          height={80}
          alt=''
        />
      </ImageContainer>
      <Overview>
        <ProductName>
          <StyledLink href={`/products/${encodeURIComponent(id)}`} passHref>
            {name}
          </StyledLink>
        </ProductName>
        <Description>{excerpts(desc, 120)}</Description>
      </Overview>
    </Container>
  );
};

const Container = styled.div``;

const ImageContainer = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: #ede9e6;

  @media only screen and (max-width: 18.75em) {
    width: 6.5rem;
    height: 6.5rem;
  }
`;

const StyledImage = styled(Image)`
  display: block;
  width: 8rem;
  height: 8rem;
  object-fit: cover;

  @media only screen and (max-width: 18.75em) {
    width: 6.5rem;
    height: 6.5rem;
  }
`;

const Overview = styled.div``;

const ProductName = styled.h2`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  color: ${({ theme }) => theme.textWlCardName};
  margin-bottom: 0.5rem;
  line-height: 1;

  @media only screen and (max-width: 18.75em) {
    font-size: 1.6rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
  transition: all 0.3s ease;
  outline-color: #f1e4f4;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.textWlCardName};
    text-underline-offset: 4px;
    color: currentColor;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textWlCard};
  line-height: 1.2;
  word-wrap: break-word;

  @media only screen and (max-width: 18.75em) {
    font-size: 1.4rem;
  }
`;

export default WishlistInfo;
