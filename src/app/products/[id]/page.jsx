'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const SingleProduct = () => {
  const images = [
    '/img/category-1.jpg',
    '/img/category-5.jpg',
    '/img/user-1.jpg',
    '/img/user-2.jpg',
    '/img/user-3.jpg',
    '/img/user-4.jpg',
    '/img/user-5.jpg',
    '/img/user-6.jpg',
    '/img/user-7.jpg',
    '/img/user-8.jpg',
    '/img/user-9.jpg',
    '/img/reviewer-1.jpg',
    '/img/reviewer-2.jpg',
    '/img/reviewer-3.jpg',
  ];

  return (
    <Container>
      <Wrapper>
        <ProductContainer>
          <Left>
            <ImageWrapper>
              {images.map((item, index) => {
                return (
                  <Image
                    key={index}
                    src={item}
                    width={500}
                    height={700}
                    alt=''
                  />
                )
              })}
            </ImageWrapper>
          </Left>
          <Right>
            <BreadCrumbs>
              <Link href='/' passHref>Home</Link> / {' '}
              <Link href='#' passHref>Shirts</Link>
            </BreadCrumbs>
            <ProductWrapper>
              <ProductName>The Stanley Rain Jacket in Black</ProductName>
              <ProductPrice>$199.00</ProductPrice>
              <Message>
                4 interest-free payments of $49.75.
                &nbsp;
                <Link href='#' passHref>Learn more</Link>
              </Message>
            </ProductWrapper>
          </Right>
        </ProductContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  /* max-width: 102.4rem;
  margin: 0 auto; */
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  padding: 1rem;
`;

const ImageWrapper = styled.figure`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  & > img {
    display: block;
    width: 50rem;
    height: 70rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

const Right = styled.div`
  flex: 1;
  padding-top: 5rem;
`;

const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;

  a {
    &:link,
    &:visited {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-decoration: none;
      text-transform: capitalize;
      font-size: 1.6rem;
      color: currentColor;
      line-height: 1.2;
    }

    &:hover,
    &:active {
      color: currentColor;
    }

    &::after {
      content: '';
      display: inline-block;
      width: 4rem;
      height: 1px;
      background-color: var(--clr-secondary-blue);
    }
  }
`;

const ProductWrapper = styled.div`
  margin-top: 2rem;
`;

const ProductName = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 1.3;
  margin-bottom: 2rem;
`;

const ProductPrice = styled.p`
  font-size: 1.6rem;
`;

const Message = styled.p`
  a {
    &:link,
    &:visited {
      text-decoration: underline;
    }
  }
`;

export default SingleProduct;
