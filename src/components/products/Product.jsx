'use client';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useRef, useState } from 'react';

import { addProduct } from '@/features/cart/cartSlice';
import BreadCrumbs from '@/app/products/[id]/BreadCrumbs';

import Counter from '../inputs/Counter';
import ColorSelect from '../inputs/ColorSelect';
import SizeSelect from '../inputs/SizeSelect';

import ProductHead from './ProductHead';
import ProductValue from './ProductValue';
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';

import Alert from '../Alert';
import ProductImageModal from '../modals/ProductImageModal';

import { productValue } from '@/data';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => ({ ...state.darkMode }));

  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isSelected, setIsSelected] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [alert, setAlert] = useState(false);

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

  return (
    <Container>
      <ProductContainer>
        <Left>
          <ProductImage images={product.images} />
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
            <ProductValue items={productValue} mode={darkMode} />
            <Hr />
            <ProductInfo
              title='Overview'
              content={product.desc}
            />
            {/* <Hr /> */}
          </ProductWrapper>
        </Right>
      </ProductContainer>
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

export default Product;
