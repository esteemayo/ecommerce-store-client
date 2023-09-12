import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import WishlistButton from '../buttons/WishlistButton';
import FavoriteButton from '../buttons/FavoriteButton';

import StarRating from '../StarRating';
import Button from './Button';
import FormatPrice from '../FormatPrice';

const CardInfo = ({
  url,
  product,
  initialPrice,
  priceLabel,
  reviewLabel,
  wished,
  onOpen,
}) => {
  return (
    <Container>
      <ProductName>
        <Link href={url} passHref>{product.name}</Link>
      </ProductName>
      <ReviewContainer>
        <StarRating
          readOnly
          value={product.ratingsAverage}
          name='read-only'
        />
        <Reviews>
          <span>({product.ratingsQuantity} {reviewLabel})</span>
        </Reviews>
      </ReviewContainer>
      <PriceContainer>
        <Prices>
          <Discount>
            <FormatPrice value={initialPrice} />
          </Discount>
          <Price>
            <FormatPrice value={priceLabel} />
          </Price>
        </Prices>
        {product.inStock && <InStock>In stock</InStock>}
      </PriceContainer>
      <Button onClick={onOpen} />
      <FavWrapper>
        <WishlistButton
          product={product}
          wished={wished}
          actionId={product.id}
        />
        <FavoriteButton />
      </FavWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  background-color: inherit;
  border-radius: 0.5rem;

  @media only screen and (max-width: 35em) {
    padding: 1rem;
  }
`;

const ProductName = styled.h3`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textProdCard};
  margin-bottom: 0.5rem;
  line-height: 1;

  @media only screen and (max-width: 64em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 35em) {
    font-size: 1.63rem;
  }

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      text-decoration-color: #e2e9e7;
      color: inherit;
      outline-color: #eee;
      outline-offset: 3px;
      transition: all 0.3s ease;
    }

    &:hover,
    &:active {
      text-decoration: underline;
      text-decoration-color: #e2e9e7;
      text-underline-offset: 3px;
    }
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  svg {
    font-size: 2.3rem;
    fill: ${({ theme }) => theme.star};

    @media only screen and (max-width: 35em) {
      font-size: 2rem;
    }
  }
`;

const Reviews = styled.div`
  span {
    color: ${({ theme }) => theme.star};

    @media only screen and (max-width: 35em) {
      font-size: 1.4rem;
    }
  }
`;

const PriceContainer = styled.div`
  margin: 0.5rem 0 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Prices = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 1.85rem;
  color: ${({ theme }) => theme.textPrice};
  line-height: 1;

  @media only screen and (max-width: 35em) {
    font-size: 1.7rem;
  }
`;

const Discount = styled.span`
  text-decoration: line-through;
  font-size: 1.7rem;
  color: #adacac;

  @media only screen and (max-width: 35em) {
    font-size: 1.58rem;
  }
`;

const InStock = styled.div`
  color: #00e774;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: 35em) {
    font-size: 1.43rem;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-color: #00e774;
    border-radius: 50%;

    @media only screen and (max-width: 35em) {
      width: 0.85rem;
      height: 0.85rem;
    }
  }
`;

const FavWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 37.5em) {
    padding-top: 1.7rem;
  }
`;

CardInfo.propTypes = {
  url: PropTypes.string,
  product: PropTypes.object,
  initialPrice: PropTypes.number,
  priceLabel: PropTypes.number,
  reviewLabel: PropTypes.string,
  wished: PropTypes.array,
  onOpen: PropTypes.func.isRequired,
};

export default CardInfo;
