'use client';
import Image from 'next/image';
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
          <Right>Right</Right>
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
`;

const Right = styled.div`
  flex: 1;
`;

const ImageWrapper = styled.figure`
  
`;

export default SingleProduct;
