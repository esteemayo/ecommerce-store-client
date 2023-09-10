'use client';

import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ProductValue = ({ items, mode }) => {
  return (
    <Container>
      <ValueAdd mode={mode}>
        {items?.map((item) => {
          const { id, desc, img } = item;
          return (
            <ImageWrapper key={id}>
              <Image
                src={img}
                width={24}
                height={24}
                alt=''
              />
              <span>{desc}</span>
            </ImageWrapper>
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
  color: ${({ theme }) => theme.text};

  img {
    width: 2.4rem;
    height: auto;
    background-color: ${({ mode }) => mode === 'true' && '#1b1a1a'};
    display: inline-block;
    object-fit: cover;
  }

  span {
    font-size: 1.25rem;
    line-height: 1.2;
  }
`;

const ImageWrapper = styled.div`
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

ProductValue.propTypes = {
  items: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
};

export default ProductValue;
