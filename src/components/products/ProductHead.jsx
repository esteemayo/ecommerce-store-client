'use client';

import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';

const ProductHead = ({ name, price, discount }) => {
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
      </PriceContainer>
    </>
  );
}

const Heading = styled.h1`

`;

const PriceContainer = styled.div`

`;

const Price = styled.p`

`;

export default ProductHead;
