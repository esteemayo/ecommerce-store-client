'use client';
import styled from 'styled-components';

const NewProduct = () => {
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <Header>Create new product</Header>
        </FormWrapper>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  
`;

const Header = styled.h1`
  
`;

export default NewProduct;
