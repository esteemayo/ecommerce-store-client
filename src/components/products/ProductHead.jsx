'use client';

import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';

const ProductHead = ({ name }) => {
  return (
    <>
      <Heading>{name}</Heading>
      <PriceContainer>
        <Price></Price>
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
