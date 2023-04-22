import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Recommendation = () => {
  return (
    <Container>
      <Heading>You might also like</Heading>
      <Wrapper>
        <ProductWrapper>
          <Image src='/img/user-9.jpg' width={500} height={700} alt='' />
          <ProductTitle>
            <Link href='#' passHref>The Rain Bucket Hat in Black</Link>
          </ProductTitle>
        </ProductWrapper>
        <ProductWrapper>
          <Image src='/img/user-5.jpg' width={500} height={700} alt='' />
          <ProductTitle>
            <Link href='#' passHref>The Skyline Collard Jacket in Rosin</Link>
          </ProductTitle>
        </ProductWrapper>
        <ProductWrapper>
          <Image src='/img/user-8.jpg' width={500} height={700} alt='' />
          <ProductTitle>
            <Link href='#' passHref>The Slyline Reversible Bomber in Blackk</Link>
          </ProductTitle>
        </ProductWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  padding: 8rem 4rem;
`;

const Heading = styled.h1`
  display: block;
  text-align: left;
  font-weight: 500;
  font-size: 3.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ProductWrapper = styled.div`
  
`;

const ProductTitle = styled.p`
  
`;

export default Recommendation;
