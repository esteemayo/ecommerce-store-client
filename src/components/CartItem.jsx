import styled from 'styled-components';
import Image from 'next/image';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartItem = ({ id, name, size, color, image, price, quantity }) => {
  return (
    <Container>
      <Left>
        <ImageContainer>
          <Image src='/img/img-10.jpg' width={120} height={120} alt='' />
        </ImageContainer>
        <ProductDetails>
          <ProductName>Short blouse with embroideries</ProductName>
          <ColorContainer>
            <Title>Color:</Title>
            <ProductColor color='blue'>Blue</ProductColor>
          </ColorContainer>
          <SizeContainer>
            <Title>Size:</Title>
            <ProductSize>XS</ProductSize>
          </SizeContainer>
          <RemoveButton type='button'>Remove</RemoveButton>
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

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
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
  margin-bottom: 0.5rem;
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.p`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.6rem;
`;

const ProductColor = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
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

const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProductSize = styled.span`
  display: block;
  font-size: 1.5rem;
  color: #999;
`;

const RemoveButton = styled.button`
  display: inline-block;
  border: none;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.5rem;
  background-color: transparent;
  color: var(--clr-primary-green);
  outline-color: #eee;
  outline-offset: 3px;
  cursor: pointer;
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
  width: 3rem;
  height: 3rem;
  font-weight: lighter;
  font-size: 1.7rem;
  background-color: transparent;
  color: #c3c3c4;
  border: 1px solid #eee;
  border-radius: 50%;
  outline-color: #ddd;
  cursor: pointer;

  svg {
    font-size: inherit;
    fill: currentColor;
  }
`;

const MinusQuantity = styled.button`
  border: none;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  font-weight: lighter;
  font-size: 1.7rem;
  background-color: transparent;
  color: #c3c3c4;
  border: 1px solid #eee;
  border-radius: 50%;
  outline-color: #ddd;
  cursor: pointer;

  svg {
    font-size: inherit;
    fill: currentColor;
  }
`;

const Quantity = styled.span`
  display: inline-block;
  font-size: 600;
  font-size: 2rem;
  color: inherit;
`;

export default CartItem;
