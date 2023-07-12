'use client';

import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';
import Link from 'next/link';

import StarRating from '../StarRating';

const ProductHead = ({ name, price, discount, priceDiscount, ratingsAverage, ratingsQuantity }) => {
  return (
    <>
      <Heading>{name}</Heading>
      <PriceContainer>
        <Price>
          <NumericFormat
            value={price + discount}
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
  font-size: 2.4rem;
  color: ${({ theme }) => theme.textProdHeader};
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

const Price = styled.p`
  text-decoration: line-through;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 18.75em) {
    font-size: 1.5rem;
  }
`;

const Discount = styled.p`
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

const TotalPrice = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  color: #fa4b21;
  line-height: 1.3;

  @media only screen and (max-width: 18.75em) {
    font-size: 1.5rem;
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
`;

const ReviewQuantity = styled.span`
  
`;

export default ProductHead;
