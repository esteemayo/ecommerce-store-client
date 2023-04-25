'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

import Recommendation from '@/components/Recommendation';
import Reviews from '@/components/Reviews';
import StarRating from '@/components/StarRating';
import { reviews } from '@/data';

const SingleProduct = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const images = [
    '/img/category-1.jpg',
    '/img/category-5.jpg',
    '/img/user-1.jpg',
    '/img/user-2.jpg',
    '/img/user-3.jpg',
    '/img/user-4.jpg',
    '/img/user-5.jpg',
    '/img/user-6.jpg',
    '/img/user-7.jpg',
    '/img/user-8.jpg',
    '/img/user-9.jpg',
    '/img/reviewer-1.jpg',
    '/img/reviewer-2.jpg',
    '/img/reviewer-3.jpg',
  ];

  return (
    <Container>
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
                <ProductPrice>$199.00</ProductPrice>
                <PriceDiscount>-22%</PriceDiscount>
              </PriceContainer>
              <SalePrice>$99.99</SalePrice>
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
                  {[...new Array(3)].map((_, index) => {
                    return (
                      <Color
                        key={index}
                        selected={isSelected}
                        onClick={() => setIsSelected(true)}
                      >
                        &nbsp;
                      </Color>
                    );
                  })}
                </ColorWrapper>
              </ColorContainer>
              <SizeHeading>Select a size</SizeHeading>
              <SizeContainer>
                <SelectSize type='button'>XS</SelectSize>
                <SelectSize type='button'>S</SelectSize>
                <SelectSize type='button'>M</SelectSize>
                <SelectSize type='button'>L</SelectSize>
                <SelectSize type='button'>XL</SelectSize>
                <SelectSize type='button'>XXL</SelectSize>
              </SizeContainer>
              <Hr />
              <Button type='button'>Add to cart</Button>
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
        <ImageOverlay>
          <ImageContainer>
            <Image
              src={images[slideIndex]}
              width={1200}
              height={1000}
              alt=''
            />
          </ImageContainer>
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
  font-size: 1.6rem;
  cursor: default;
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
  cursor: default;
`;

const SalePrice = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  color: #fa4b21;
  line-height: 1.3;
  cursor: default;
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
  font-weight: 400;
  font-size: 1.7rem;
`;

const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1.5rem 0;
`;

const Color = styled.button`
  border: none;
  display: block;
  width: 2rem;
  height: 2rem;
  background-color: crimson;
  border-radius: 50%;
  outline-color: ${({ selected }) => selected && '#89a8a0'};
  outline-offset: 3px;
  cursor: pointer;

  &:focus {
    outline-color: #89a8a0;
    outline-offset: 3px;
  }
`;

const SizeHeading = styled.h3`
  display: inline-block;
  font-weight: 400;
  font-size: 1.65rem;
  margin-top: 1rem 0 2rem 0;
`;

const SizeContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
`;

const SelectSize = styled.button`
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
  margin-bottom: 0.8rem;
  cursor: pointer;
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
  cursor: default;
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
  cursor: default;
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
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 80%;

  img {
    width: 90%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export default SingleProduct;
