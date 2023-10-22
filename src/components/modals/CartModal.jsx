'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

import ColorSelect from '../inputs/ColorSelect';
import Counter from '../inputs/Counter';
import SizeSelect from '../inputs/SizeSelect';

import ProductHead from '../products/ProductHead';
import ProductButton from '../products/ProductButton';

import Alert from '../Alert';
import Overlay from './Overlay';

import { useCart } from '@/hooks/useCart';
import { useDarkMode } from '@/hooks/useDarkMode';

const CartModal = ({ product, isOpen, onClose, onSelect }) => {
  const mode = useDarkMode((state) => state.mode);
  const [showModal, setShowModal] = useState(isOpen);

  const {
    alert,
    setAlert,
    handleClick,
    selectedSize,
    isSelected,
    quantity,
    setQuantity,
    setSize,
    setSelectedSize,
    setIsSelected,
    setColor,
    handleReset,
  } = useCart(product);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    onClose();
    onSelect(null);
    handleReset();
  }, [onClose, onSelect, handleReset]);

  const closeModalHandler = useCallback((e) => {
    e.stopPropagation();

    if (e.target.classList.contains('overlay')) {
      handleCloseModal();
    }
  }, [handleCloseModal]);

  const activeModal = useMemo(() => {
    return showModal ? 'show' : '';
  }, [showModal]);

  const modeValue = useMemo(() => {
    return mode.toString();
  }, [mode]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return (
    <Overlay
      mode={modeValue}
      type={activeModal}
      onClick={closeModalHandler}
    >
      <Wrapper mode={modeValue}>
        <ButtonContainer>
          <CloseButton type='button' onClick={handleCloseModal}>
            <CloseIcon />
          </CloseButton>
        </ButtonContainer>
        <ImageContainer>
          <StyledImage
            src={product?.images?.[0] ?? '/img/img-1.jpg'}
            width={320}
            height={200}
            alt=''
          />
        </ImageContainer>
        <ProductContainer>
          <ProductHead
            name={product?.name}
            price={product?.price}
            discount={product?.discount}
            priceDiscount={product?.priceDiscount}
            modal
          />
          <Hr />
          <ColorSelect
            title='Color'
            mode={mode}
            value={product?.color}
            selected={isSelected}
            onAction={setColor}
            secondaryAction={setIsSelected}
            modal
          />
          {product?.size && (
            <SizeSelect
              value={product?.size}
              selected={selectedSize}
              onAction={setSize}
              secondaryAction={setSelectedSize}
              modal
            />
          )}
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
        </ProductContainer>
      </Wrapper>
    </Overlay>
  );
}

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.bgModal};
  border-radius: 1.5rem;
  box-shadow: ${({ mode }) => mode === 'true' ? 'none' : '0 2rem 4rem rgba(145, 143, 143, 0.1)'};
  -webkit-box-shadow: ${({ mode }) => mode === 'true' ? 'none' : '0 2rem 4rem rgba(145, 143, 143, 0.1)'};
  -moz-box-shadow: ${({ mode }) => mode === 'true' ? 'none' : '0 2rem 4rem rgba(145, 143, 143, 0.1)'};
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
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const ProductContainer = styled.div`
  margin-top: 0.5rem;
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.cartModalBorder};
`;

CartModal.propTypes = {
  product: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CartModal;
