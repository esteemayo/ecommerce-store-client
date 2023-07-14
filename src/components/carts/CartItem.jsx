'use client';

import styled from 'styled-components';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import CartInfo from './CartInfo';
import { remove, toggleQuantity } from '@/features/cart/cartSlice';

const CartItem = ({ id, name, size, color, images, price, quantity }) => {
  const dispatch = useDispatch();

  const handleToggle = useCallback((type) => {
    dispatch(toggleQuantity({ type, id }));
  }, [id, dispatch]);

  return (
    <Container>
      <Wrapper>
        <CartInfo
          color={color}
          name={name}
          images={images}
          price={price}
          size={size}
          onAction={() => dispatch(remove(id))}
        />
        <Right>
          <QuantityContainer>
            <AddQuantity type='button' onClick={() => handleToggle('inc')}>
              <FontAwesomeIcon icon={faPlus} />
            </AddQuantity>
            <Quantity>{quantity}</Quantity>
            <MinusQuantity type='button' onClick={() => handleToggle('dec')}>
              <FontAwesomeIcon icon={faMinus} />
            </MinusQuantity>
          </QuantityContainer>
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  line-height: 1.12;
  
  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.cartBorder};
    margin-bottom: 1.25rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  @media only screen and (max-width: 31.25em) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  width: 12rem;
  height: 12rem;
  background-color: #ede9e6;
  border-radius: 3px;

  @media only screen and (max-width: 25em) {
    width: 10rem;
    height: 10rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 8rem;
    height: 8rem;
  }

  img {
    width: 12rem;
    height: 12rem;
    display: block;
    object-fit: cover;
    border-radius: 3px;

    @media only screen and (max-width: 25em) {
      width: 10rem;
      height: 10rem;
    }

    @media only screen and (max-width: 18.75em) {
      width: 8rem;
      height: 8rem;
    }
  }
`;

const ProductDetails = styled.div`
  width: 30rem;
`;

const ProductName = styled.h2`
  display: block;
  font-weight: 500;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 43.75em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 31.25em) {
    word-wrap: break-word;
    word-break: break-all;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.6rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Price = styled.span`
  display: block;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textCartItem};

  @media only screen and (max-width: 43.75em) {
    font-size: 1.45rem;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.p`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 43.75em) {
    font-size: 1.5rem;
  }
`;

const ProductColor = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textCartItem};

  @media only screen and (max-width: 43.75em) {
    font-size: 1.45rem;
  }

  &::before {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${({ color }) => color};
    background-color: ${({ color }) => color === 'white' && '#f9f9f9'};
    border: 1px solid ${({ color }) => color};
    border-radius: 50%;

    @media only screen and (max-width: 43.75em) {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;

const SizeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 31.25em) {
    width: 100%;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  @media only screen and (max-width: 31.25em) {
    flex-direction: row;
  }
`;

const AddQuantity = styled.button`
  border: none;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  font-weight: lighter;
  font-size: 1.4rem;
  background-color: transparent;
  color: #c3c3c4;
  border: 1px solid #eee;
  border-radius: 50%;
  outline-color: #ddd;
  cursor: pointer;

  @media only screen and (max-width: 43.75em) {
    width: 2.45rem;
    height: 2.45rem;
    font-size: 1.3rem;
  }

  svg {
    font-size: inherit;
    fill: currentColor;
  }
`;

const MinusQuantity = styled.button`
  border: none;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  font-weight: lighter;
  font-size: 1.4rem;
  background-color: transparent;
  color: #c3c3c4;
  border: 1px solid #eee;
  border-radius: 50%;
  outline-color: #ddd;
  cursor: pointer;

  @media only screen and (max-width: 43.75em) {
    width: 2.45rem;
    height: 2.45rem;
    font-size: 1.3rem;
  }

  svg {
    font-size: inherit;
    fill: currentColor;
  }
`;

const Quantity = styled.span`
  display: inline-block;
  font-size: 600;
  font-size: 2rem;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 43.75em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.5rem;
  }
`;

export default CartItem;
