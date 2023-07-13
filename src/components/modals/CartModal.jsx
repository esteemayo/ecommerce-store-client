'use client';

import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ColorSelect from '../inputs/ColorSelect';
import Counter from '../inputs/Counter';
import SizeSelect from '../inputs/SizeSelect';

import Alert from '../Alert';
import ProductButton from '../products/ProductButton';
import { addProduct } from '@/features/cart/cartSlice';
import ProductHead from '../products/ProductHead';

const CartModal = ({ product, isModalOpen, closeModal, setIsSelectedProduct }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => ({ ...state.darkMode }));

  const [size, setSize] = useState(null);
  const [alert, setAlert] = useState(false);
  const [color, setColor] = useState(null);
  const [isSelected, setIsSelected] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  const closeModalHandler = useCallback((e) => {
    e.stopPropagation();

    if (e.target.classList.contains('overlay')) {
      handleCloseModal();
    }
  }, [handleCloseModal]);

  const handleCloseModal = useCallback(() => {
    closeModal(false);
    setIsSelectedProduct(null);
    handleReset();
  }, [closeModal, setIsSelectedProduct, handleReset]);

  const handleReset = useCallback(() => {
    setSize(null);
    setColor(null);
    setQuantity(1);
    setIsSelected(null);
    setSelectedSize(null);
  }, []);

  const handleClick = useCallback(() => {
    dispatch(addProduct({ ...product, size, color, quantity }));
    setAlert(true);
    handleReset();
  }, [color, size, product, quantity, handleReset, dispatch]);

  return (
    <Overlay
      className='overlay'
      type={isModalOpen ? 'show' : ''}
      onClick={closeModalHandler}
    >
      <Container>
        <Wrapper>
          <ButtonContainer>
            <CloseButton type='button' onClick={handleCloseModal}>
              <CloseIcon />
            </CloseButton>
          </ButtonContainer>
          <ImageContainer>
            <Image
              src={product?.images ? product?.images[0] : '/img/img-1.jpg'}
              width={320}
              height={200}
              alt=''
            />
          </ImageContainer>
          <ProductContainer>
            <ProductHead
              name={product.name}
              price={product.price}
              discount={product.discount}
              priceDiscount={product.priceDiscount}
              modal
            />
            <Hr />
            <ColorSelect
              title='Color'
              mode={darkMode}
              value={product.color}
              selected={isSelected}
              onAction={setColor}
              secondaryAction={setIsSelected}
              modal
            />
            <SizeWrapper>
              <SizeSelect
                value={product.size}
                selected={selectedSize}
                onAction={setSize}
                secondaryAction={setSelectedSize}
                modal
              />
              <Hr />
              <Counter
                title='Quantity'
                value={quantity}
                onClick={setQuantity}
              />
              <Hr />
              <ProductButton
                small
                actionLabel='Add to cart'
                onAction={handleClick}
              />
              {alert && (
                <Alert
                  alert={alert}
                  message='Item added to cart'
                  onChange={setAlert}
                  center
                />
              )}
            </SizeWrapper>
          </ProductContainer>
        </Wrapper>
      </Container>
    </Overlay>
  );
}

const Overlay = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.bgOverlay};
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ type }) => type === 'show' ? 'block' : 'none'};
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  opacity: ${({ type }) => type === 'show' ? 1 : 0};
  z-index: ${({ type }) => type === 'show' ? 4000 : -1};
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.bgModal};
  border-radius: 1.5rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  position: relative;

  @media only screen and (max-width: 37.5em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (max-width: 25em) {
    width: 37rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 33rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;

const CloseButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.bgModalCloseBtn};
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
  width: 100%;
  height: 20rem;
  background-color: #ede9e6;

  @media only screen and (max-width: 25em) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

const ProductContainer = styled.div`
  margin-top: 0.5rem;
`;

const ProductName = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  line-height: 1;
  margin-bottom: 1rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProductPrice = styled.p`
  text-decoration: line-through;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.cartModalBorder};
`;

const SizeWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export default CartModal;
