import Image from 'next/image';
import styled from 'styled-components';

const ProductCard = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ImageContainer>
            <Image src='/img/img-9.jpg' width={100} height={100} alt='' />
          </ImageContainer>
        </Left>
        <Right>
          <ProductName>The Stanley Rain Jacket in Black</ProductName>
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  background-color: var(--color-white);
  padding: 3rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  border-radius: 1rem;
  cursor: default;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
`;

const Left = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
`;

const Right = styled.div`

`;

const ProductName = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.3;
  margin-bottom: 2rem;
`;

export default ProductCard;
