'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductImage = () => {
  return (
    <Container>
      <Wrapper>
        <ArrowButton
          type='button'
          direction='left'
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </ArrowButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`

`;

const Wrapper = styled.figure`
  
`;

const ArrowButton = styled.button`
  
`;

export default ProductImage;
