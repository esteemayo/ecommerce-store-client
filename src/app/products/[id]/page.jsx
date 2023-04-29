'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';
import { useDispatch } from 'react-redux';
import { faArrowLeft, faArrowRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import Recommendation from '@/components/Recommendation';
import Reviews from '@/components/Reviews';
import StarRating from '@/components/StarRating';
import { reviews } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const SingleProduct = () => {
  const dispatch = useDispatch();

  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isMoved, setIsMoved] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSelected, setIsSelected] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const colors = ['black', 'pink', 'crimson'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const images = [
    '/img/img-2.jpg',
    '/img/img-3.jpg',
    '/img/img-5.jpg',
    '/img/img-7.jpg',
    '/img/img-10.jpg',
    '/img/img-12.jpg',
  ];

  const lastIndex = images.lastIndexOf(images[images.length - 1]);

  const handleOpen = (index) => {
    setSlideIndex(index);
    setIsOpen(true);
  };

  const closeModalHandler = (e) => {
    if (e.target.classList.contains('imageContainer')) {
      setIsOpen(false);
    }

    const exitModal = (e) => {
      e.preventDefault();

      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', exitModal);
    return () => window.removeEventListener('keydown', exitModal);
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

  const handleClick = () => {
    console.log({ size, color, quantity });
  };

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <Wrapper>
        <ProductContainer>
          <Left>
            <ImageWrapper>
              {images.map((item, index) => {
                return (
                  <Image
                    key={index}
                    src={item}
                    width={500}
                    height={700}
                    alt=''
                    onClick={() => handleOpen(index)}
                  />
                )
              })}
            </ImageWrapper>
          </Left>
          <Right>
            <BreadCrumbs>
              <Link href='/' passHref>Home</Link> / {' '}
              <Link href='#' passHref>Shirts</Link>
            </BreadCrumbs>
            <ProductWrapper>
              <ProductName>The Stanley Rain Jacket in Black</ProductName>
              <PriceContainer>
                <ProductPrice>
                  <NumericFormat
                    value='199.00'
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
                <StarRating value={0} />
                <ReviewQuantity>
                  <a href='#reviews'>{reviews.length} Review</a>
                </ReviewQuantity>
              </Rating>
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
                <DescriptionText>
                  Let the rain fall, you&apos;ve come prepared. Introducing The Stanley, our newest Smart Layer rain jacket.
                  Made with recycled polyester, it features a regular fit and a waist length. This coat has a 10k/10k
                  water resistant and breathability rating, protecting you from heavy rainfalls while keeping your body
                  temperature on point. It achieves this rating because of its 2-layer fabric with different capabilities
                  that are laminated together to create a super material that&apos;s lightweight and more flexible.
                  Better yet, this coat has an extra layer of protection made with a PFC-free C0 (carbon-free)
                  DWR (Durable Water Repellent) with an 80/10 rating that ensures efficiency even after multiple washes.
                  2-way mechanical stretch fabric. Hand pockets with recycled zip closure. Recycled zip closure at
                  the centre front. Adjustable cord locks at the hood and hem for the perfect fit. 2-tone drawcord.
                  Inside chest pocket. Inside mesh storage pocket. Inside pocket is made with shell fabric. Flag label at side seam.
                  Small logo branding at the chest. Machine washable. Compatible with all Smart Layer base jackets.
                </DescriptionText>
              </DescriptinContainer>
              <Hr />
            </ProductWrapper>
          </Right>
        </ProductContainer>
        <Line />
        <Recommendation />
        <Reviews reviews={reviews} />
        <ImageOverlay type={isOpen ? 'show' : ''}>
          <CloseButton type='button' onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </CloseButton>
          {isMoved && slideIndex > 0 && (
            <ArrowButton
              type='button'
              direction='left'
              onClick={() => handleMove('left')}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </ArrowButton>
          )}
          <ImageContainer className='imageContainer' onClick={closeModalHandler}>
            <Image
              src={images[slideIndex]}
              width={1200}
              height={1000}
              alt=''
            />
          </ImageContainer>
          <ArrowButton
            type='button'
            direction='right'
            onClick={() => handleMove('right')}
            style={{ display: slideIndex === lastIndex && 'none' }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </ArrowButton>
        </ImageOverlay>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const Left = styled.div`
  flex: 2;
  padding: 1rem;
`;

const ImageWrapper = styled.figure`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  & > img {
    display: block;
    width: 50rem;
    height: 65rem;
    object-fit: cover;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

const Right = styled.div`
  flex: 1;
  padding-top: 5rem;
  padding-right: 3rem;
  padding-left: 3rem;
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

const Message = styled.p`
  color: inherit;
  margin-top: 1rem;

  a {
    &:link,
    &:visited {
      text-decoration: underline;
      text-transform: capitalize;
      color: inherit;
      outline-color: #eee;
    }

    &:hover,
    &:active {
      color: inherit;
    }
  }
`;

const Rating = styled.div`
  margin: 1rem 0 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #89a8a0;
  }
`;

const ReviewQuantity = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
  color: #8b8787;

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
  margin: 2rem 0;
`;

const AmountHeading = styled.h3`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.65rem;
  margin-bottom: 1rem;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
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

  &:disabled {
    background-color: #f9f9f9;
    color: #999;
  }

  svg {
    font-size: 1.6rem;
    fill: currentColor;
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
  margin-bottom: 3rem;
`

const DescriptionText = styled.p`
  font-size: 1.6rem;
  line-height: 1.3;
  word-wrap: break-word;
`;

const Line = styled.hr`
  width: 93%;
  height: 1px;
  border: none;
  margin: 0 auto;
  background-color: #e2e9e7;
`;

const ImageOverlay = styled.section`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  position: fixed;
  top: 0;
  left: ${({ type }) => type === 'show' ? 0 : '-100vw'};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  opacity: ${({ type }) => type === 'show' ? 1 : 0};
  transform: scale(${({ type }) => type === 'show' ? 1 : 0});
  z-index: ${({ type }) => type === 'show' ? 4000 : -1};
  transition: all 0.3s linear;
`;

const CloseButton = styled.button`
  border: none;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  color: var(--clr-white);
  outline-color: #777;
  cursor: pointer;

  position: absolute;
  top: 3rem;
  left: 3rem;

  svg {
    font-size: 2rem;
    fill: currentColor;
  }
`;

const ArrowButton = styled.button`
  border: none;
  display: inline-block;
  width: 4rem;
  height: 4rem;
  background-color: var(--clr-black);
  color: var(--clr-white);
  border-radius: 50%;
  outline-color: #777;
  position: absolute;
  top: 50%;
  left: ${({ direction }) => direction === 'left' && '1rem'};
  right: ${({ direction }) => direction === 'right' && '2.5rem'};
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.05);
  }

  svg {
    fill: var(--clr-white);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50rem;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export default SingleProduct;
