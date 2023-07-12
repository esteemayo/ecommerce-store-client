'use client';

import styled from 'styled-components';

const ProductHead = ({ name }) => {
  return (
    <>
      <Heading>{name}</Heading>
    </>
  );
}

const Heading = styled.h1`

`;

export default ProductHead;
