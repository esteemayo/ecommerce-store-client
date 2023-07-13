'use client';

import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';

import ColorSelect from '../inputs/ColorSelect';
import Counter from '../inputs/Counter';
import SizeSelect from '../inputs/SizeSelect';

import { addProduct } from '@/features/cart/cartSlice';

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

  const handleColor = useCallback((color) => {
    setColor(color);
    setIsSelected(color);
  }, []);

  const handleSize = useCallback((size) => {
    setSize(size);
    setSelectedSize(size);
  }, []);

  const handleQuantity = useCallback((type) => {
    type === 'dec' && quantity > 1 && setQuantity((prev) => prev - 1);
    type === 'inc' && setQuantity((prev) => prev + 1);
  }, [quantity]);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

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
            <ProductName>{product?.name}</ProductName>
            <PriceContainer>
              <ProductPrice>
                <NumericFormat
                  value={product?.price + product?.discount}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </ProductPrice>
              <PriceDiscount>-{product?.priceDiscount}%</PriceDiscount>
            </PriceContainer>
            <SalePrice>
              <NumericFormat
                value={product?.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </SalePrice>
            <Hr />
            <ColorSelect
              modal
              mode={darkMode}
              value={product.color}
              selected={isSelected}
              onAction={setColor}
              secondaryAction={setIsSelected}
            />
            <SizeWrapper>
              {product?.size?.length > 0 && (
                <>
                  <SizeHeading>Select a size</SizeHeading>
                  <SizeContainer>
                    {product?.size?.map((size, index) => {
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
                </>
              )}
              <Hr />
              <AddContainer>
                <AmountHeading>Quantity</AmountHeading>
                <AmountContainer>
                  <AddButton
                    type='button'
                    disabled={quantity <= 1}
                    onClick={() => handleQuantity('dec')}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </AddButton>
                  <Amount>{quantity}</Amount>
                  <AddButton type='button' onClick={() => handleQuantity('inc')}>
                    <FontAwesomeIcon icon={faPlus} />
                  </AddButton>
                </AmountContainer>
              </AddContainer>
              <Hr />
              <Button type='button' onClick={handleClick}>Add to cart</Button>
              {alert && <SuccessMessage>Item added to cart</SuccessMessage>}
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

const PriceDiscount = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
  padding: 0.4rem 0.6rem;
  background-color: #fa4b21;
  color: var(--clr-white);
  border-radius: 10rem;
  line-height: 1;
  letter-spacing: 0.02em;
`;

const SalePrice = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  color: #fa4b21;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.cartModalBorder};
`;

const ColorContainer = styled.div`
  margin: 0.5rem 0;
`;

const ProductColor = styled.h2`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const SizeWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SizeHeading = styled.h3`
  display: inline-block;
  font-weight: 400;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const SizeContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SelectSize = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1.3rem;
  min-width: 3rem;
  height: 2rem;
  padding: 1.3rem 0.4rem;
  line-height: 0.1;
  background-color: ${({ bcg, theme }) => bcg ? theme.cartSelected : 'transparent'};
  color: ${({ bcg }) => bcg ? 'var(--clr-white)' : 'inherit'};
  border: 2px solid ${({ bcg, theme }) => bcg ? theme.cartSelected : theme.sizeHovModal};
  border-radius: 0.4rem;
  outline-color: #ccc;
  margin-bottom: 0.8rem;
  cursor: ${({ bcg }) => bcg ? 'default' : 'pointer'};
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${({ bcg, theme }) => bcg ? theme.cartSelected : theme.sizeHovModal};
  }
`;

const AddContainer = styled.div`
  margin: 0.5rem 0;
`;

const AmountHeading = styled.h3`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AddButton = styled.button`
  border: none;
  display: inline-block;
  text-align: center;
  font-size: 1.3rem;
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.4rem;
  line-height: 0.2;
  background-color: transparent;
  color: inherit;
  border: 2px solid ${({ theme }) => theme.sizeHovModal};
  border-radius: 0.4rem;
  outline-color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;

  &:disabled {
    background-color: ${({ theme }) => theme.bgAddBtnDis};
    color: #999;
  }

  svg {
    font-size: 1.4rem;
    fill: currentColor;
  }
`;

const Amount = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.3rem;
  border: 1px solid ${({ theme }) => theme.cartSelected};
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
  padding: 1.3rem 1rem;
  background-color: var(--clr-black);
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #333 50%
  );
  background-size: 220%;
  border: 1px solid var(--clr-black);
  border-radius: 0.5rem;
  outline-color: #777;
  line-height: 1em;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.6rem;
  }

  &:hover {
    background-position: 100%;
  }
`;

const SuccessMessage = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #409384;
  text-align: center;
`;

export default CartModal;
