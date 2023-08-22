'use client';

import styled, { css } from 'styled-components';
import Image from 'next/image';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';
import { useCallback, useMemo } from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import StarRating from '../StarRating';
import LikeButton from '../LikeButton';

const ProductCard = ({ product, onOpen, onSelect }) => {
  const handleOpen = useCallback(() => {
    onOpen();
    onSelect(product);
  }, [product, onOpen, onSelect]);

  const url = useMemo(() => {
    return `/products/${encodeURIComponent(product.id)}`;
  }, [product.id]);

  const initialPrice = useMemo(() => {
    return product.price + product.discount;
  }, [product]);

  return (
    <Container>
      <ImageContainer>
        <StyledImage
          src={product.images[0]}
          width={300}
          height={200}
          alt=''
        />
      </ImageContainer>
      <InfoContainer>
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
            <span>({product.ratingsQuantity} reviews)</span>
          </Reviews>
        </ReviewContainer>
        <PriceContainer>
          <Prices>
            <Discount>
              <NumericFormat
                value={initialPrice}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </Discount>
            <Price>
              <NumericFormat
                value={product.price}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              />
            </Price>
          </Prices>
          {product.inStock && <InStock>In stock</InStock>}
        </PriceContainer>
        <Button type='button' onClick={handleOpen}>
          <FontAwesomeIcon icon={faShoppingCart} />
          &nbsp;
          add to cart
        </Button>
        <FavWrapper>
          <WishlistButton>
            <FontAwesomeIcon icon={faHeart} />
            Add to Wishlist
          </WishlistButton>
          <LikeButton />
        </FavWrapper>
      </InfoContainer>
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

const ImageContainer = styled.div`
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 20rem;
  display: block;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  @media only screen and (max-width: 37.5em) {
    height: 17.5rem;
  }
`;

const InfoContainer = styled.div`
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

const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
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
  outline-color: ${({ theme }) => theme.btnOut};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 64em) {
    padding: 1.3rem 1rem;
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.498rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1.4rem;
  }

  &:hover {
    background-position: 100%;
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

const WishlistButton = styled.button`
  border: none;
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  background-color: transparent;
  color: #858585;
  outline-color: #b8b6b6;
  outline-offset: 3px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media only screen and (max-width: 64em) {
    align-items: self-end;
  }

  @media only screen and (max-width: 35em) {
    font-size: 1.37rem;
  }

  svg {
    font-size: 1.7rem;

    @media only screen and (max-width: 35em) {
      font-size: 1.6rem;
    }
  }
`;

// const LikeButton = styled.button`
//   border: none;
//   font-weight: 500;
//   font-size: 1.4rem;
//   background-color: transparent;
//   color: #858585;
//   outline-color: #b8b6b6;
//   outline-offset: 3px;
//   cursor: pointer;

//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   @media only screen and (max-width: 64em) {
//     align-items: self-end;
//   }

//   @media only screen and (max-width: 35em) {
//     font-size: 1.37rem;
//   }

//   svg {
//     font-size: 1.7rem;

//     @media only screen and (max-width: 35em) {
//       font-size: 1.6rem;
//     }
//   }
// `;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ProductCard;
