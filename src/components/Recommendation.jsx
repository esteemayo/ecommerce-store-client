import styled from 'styled-components';
import Link from 'next/link';
import { NumericFormat } from 'react-number-format';
import Image from 'next/image';

const Recommendation = () => {
  return (
    <Container>
      <Heading>You might also like</Heading>
      <Wrapper>
        <ProductWrapper>
          <Link href='#' passHref>
            <Image
              src='/img/user-9.jpg'
              width={400}
              height={500}
              alt=''
            />
          </Link>
          <ProductContainer>
            <Link href='#' passHref>
              <ProductTitle>The Rain Bucket Hat in Black</ProductTitle>
              <ProductPrice>
                <NumericFormat
                  value='39.50'
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </ProductPrice>
            </Link>
          </ProductContainer>
        </ProductWrapper>
        <ProductWrapper>
          <Link href='#' passHref>
            <Image
              src='/img/user-5.jpg'
              width={500}
              height={700}
              alt=''
            />
          </Link>
          <ProductContainer>
            <Link href='#' passHref>
              <ProductTitle>The Skyline Collared Jacket in Rosin</ProductTitle>
              <ProductPrice>
                <NumericFormat
                  value='169.00'
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </ProductPrice>
            </Link>
          </ProductContainer>
        </ProductWrapper>
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
  display: block;
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

  a {
    &:link,
    &:visited {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      font-size: inherit;
      color: inherit;
      outline-color: #ddd;
    }

    &:active {
      color: currentColor;
    }
  }
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
