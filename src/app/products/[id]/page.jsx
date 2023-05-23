'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';

import Recommendation from '@/components/Recommendation';
import Reviews from '@/components/Reviews';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import { storeProducts } from '@/data';
import Product from '@/components/Product';

const SingleProduct = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = storeProducts.find((item) => item.id === parseInt(id));
    setProduct(product);
  }, [id]);

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <Wrapper>
        <Product product={product} />
        <Line />
        <Recommendation />
        <Reviews />
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--clr-white);
  padding-top: 8rem;
  padding-bottom: 4rem;

  @media only screen and (max-width: 37.5em) {
    padding-top: 4rem;
  }
`;

const Wrapper = styled.div`
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

const IconButton = styled.button`
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
