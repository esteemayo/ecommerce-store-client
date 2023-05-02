import styled from 'styled-components';
import Image from 'next/image';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <QuantityContainer>
          <AddQuantity type='button'>
            <FontAwesomeIcon icon={faPlus} />
          </AddQuantity>
          <Quantity>1</Quantity>
          <MinusQuantity type='button'>
            <FontAwesomeIcon icon={faMinus} />
          </MinusQuantity>
        </QuantityContainer>
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
  margin-bottom: 0.5rem;

  &::before {
    content: '';
    display: block;
    width: 2.2rem;
    height: 2.2rem;
    background-color: ${({ color }) => color};
    border: 1px solid ${({ color }) => color};
    border-radius: 50%;
  }
`;

const ProductSize = styled.span`
  display: block;
  font-size: 1.5rem;
  color: #999;
`;

const Right = styled.div`
  flex: 1;
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const AddQuantity = styled.button`
  border: none;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  font-weight: lighter;
  font-size: 1.7rem;
  background-color: transparent;
  color: #f1e4f4;
  border: 1px solid #f1e4f4;
  border-radius: 50%;
`;

const MinusQuantity = styled.button`
  
`;

const Quantity = styled.span`
  
`;

export default CartItem;
