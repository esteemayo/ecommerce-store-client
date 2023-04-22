import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Recommendation = () => {
  return (
    <Container>
      <Heading>You might also like</Heading>
      <Wrapper>
        <ProductWrapper>
          <Image
            src='/img/user-9.jpg'
            width={500}
            height={700}
            alt=''
          />
          <ProductContainer>
            <Link href='#' passHref>
              <ProductTitle>The Rain Bucket Hat in Black</ProductTitle>
            </Link>
            <ProductPrice>$39.50</ProductPrice>
          </ProductContainer>
        </ProductWrapper>
        <ProductWrapper>
          <Image
            src='/img/user-5.jpg'
            width={500}
            height={700}
            alt=''
          />
          <ProductContainer>
            <Link href='#' passHref>
              <ProductTitle>The Skyline Collard Jacket in Rosin</ProductTitle>
              <ProductPrice>$169.00</ProductPrice>
            </Link>
          </ProductContainer>
        </ProductWrapper>
        <ProductWrapper>
          <Image
            src='/img/user-8.jpg'
            width={500}
            height={700}
            alt=''
          />
          <ProductContainer>
            <Link href='#' passHref>
              <ProductTitle>The Slyline Reversible Bomber in Black</ProductTitle>
              <ProductPrice>$169.00</ProductPrice>
            </Link>
          </ProductContainer>
        </ProductWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  padding: 0 4rem;
`;

const Heading = styled.h1`
  display: block;
  text-align: left;
  font-weight: 500;
  font-size: 3.2rem;
  margin: 5rem 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ProductWrapper = styled.div`
  img {
    width: 100%;
    height: 70rem;
    display: block;
    object-fit: cover;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductTitle = styled.p`
  display: block;
  width: 100%;
  font-size: 1.6rem;
  color: inherit;
  line-height: 1.8rem;
  margin: 1rem 0;
`;

const ProductPrice = styled.p`
  
`;

export default Recommendation;
