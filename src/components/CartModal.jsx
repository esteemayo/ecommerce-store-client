import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { useState } from 'react';

const CartModal = ({ isModalOpen, closeModal }) => {
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isSelected, setIsSelected] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const colors = ['black', 'pink', 'crimson'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleColor = (color) => {
    setColor(color);
    setIsSelected(color);
  };

  return (
    <Container type={isModalOpen ? 'show' : ''}>
      <Wrapper>
        <ButtonContainer>
          <CloseButton type='button' onClick={() => closeModal(false)}>
            <CloseIcon />
          </CloseButton>
        </ButtonContainer>
        <ImageContainer>
          <Image src='/img/img-9.jpg' width={300} height={250} alt='' />
        </ImageContainer>
        <ProductContainer>
          <ProductName>The Stanley Rain Jacket in Black</ProductName>
          <PriceContainer>
            <ProductPrice>$99.99</ProductPrice>
            <PriceDiscount>-22%</PriceDiscount>
          </PriceContainer>
          <SalePrice>$69.99</SalePrice>
          <Hr />
          <ColorContainer>
            <ProductColor>Color</ProductColor>
            <ColorWrapper>
              {colors.map((color, index) => {
                return (
                  <Color
                    key={index}
                    color={color}
                    selected={color === isSelected}
                    onClick={() => handleColor(color)}
                  >
                    &nbsp;
                  </Color>
                );
              })}
            </ColorWrapper>
          </ColorContainer>
          <SizeWrapper>
            <SizeHeading>Select a size</SizeHeading>
            <SizeContainer>
              {sizes.map((size, index) => {
                return (
                  <SelectSize
                    key={index}
                    type='button'
                    bcg={selectedSize === size}
                    onClick={() => handleSize(size)}
                  >
                    {size}
                  </SelectSize>
                );
              })}
            </SizeContainer>
            <Hr />
            <AddContainer>
              <AmountHeading>Quantity</AmountHeading>
            </AddContainer>
          </SizeWrapper>
        </ProductContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  opacity: ${({ type }) => type === 'show' ? 1 : 0};
  z-index: ${({ type }) => type === 'show' ? 4000 : -1};
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem 4rem;
  background-color: var(--clr-white);
  border-radius: 1.5rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const CloseButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #f9f9f9;
  color: #a2a8b0;
  border-radius: 50%;
  outline-color: #f1e4f4;
  cursor: pointer;

  svg {
    font-size: 1.8rem;
    fill: currentColor;
  }
`;

const ImageContainer = styled.div`
  margin-top: 2rem;

  img {
    width: 30rem;
    height: 25rem;
    display: block;
    object-fit: cover;
    border-radius: 3px;
  }
`;

const ProductContainer = styled.div`
  margin-top: 2rem;
`;

const ProductName = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 1.3;
  margin-bottom: 2rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProductPrice = styled.p`
  text-decoration: line-through;
  font-size: 1.6rem;
`;

const PriceDiscount = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  padding: 0.4rem 0.6rem;
  background-color: #fa4b21;
  color: var(--clr-white);
  border-radius: 10rem;
  line-height: 1;
  letter-spacing: 0.02em;
`;

const SalePrice = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  color: #fa4b21;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: #e2e9e7;
`;

const ColorContainer = styled.div`
  margin: 2rem 0;
`;

const ProductColor = styled.h2`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.7rem;
`;

const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.6rem;
  margin: 1.5rem 0;
`;

const Color = styled.button`
  border: none;
  display: block;
  width: 2.2rem;
  height: 2.2rem;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  outline: 1px solid ${({ selected }) => selected ? '#89a8a0' : 'transparent'};
  outline-offset: 2px;
  cursor: ${({ selected }) => selected ? 'default' : 'pointer'};
`;

const SizeWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

const SizeHeading = styled.h3`
  display: inline-block;
  font-weight: 400;
  font-size: 1.65rem;
`;

const SizeContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SelectSize = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1.4rem;
  min-width: 4rem;
  height: 3rem;
  padding: 1.6rem 0.4rem;
  line-height: 0.2;
  background-color: ${({ bcg }) => bcg ? '#89a8a0' : 'transparent'};
  color: ${({ bcg }) => bcg ? 'var(--clr-white)' : 'inherit'};
  border: 2px solid ${({ bcg }) => bcg ? '#89a8a0' : '#ebf0ef'};
  border-radius: 0.4rem;
  outline-color: #ccc;
  margin-bottom: 0.8rem;
  cursor: ${({ bcg }) => bcg ? 'default' : 'pointer'};
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${({ bcg }) => bcg ? '#89a8a0' : '#ebf0ef'};
  }
`;

const AddContainer = styled.div`
  
`;

const AmountHeading = styled.h3`
  
`;

const AmountContainer = styled.div`

`;

export default CartModal;
