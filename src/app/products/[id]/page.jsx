'use client';
import styled from 'styled-components';

const SingleProduct = () => {
  return (
    <Container>
      <Wrapper>
        <ProductContainer>
          <Left>Left</Left>
        </ProductContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
`;

const ProductContainer = styled.div`
  
`;

const Left = styled.div`
  
`;

const Right = styled.div`
  
`;

export default SingleProduct;
