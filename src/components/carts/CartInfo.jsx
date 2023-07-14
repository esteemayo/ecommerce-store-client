'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { NumericFormat } from 'react-number-format';

const CartInfo = () => {
  return (
    <Container>
      <ImageContainer></ImageContainer>
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
