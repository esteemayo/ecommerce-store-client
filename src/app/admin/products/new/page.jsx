'use client';
import styled from 'styled-components';

const NewProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <Header>Create new product</Header>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor='name'>Product name</FormLabel>
              <FormInput
                id='name'
                name='name'
                placeholder='Enter product name'
              />
            </FormGroup>
            <FormButton type='submit'>Create</FormButton>
          </Form>
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

const Form = styled.form`
  
`;

const FormGroup = styled.div`
  
`;

const FormLabel = styled.label`
  
`;

const FormInput = styled.input`
  
`;

const TextArea = styled.textarea`
  
`;

const FormButton = styled.button`
  
`;

export default NewProduct;
