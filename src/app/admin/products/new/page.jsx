'use client';
import styled from 'styled-components';

const NewProduct = () => {
  return (
    <Container>
      <Wrapper>
        NewProduct
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 0;
`;

export default NewProduct;
