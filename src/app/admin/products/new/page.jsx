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
                type='text'
                name='name'
                placeholder='Enter product name'
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='desc'>Description</FormLabel>
              <TextArea
                id='desc'
                name='desc'
                placeholder='Enter product description'
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='price'>Product price</FormLabel>
              <FormInput
                id='price'
                type='number'
                name='price'
                placeholder='Enter product price'
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='priceDiscount'>Price Discount</FormLabel>
              <FormInput
                id='priceDiscount'
                type='number'
                name='priceDiscount'
                placeholder='Enter price discount'
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='numberInStock'>Number in stock</FormLabel>
              <FormInput
                id='numberInStock'
                type='number'
                name='numberInStock'
                placeholder='Enter number in stock'
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='color'>Color</FormLabel>
              <FormInput
                id='color'
                type='text'
                name='color'
                placeholder='Enter color'
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='size'>Size</FormLabel>
              <FormInput
                id='size'
                type='text'
                name='size'
                placeholder='Enter size'
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='category'>Select category</FormLabel>
              <FormSelect id='category' name='category'>

              </FormSelect>
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='tags'>Product tags</FormLabel>
              <FormInput
                id='tags'
                type='text'
                name='tags'
                placeholder='Enter tags'
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

const FormSelect = styled.select`
  
`;

const Option = styled.option`
  
`;

const FormButton = styled.button`
  
`;

export default NewProduct;
