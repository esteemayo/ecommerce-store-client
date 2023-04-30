import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

const CartModal = ({ isModalOpen, closeModal }) => {
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
`;

const Hr = styled.hr`

`;

export default CartModal;
