'use client';

import styled, { css } from 'styled-components';
import Image from 'next/image';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import StarRating from '../StarRating';
import CardInfo from './CardInfo';
import CardImage from './CardImage';
import FormatPrice from '../FormatPrice';

const ProductCard = ({ product, onOpen, onSelect }) => {
  const { wished } = useSelector((state) => ({ ...state.cart }));

  const handleOpen = useCallback(() => {
    onOpen();
    onSelect(product);
  }, [product, onOpen, onSelect]);

  const url = useMemo(() => {
    return `/products/${encodeURIComponent(product.id)}`;
  }, [product.id]);

  const reviewLabel = useMemo(() => {
    if (product.ratingsQuantity > 1) {
      return 'reviews';
    }

    return 'review';
  }, [product.ratingsQuantity]);

  const initialPrice = useMemo(() => {
    return product.price + product.discount;
  }, [product]);

  const priceLabel = useMemo(() => {
    return Math.round(product.price);
  }, [product]);

  return (
    <Container>
      <CardImage src={product?.images[0]} />
      <CardInfo
        url={url}
        product={product}
        initialPrice={initialPrice}
        priceLabel={priceLabel}
        reviewLabel={reviewLabel}
        wished={wished}
        onOpen={handleOpen}
      />
    </Container>
  );
}

const Container = styled.article`
  width: 35rem;
  background-color: ${({ theme }) => theme.bgProdCard};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxCard};
  -webkit-box-shadow: ${({ theme }) => theme.boxCard};
  -moz-box-shadow: ${({ theme }) => theme.boxCard};

  @media only screen and (max-width: 50em) {
    width: 33rem;
  }

  @media only screen and (max-width: 37.5em) {
    width: 29rem;
  }

  @media only screen and (max-width: 35em) {
    width: 26rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 40rem;
  }
`;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ProductCard;
