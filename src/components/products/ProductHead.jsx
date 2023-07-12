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
`;

const PriceContainer = styled.div`

`;

const Price = styled.p`

`;

const Discount = styled.p`

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
