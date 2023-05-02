import Image from 'next/image';
import styled from 'styled-components';

const CartItem = () => {
  return (
    <Container>
      <Left>
        <ImageContainer>
          <Image src='/img/img-10.jpg' width={120} height={120} alt='' />
        </ImageContainer>
        <ProductDetails>
          <ProductName>Short blouse with embroideries</ProductName>
          <ProductColor color='blue'>Blue</ProductColor>
          <ProductSize>XS</ProductSize>
        </ProductDetails>
      </Left>
      <Right>
        Right
      </Right>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  width: 12rem;
  height: 12rem;
  background-color: #f9f9f9;
  border-radius: 3px;

  img {
    width: 12rem;
    height: 12rem;
    display: block;
    object-fit: cover;
    border-radius: 3px;
  }
`;

const ProductDetails = styled.div`
  width: 30rem;
`;

const ProductName = styled.h2`
  display: block;
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProductColor = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const ProductSize = styled.span`
  font-size: 1.5rem;
  color: #999;
`;

const Right = styled.div`
  flex: 1;
`;

export default CartItem;
