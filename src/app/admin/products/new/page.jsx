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
                <Option value='jeans'>Jeans</Option>
                <Option value='electronics'>Electronics</Option>
                <Option value='gadgets'>Gadgets</Option>
                <Option value='shirts'>Shirts</Option>
                <Option value='snickers'>Snickers</Option>
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
  width: 40rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxForm};
  -webkit-box-shadow: ${({ theme }) => theme.boxForm};
  -moz-box-shadow: ${({ theme }) => theme.boxForm};
`;

const Header = styled.h1`
  display: block;
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.textFormHeader};
`;

const Form = styled.form`
  margin: 2rem 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ type }) => type === 'file' && 'start'};
  justify-content: ${({ type }) => type === 'file' && 'center'};

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const FormLabel = styled.label`
  display: inline-block;
  width: ${({ type }) => type !== 'file' && '13rem'};
  font-weight: 600;
  font-size: ${({ type }) => type === 'file' ? '1.6rem' : '1.4rem'};
  color:  ${({ theme }) => theme.textLabel};
`;

const FormInput = styled.input`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.bgInput};
  color: #999;
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.inputOut};
  caret-color: ${({ theme }) => theme.inputCaret};
  transition: all 0.3s ease;

  &:focus {
    background-color: transparent;
  }

  &::-webkit-input-placeholder {
    font-weight: 300;
    font-size: 1.5rem;
    color: #bbb;
  }
`;

const TextArea = styled.textarea`
  
`;

const FormSelect = styled.select`
  
`;

const Option = styled.option`
  
`;

const FormButton = styled.button`
  margin-top: 2rem;
  border: none;
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  width: 100%;
  padding: 1.5rem;
  background-color: var(--clr-primary-green);
  color: ${({ theme }) => theme.textBtn};
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #89a8a0 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #85beae;
  cursor: pointer;
`;

export default NewProduct;
