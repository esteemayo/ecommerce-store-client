'use client';

import styled from 'styled-components';
import Image from 'next/image';

const ProductImage = (image, index, onOpen) => {
  return (
    <StyledImage
      src={image}
      width={350}
      height={350}
      alt=''
      onClick={() => onOpen(index)}
    />
  );
};

const StyledImage = styled(Image)`
  display: block;
  width: 35rem;
  height: 35rem;
  object-fit: cover;
  border-radius: 2px;
  cursor: pointer;

  @media only screen and (max-width: 64em) {
    width: 30rem;
  }

  @media only screen and (max-width: 59.375em) {
    width: 23rem;
    height: 30rem;
  }

  @media only screen and (max-width: 50em) {
    width: 225px;
    border-radius: revert;
    cursor: default;
  }

  @media only screen and (max-width: 37.5em) {
    height: 20rem;
  }

  @media only screen and (max-width: 18.75em) {
    height: 15rem;
  }
`;

export default ProductImage;
