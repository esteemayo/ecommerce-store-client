'use client';

import styled from 'styled-components';

const ProductHead = ({ name }) => {
  return (
    <>
      <Heading>{name}</Heading>
      <PriceContainer>

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
