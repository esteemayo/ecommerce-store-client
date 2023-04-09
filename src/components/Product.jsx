import styled from 'styled-components';

const Product = () => {
  return (
    <Container>
      <Wrapper>
        Product
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const Wrapper = styled.div`
  
`;

export default Product;
