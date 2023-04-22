'use client';
import styled from 'styled-components';

const SingleProduct = () => {
  return (
    <Container>
      <Wrapper>
        <ProductContainer>
          <Left>Left</Left>
          <Right>Right</Right>
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
  /* max-width: 102.4rem;
  margin: 0 auto; */
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
`;

const Right = styled.div`
  flex: 1;
`;

export default SingleProduct;
