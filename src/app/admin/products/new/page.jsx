'use client';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const initialState = {
  name: '',
  desc: '',
  price: '',
  priceDiscount: '',
  numberInStock: '',
  category: '',
};

const NewProduct = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState(initialState);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [tags, setTags] = useState([]);

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleColor = (e) => {
    setColor(e.target.value.split(','));
  };

  const handleSize = (e) => {
    setSize(e.target.value.split(','));
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(','));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...data, files, color, size, tags });
  };

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
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
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='desc'>Description</FormLabel>
              <TextArea
                id='desc'
                name='desc'
                placeholder='Enter product description'
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='price'>Product price</FormLabel>
              <FormInput
                id='price'
                type='number'
                name='price'
                placeholder='Enter product price'
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='priceDiscount'>Price Discount</FormLabel>
              <FormInput
                id='priceDiscount'
                type='number'
                name='priceDiscount'
                placeholder='Enter price discount'
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='numberInStock'>Number in stock</FormLabel>
              <FormInput
                id='numberInStock'
                type='number'
                name='numberInStock'
                placeholder='Enter number in stock'
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='color'>Color</FormLabel>
              <FormInput
                id='color'
                type='text'
                name='color'
                placeholder='Enter color'
                onChange={handleColor}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='size'>Size</FormLabel>
              <FormInput
                id='size'
                type='text'
                name='size'
                placeholder='Enter size'
                onChange={handleSize}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='category'>Select category</FormLabel>
              <FormSelect id='category' name='category' onChange={handleChange}>
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
                placeholder='Separate the tags with commas'
                onChange={handleTags}
              />
            </FormGroup>
            <FormGroup type='file'>
              <FormUpload
                type='file'
                id='file'
                accept='image/*'
                onChange={(e) => setFiles(e.target.files)}
                multiple
              />
              <FormLabel htmlFor='file' type='file'>Attach images</FormLabel>
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
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  height: 10rem;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.bgInput};
  color: #999;
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.inputOut};
  overflow: hidden;
  resize: none;
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

const FormSelect = styled.select`
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
`;

const Option = styled.option`
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.bgProdCard};
  color: inherit;
`;

const FormUpload = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + ${FormLabel} {
    outline: 3px solid ${({ theme }) => theme.fileInput};
    outline-offset: 3px;
  }

  & + ${FormLabel} {
    display: inline-block;
    color: ${({ theme }) => theme.textFile};
    text-decoration: none;
    padding: 3px;
    border-bottom: 1px solid ${({ theme }) => theme.fileInput};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.fileInput};
      color: ${({ theme }) => theme.textCat};
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
`;

const UploadProgress = styled.span`
  text-transform: capitalize;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
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
  transition: all 0.3s;

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.span`
  font-size: 1.3rem;
  color: var(--clr-secondary-red);
  margin-top: 1px;
`;

export default NewProduct;
