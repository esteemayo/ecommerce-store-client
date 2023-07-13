'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { NumericFormat } from 'react-number-format';
import { useMemo } from 'react';

import StarRating from '../StarRating';

const ProductHead = ({
  name,
  price,
  modal,
  discount,
  priceDiscount,
  ratingsAverage,
  ratingsQuantity,
}) => {
  const initialPrice = useMemo(() => {
    return price + discount;
  }, [discount, price]);

  return (
    <>
      <Heading modal={modal}>{name}</Heading>
      <PriceContainer>
        <Price>
          <NumericFormat
            value={initialPrice}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </Price>
        <Discount>-{priceDiscount}%</Discount>
      </PriceContainer>
      <TotalPrice>
        <NumericFormat
          value={price}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
      </TotalPrice>
      <Message>
        4 interest-free payments of $49.75.
        &nbsp;
        <Link href='#' passHref>Learn more</Link>
      </Message>
      <Rating>
        <StarRating value={ratingsAverage} />
        <ReviewQuantity>
          <a href='#reviews'>{ratingsQuantity} Review</a>
        </ReviewQuantity>
      </Rating>
    </>
  );
}

const Heading = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: ${({ modal }) => modal ? '1.8rem' : '2.4rem'};
  color: ${({ theme, modal }) => modal ? theme.text : theme.textProdHeader};
  line-height: ${({ modal }) => modal ? '1' : '1.3'};
  margin-bottom: ${({ modal }) => modal ? '1rem' : '2rem'};

  @media only screen and (max-width: 59.375em) {
    margin-bottom: ${({ modal }) => !modal && '1.75rem'};
  }

  @media only screen and (max-width: 37.5em) {
    font-size: ${({ modal }) => !modal && '2.23rem'};
  }

  @media only screen and (max-width: 18.75em) {
    font-size: ${({ modal }) => !modal && '2rem'};
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Price = styled.p`
  text-decoration: line-through;
  font-size: ${({ modal }) => modal ? '1.5rem' : '1.6rem'};
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 18.75em) {
    font-size: ${({ modal }) => !modal && '1.5rem'};
  }
`;

const Discount = styled.p`
  font-weight: ${({ modal }) => modal ? '500' : '700'};
  font-size: ${({ modal }) => modal ? '1.3rem' : '1.4rem'};
  padding: 0.4rem 0.6rem;
  background-color: #fa4b21;
  color: var(--clr-white);
  border-radius: 10rem;
  line-height: 1;
  letter-spacing: 0.02em;

  @media only screen and (max-width: 18.75em) {
    font-size: ${({ modal }) => !modal && '1.37rem'};
  }
`;

const TotalPrice = styled.p`
  font-weight: ${({ modal }) => modal ? '400' : '500'};
  font-size: ${({ modal }) => modal ? '1.5rem' : '1.6rem'};
  color: #fa4b21;
  line-height: 1.3;
  margin-bottom: ${({ modal }) => modal && '1rem'};

  @media only screen and (max-width: 18.75em) {
    font-size: ${({ modal }) => !modal && '1.5rem'};
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
      text-decoration-color: ${({ theme }) => theme.colCrumbs};
      text-underline-offset: 3px;
    }

    &:hover,
    &:active {
      color: currentColor;
    }
  }
`;

export default ProductHead;
