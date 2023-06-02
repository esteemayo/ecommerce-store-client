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
  
`;

export default NewProduct;
