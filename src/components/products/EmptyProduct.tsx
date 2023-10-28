'use client';

import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

const EmptyProduct = ({ src, title }) => {
  return (
    <Container>
      <StyledImage
        src={src}
        width={500}
        height={250}
        alt=''
      />
      <Message>{title}</Message>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
`;

const StyledImage = styled(Image)`
  width: 50rem;
  height: 25rem;
  display: block;
  object-fit: cover;

  @media only screen and (max-width: 25em) {
    width: 40rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 34.5rem;
  }
`;

const Message = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.textNotFound};
`;

EmptyProduct.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default EmptyProduct;