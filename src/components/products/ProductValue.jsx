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
            <>
              <Image
                key={id}
                src={img}
                width={24}
                height={24}
                alt=''
              />
              <span>{desc}</span>
            </>
          );
        })}
      </ValueAdd>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3.2rem;
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 2rem;
`;

const ValueAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.text};
`;

export default ProductValue;
