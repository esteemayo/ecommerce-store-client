'use client';

import styled from 'styled-components';

const ProductInfo = ({ value }) => {
  return (
    <Container>
      <Heading>Overview</Heading>
      <Text>{value}</Text>
    </Container>
  );
}

const Container = styled.div`
  margin: 3rem 0;
`;

const Heading = styled.h4`
  display: inline-block;
`;

const Text = styled.p`
  
`;

export default ProductInfo;
