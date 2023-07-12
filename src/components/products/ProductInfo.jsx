'use client';

import styled from 'styled-components';

const ProductInfo = ({ title, content }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Text>{content}</Text>
    </Container>
  );
}

const Container = styled.div`
  margin: 3rem 0;
`;

const Heading = styled.h4`
  display: inline-block;
  font-weight: 400;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textProdHeader};
  margin-bottom: 3rem;
`;

const Text = styled.p`
  text-align: justify;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.3;
  word-wrap: break-word;
`;

export default ProductInfo;
