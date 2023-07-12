'use client';

import styled from 'styled-components';
import Image from 'next/image';

const ProductValue = ({ items, mode }) => {
  return (
    <Container>
      <ValueAdd mode={mode}>
        {items.map((item) => {
          const { id, desc, img } = item;
          return (
            <Image
              key={id}
              src={img}
              width={24}
              height={24}
              alt=''
            />
          );
        })}
      </ValueAdd>
    </Container>
  );
}

const Container = styled.div`
  
`;

const ValueAdd = styled.div`
  
`;

export default ProductValue;
