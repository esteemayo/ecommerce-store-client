'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';

const CartInfo = ({ images }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={images[0]}
          width={120}
          height={120}
          alt=''
        />
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  flex: 3;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ImageContainer = styled.div`
  
`;

export default CartInfo;
