'use client';

import styled from 'styled-components';
import Image from 'next/image';

const EmptyProduct = ({ src }) => {
  return (
    <Container>
      <Image
        src={src}
        width={500}
        height={250}
        alt=''
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;

  img {
    width: 50rem;
    height: 25rem;
  }
`;

export default EmptyProduct;
