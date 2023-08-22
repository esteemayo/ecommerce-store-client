'use client';

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import FormatPrice from './FormatPrice';

const Recommendation = ({ data }) => {
  return (
    <Container>
      <Heading>You might also like</Heading>
      <Wrapper>
        {data.map((item) => {
          const { id, image, name, price } = item;
          return (
            <ProductWrapper key={id}>
              <Link href={`/products/${encodeURIComponent(id)}`} passHref>
                <Image
                  src={image}
                  width={400}
                  height={500}
                  alt=''
                />
                <ProductContainer>
                  <ProductTitle>{name}</ProductTitle>
                  <ProductPrice>
                    <FormatPrice value={price.toFixed(2)} />
                  </ProductPrice>
                </ProductContainer>
              </Link>
            </ProductWrapper>
          );
        })}
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  max-width: 120rem;
  margin: 0 auto;
  margin-bottom: 10rem;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Heading = styled.h1`
  display: inline-block;
  text-align: left;
  font-weight: 500;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.textProdHeader};
  margin: 5rem 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 64em) {
    flex-wrap: wrap;
    gap: 3rem;
  }
`;

const ProductWrapper = styled.div`
  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: inherit;
      outline-color: #ddd;
    }
  }

  img {
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
  }
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductTitle = styled.p`
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

const ProductPrice = styled.p`
  display: inline-block;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.3em;
`;

export default Recommendation;
