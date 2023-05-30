import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';

import StarRating from '@/components/StarRating';
import { addProduct } from '@/features/cart/cartSlice';
import ProductImageModal from './ProductImageModal';

const Product = ({ product }) => {
  const dispatch = useDispatch();

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

  const handleOpen = (index) => {
    setSlideIndex(index);
    setIsOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideIndex;

    setIsMoved(true);
    if (direction === 'left') {
      newSlideIndex = slideIndex - 1;
    }

    if (direction === 'right') {
      newSlideIndex = slideIndex + 1;
    }

    setSlideIndex(newSlideIndex);
  };

  const handleDirection = (direction) => {
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
  };

  const handleColor = (color) => {
    setColor(color);
    setIsSelected(color);
  };

  const handleSize = (size) => {
    setSize(size);
    setSelectedSize(size);
  };

  const handleQuantity = (type) => {
    type === 'dec' && quantity > 1 && setQuantity((prev) => prev - 1);
    type === 'inc' && setQuantity((prev) => prev + 1);
  };

  const handleReset = () => {
    setSize(null);
    setColor(null);
    setQuantity(1);
    setIsSelected(null);
    setSelectedSize(null);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, size, color, quantity }));
    setAlert(true);
    handleReset();
  };

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
          <BreadCrumbs>
            <Link href='/' passHref>Home</Link> / {' '}
            <Link href={`/products/category/${encodeURIComponent(product.category)}`} passHref>
              {product.category}
            </Link>
          </BreadCrumbs>
          <ProductWrapper>
            <ProductName>{product.name}</ProductName>
            <PriceContainer>
              <ProductPrice>
                <NumericFormat
                  value={product.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </ProductPrice>
              <PriceDiscount>-22%</PriceDiscount>
            </PriceContainer>
            <SalePrice>
              <NumericFormat
                value='99.99'
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </SalePrice>
            <Message>
              4 interest-free payments of $49.75.
              &nbsp;
              <Link href='#' passHref>Learn more</Link>
            </Message>
            <Rating>
              <StarRating value={product.ratingsAverage} />
              <ReviewQuantity>
                <a href='#reviews'>{product.ratingsQuantity} Review</a>
              </ReviewQuantity>
            </Rating>
            <Hr />
            <ColorContainer>
              <ProductColor>Color</ProductColor>
              <ColorWrapper>
                {product?.color?.map((color, index) => {
                  return (
                    <Color
                      key={index}
                      color={color}
                      type='button'
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
              {product.size && (
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
              )}
            </SizeWrapper>
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
            <Hr />
            <ValueAddWrapper>
              <ValueAdd>
                <Image
                  src='/img/Shipping-black.svg'
                  width={24}
                  height={24}
                  alt=''
                />
                <span>Free Shipping over $50</span>
              </ValueAdd>
              <ValueAdd>
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
            <DescriptinContainer>
              <DescriptionHeader>Overview</DescriptionHeader>
              <DescriptionText>{product.desc}</DescriptionText>
            </DescriptinContainer>
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

const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;

  a {
    &:link,
    &:visited {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-decoration: underline;
      text-decoration-color: #89a8a0;
      text-underline-offset: 3px;
      text-transform: capitalize;
      font-size: 1.6rem;
      color: currentColor;
      outline-color: #ccc;
      line-height: 1.2;
    }

    &:hover,
    &:active {
      color: currentColor;
    }
  }
`;

const ProductWrapper = styled.div`
  margin-top: 2rem;

  @media only screen and (max-width: 37.5em) {
    margin-top: 1.5rem;
  }
`;

const ProductName = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.textProdHeader};
  line-height: 1.3;
  margin-bottom: 2rem;

  @media only screen and (max-width: 59.375em) {
    margin-bottom: 1.75rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 2.23rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 2rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProductPrice = styled.p`
  text-decoration: line-through;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 18.75em) {
    font-size: 1.5rem;
  }
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

  @media only screen and (max-width: 18.75em) {
    font-size: 1.37rem;
  }
`;

const SalePrice = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  color: #fa4b21;
  line-height: 1.3;

  @media only screen and (max-width: 18.75em) {
    font-size: 1.5rem;
  }
`;

const Message = styled.p`
  color: ${({ theme }) => theme.text};
  margin-top: 1rem;

  a {
    &:link,
    &:visited {
      text-decoration: underline;
      text-transform: capitalize;
      color: ${({ theme }) => theme.text};
      outline-color: #eee;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.text};
    }
  }
`;

const Rating = styled.div`
  margin: 1rem 0 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: ${({ theme }) => theme.star};
  }
`;

const ReviewQuantity = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textReviewCount};

  a {
    &:link,
    &:visited {
      color: currentColor;
      text-decoration-color: #89a8a0;
      text-underline-offset: 3px;
    }

    &:hover,
    &:active {
      color: currentColor;
    }
  }
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.cartModalBorder};
`;

const ColorContainer = styled.div`
  margin: 2rem 0;
`;

const ProductColor = styled.h2`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.text};
`;

const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.6rem;
  margin: 1.5rem 0;

  @media only screen and (max-width: 59.375em) {
    gap: 2.35rem;
  }

  @media only screen and (max-width: 37.5em) {
    margin-top: 1.3rem;
  }

  @media only screen and (max-width: 18.75em) {
    gap: 2rem;
  }
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

  @media only screen and (max-width: 37.5em) {
    width: 2rem;
    height: 2rem;
  }
`;

const SizeWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 4rem;

  @media only screen and (max-width: 37.5em) {
    margin-bottom: 2rem;
  }
`;

const SizeHeading = styled.h3`
  display: inline-block;
  font-weight: 400;
  font-size: 1.65rem;
  color: ${({ theme }) => theme.text};
`;

const SizeContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 37.5em) {
    margin-top: 1.3rem;
  }
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

  @media only screen and (max-width: 37.5em) {
    min-width: 3.75rem;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    font-size: 1.35rem;
  }

  &:hover {
    background-color: ${({ bcg }) => bcg ? '#89a8a0' : '#ebf0ef'};
  }
`;

const AddContainer = styled.div`
  margin: 2rem 0;
`;

const AmountHeading = styled.h3`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.65rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width: 37.5em) {
    gap: 1.5rem;
  }
`;

const AddButton = styled.button`
  border: none;
  display: inline-block;
  text-align: center;
  font-size: 1.4rem;
  min-width: 3rem;
  height: 3rem;
  padding: 0 0.4rem;
  line-height: 0.2;
  background-color: transparent;
  color: inherit;
  border: 2px solid #ebf0ef;
  border-radius: 0.4rem;
  outline-color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;

  @media only screen and (max-width: 37.5em) {
    min-width: 2.85rem;
    height: 2.85rem;
  }

  &:disabled {
    background-color: #f9f9f9;
    color: #999;
  }

  svg {
    font-size: 1.6rem;
    fill: currentColor;

    @media only screen and (max-width: 37.5em) {
      font-size: 1.4rem;
    }
  }
`;

const Amount = styled.span`
  width: 3rem;
  height: 3rem;
  font-size: 1.4rem;
  border: 1px solid #89a8a0;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 37.5em) {
    width: 2.85rem;
    height: 2.85rem;
    font-size: 1.3rem;
  }
`;

const Button = styled.button`
  display: inline-block;
  text-align: center;
  font-size: 1.8rem;
  width: 100%;
  padding: 2rem 1rem;
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

const SuccessMessage = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #409384;
  text-align: left;
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
    display: inline-block;
    object-fit: cover;
  }

  span {
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

const DescriptinContainer = styled.div`
  margin: 3rem 0;
`;

const DescriptionHeader = styled.h4`
  display: inline-block;
  font-weight: 400;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textProdHeader};
  margin-bottom: 3rem;
`;

const DescriptionText = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.3;
  word-wrap: break-word;
`;

export default Product;
