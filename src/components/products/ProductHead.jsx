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
`;

const TotalPrice = styled.p`
  
`;

const Message = styled.p`
  
`;

const Rating = styled.div`
  
`;

const ReviewQuantity = styled.span`
  
`;

export default ProductHead;
