'use client';

import styled from 'styled-components';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';

import { addProduct } from '@/features/cart/cartSlice';
import BreadCrumbs from '@/app/products/[id]/BreadCrumbs';

import Counter from '../inputs/Counter';
import ColorSelect from '../inputs/ColorSelect';
import SizeSelect from '../inputs/SizeSelect';

import ProductHead from './ProductHead';
import ProductValue from './ProductValue';
import ProductInfo from './ProductInfo';

import Alert from '../Alert';
import ProductImageModal from '../modals/ProductImageModal';

import { productValue } from '@/data';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => ({ ...state.darkMode }));

  const imgContainerRef = useRef();

  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [isMoved, setIsMoved] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isSelected, setIsSelected] = useState(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 235);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSliderMoved, setIsSliderMoved] = useState(false);
  const [alert, setAlert] = useState(false);

  const lastIndex = product?.images?.lastIndexOf(product?.images[product?.images.length - 1]);

  const handleOpen = useCallback((index) => {
    setSlideIndex(index);
    setIsOpen(true);
  }, []);

  const handleMove = useCallback((direction) => {
    let newSlideIndex;

    setIsMoved(true);
    if (direction === 'left') {
      newSlideIndex = slideIndex - 1;
    }

    if (direction === 'right') {
      newSlideIndex = slideIndex + 1;
    }

    setSlideIndex(newSlideIndex);
  }, [slideIndex]);

  const handleDirection = useCallback((direction) => {
    setIsSliderMoved(true);
    const distance = imgContainerRef.current.getBoundingClientRect().x;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber((prev) => prev - 1);
      imgContainerRef.current.style.transform = `translateX(${235 + distance}px)`;
    }

    if (direction === 'right' && slideNumber < 6 - clickLimit) {
      setSlideNumber((prev) => prev + 1);
      imgContainerRef.current.style.transform = `translateX(${-235 + distance}px)`;
    }
  }, [clickLimit, slideNumber]);

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
  }, [color, product, quantity, size, handleReset, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <Container>
      <ProductContainer>
        <Left>
          <ImagesContainer>
            <ArrowButton
              type='button'
              direction='left'
              onClick={() => handleDirection('left')}
              style={{ display: (!isSliderMoved || slideNumber === 0) && 'none' }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </ArrowButton>
            <ImageWrapper ref={imgContainerRef}>
              {product?.images?.map((item, index) => {
                return (
                  <Image
                    key={index}
                    src={item}
                    width={350}
                    height={350}
                    alt=''
                    onClick={() => handleOpen(index)}
                  />
                )
              })}
            </ImageWrapper>
            <ArrowButton
              type='button'
              direction='right'
              onClick={() => handleDirection('right')}
              style={{ display: slideNumber === lastIndex && 'none' }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </ArrowButton>
          </ImagesContainer>
        </Left>
        <Right>
          <BreadCrumbs category={product.category} />
          <ProductWrapper>
            <ProductHead
              name={product.name}
              price={product.price}
              discount={product.discount}
              priceDiscount={product.priceDiscount}
              ratingsAverage={product.ratingsAverage}
              ratingsQuantity={product.ratingsQuantity}
            />
            <Hr />
            <ColorSelect
              mode={darkMode}
              value={product.color}
              selected={isSelected}
              onAction={setColor}
              secondaryAction={setIsSelected}
            />
            <SizeSelect
              value={product.size}
              selected={selectedSize}
              onAction={setSize}
              secondaryAction={setSelectedSize}
            />
            <Hr />
            <Counter
              value={quantity}
              onClick={setQuantity}
            />
            <Hr />
            <Button type='button' onClick={handleClick}>Add to cart</Button>
            {alert && (
              <Alert
                alert={alert}
                onChange={setAlert}
                message='Item added to cart'
              />
            )}
            <Hr />
            <ValueAddWrapper>
              <ValueAdd mode={darkMode}>
                <Image
                  src='/img/Shipping-black.svg'
                  width={24}
                  height={24}
                  alt=''
                />
                <span>Free Shipping over $50</span>
              </ValueAdd>
              <ValueAdd mode={darkMode}>
                <Image
                  src='/img/Returns-black.svg'
                  width={24}
                  height={24}
                  alt=''
                />
                <span>Free Returns</span>
              </ValueAdd>
            </ValueAddWrapper>
            <Hr />
            <ProductInfo
              title='Overview'
              content={product.desc}
            />
            {/* <Hr /> */}
          </ProductWrapper>
        </Right>
      </ProductContainer>
      <ProductImageModal
        product={product}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isMoved={isMoved}
        slideIndex={slideIndex}
        lastIndex={lastIndex}
        handleMove={handleMove}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const ProductContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
    flex-direction: column;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Left = styled.div`
  flex: 2;
  padding: 1rem 0;
`;

const ImagesContainer = styled.div`
  position: relative;
`;

const ImageWrapper = styled.figure`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 50em) {
    flex-wrap: nowrap;
    width: max-content;
    transition: all 0.3s ease;
  }

  img {
    display: block;
    width: 35rem;
    height: 35rem;
    object-fit: cover;
    border-radius: 0.5rem;
    cursor: pointer;

    @media only screen and (max-width: 64em) {
      width: 30rem;
    }

    @media only screen and (max-width: 59.375em) {
      width: 23rem;
      height: 30rem;
    }

    @media only screen and (max-width: 50em) {
      width: 225px;
      border-radius: revert;
    }

    @media only screen and (max-width: 37.5em) {
      height: 20rem;
    }

    @media only screen and (max-width: 18.75em) {
      height: 15rem;
    }
  }
`;

const ArrowButton = styled.button`
  border: none;
  width: 4rem;
  height: 4rem;
  background-color: var(--clr-white);
  color: #777;
  border-radius: 50%;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  -webkit-box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  outline-color: #777;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: ${({ direction }) => direction === 'left' && '2rem'};
  right: ${({ direction }) => direction === 'right' && '54%'};
  transform: translate(-50%);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: inherit;
  }

  @media only screen and (min-width: 50em) {
    display: none;
  }
  
  @media only screen and (max-width: 37.5em) {
    width: 3.5rem;
    height: 3.5rem;
    right: ${({ direction }) => direction === 'right' && '76%'};
  }
  
  @media only screen and (max-width: 18.75em) {
    right: ${({ direction }) => direction === 'right' && '83%'};
  }
`;

const Right = styled.div`
  flex: 1;
  padding-top: 5rem;
  padding-right: 3rem;
  padding-left: 3rem;

  @media only screen and (max-width: 64em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 50em) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const ProductWrapper = styled.div`
  margin-top: 2rem;

  @media only screen and (max-width: 37.5em) {
    margin-top: 1.5rem;
  }
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.cartModalBorder};
`;

const Button = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1.8rem;
  width: 100%;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.bgProdBtn};
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
  line-height: 1.3em;
  margin: 3rem 0;
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 59.375em) {
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
  }

  @media only screen and (max-width: 37.5em), only screen and (hover: none) {
    font-size: 1.7rem;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  &:hover {
    background-position: 100%;
  }
`;

const ValueAddWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3.2rem;
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 2rem;
`;

const ValueAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.text};

  img {
    width: 2.4rem;
    height: auto;
    background-color: ${({ mode }) => mode && '#1b1a1a'};
    display: inline-block;
    object-fit: cover;
  }

  span {
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

export default Product;
