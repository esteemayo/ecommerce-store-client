'use client';

import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useMemo } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { formatCurrency } from '@/utils/formatCurrency';
import { useCartStore } from '@/hooks/useCartStore';
import { WishlistValues, WislistPriceProps } from '@/types';

const WishlistPrice = ({ price, wishlist, onAction }: WislistPriceProps) => {
  const cart = useCartStore((state) => state.cart);

  const handleClick = useCallback(
    (wishlist: WishlistValues) => {
      onAction(wishlist);
    },
    [onAction]
  );

  const inCart = useMemo(() => {
    const cartItem = cart.find((item) => item.id === wishlist.id);
    return !!cartItem;
  }, [cart, wishlist.id]);

  const btnLabel = useMemo(() => {
    return `${inCart ? 'Added' : 'Add to cart'}`;
  }, [inCart]);

  return (
    <Container>
      <Price>{formatCurrency(price)}</Price>
      <Button
        type='button'
        disabled={inCart}
        onClick={() => handleClick(wishlist)}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        {btnLabel}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media only screen and (max-width: 37.5em) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Price = styled.span`
  font-weight: 400;
  font-size: 2.23rem;
  color: ${({ theme }) => theme.textProdCard};

  @media only screen and (max-width: 18.75em) {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.bgBtn};
  color: ${({ theme }) => theme.textBtn};
  background-image: ${({ theme }) => css`
    linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      ${theme.bgImgBtn} 50%
    );
  `};
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.btnOut};
  cursor: pointer;
  transition: all 0.3s ease;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.47rem;
  }

  @media only screen and (max-width: 18.75em) {
    font-size: 1.4rem;
    padding: 0.8rem 1rem;
  }

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    opacity: 0.85;
  }

  &:disabled:hover {
    background-position: 0%;
  }

  svg {
    @media only screen and (max-width: 18.75em) {
      font-size: 1.3rem;
    }
  }
`;

export default WishlistPrice;
