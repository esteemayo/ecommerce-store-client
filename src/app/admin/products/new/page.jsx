'use client';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo, useState } from 'react';

import FormButton from '@/components/form/FormButton';
import ClientOnly from '@/components/ClientOnly';
import FormError from '@/components/form/FormError';
import FormBox from '@/components/form/FormBox';
import { StyledBox } from '@/components/form/StyledBox';
import Heading from '@/components/form/Heading';
import FormInput from '@/components/form/FormInput';

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
  const { mode } = useSelector((state) => ({ ...state.darkMode }));

  const [data, setData] = useState(initialState);
  const [size, setSize] = useState([]);
  const [files, setFiles] = useState(null);
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});
  const [color, setColor] = useState([]);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleColor = useCallback((e) => {
    setColor(e.target.value.split(','));
  }, []);

  const handleSize = useCallback((e) => {
    setSize(e.target.value.split(','));
  }, []);

  const handleTags = useCallback((e) => {
    setTags(e.target.value.split(','));
  }, []);

  const validateForm = useCallback(() => {
    const errors = {};
    const { name, desc, price, priceDiscount, numberInStock, category } = data;

    if (name.trim() === '') {
      errors.name = 'Product name must not be empty';
    }

    if (desc.trim() === '') {
      errors.desc = 'Product description must not be empty';
    }

    if (price === '') {
      errors.price = 'Price must not be empty';
    }

    if (priceDiscount === '') {
      errors.priceDiscount = 'Price discount must not be empty';
    }

    if (numberInStock === '') {
      errors.numberInStock = 'Number in stock must not be empty';
    }

    if (category.trim() === '') {
      errors.category = 'Category must not be empty';
    }

    if (tags.length < 1) {
      errors.tags = 'Please provide some tags';
    }

    return errors;
  }, [data, tags]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    console.log({ ...data, files, color, size, tags });
  },
    [
      color,
      data,
      files,
      size,
      tags,
      validateForm,
    ]
  );

  const labelClasses = useMemo(() => {
    return `formLabel ${mode ? 'dark' : 'light'}`;
  }, [mode]);

  return (
    <ClientOnly>
      <FormBox>
        <StyledBox>
          <Heading
            small
            title='>Create new product'
          />
          <Form onSubmit={handleSubmit}>
            <FormInput
              name='name'
              label='Product name'
              placeholder='Enter product name'
              onChange={handleChange}
              error={errors.name}
              autoFocus
            />
            <FormGroup>
              <FormLabel htmlFor='desc'>Description</FormLabel>
              <TextArea
                id='desc'
                name='desc'
                placeholder='Enter product description'
                onChange={handleChange}
              />
              {errors.desc && <FormError message={errors.desc} />}
            </FormGroup>
            <FormInput
              type='number'
              name='price'
              label='Price'
              placeholder='Enter product price'
              onChange={handleChange}
              error={errors.price}
            />
            <FormInput
              type='number'
              name='priceDiscount'
              label='Price discount'
              placeholder='Enter price discount'
              onChange={handleChange}
              error={errors.priceDiscount}
            />
            <FormInput
              type='number'
              name='numberInStock'
              label='Number in stock'
              placeholder='Enter number in stock'
              onChange={handleChange}
              error={errors.numberInStock}
            />
            <FormInput
              name='color'
              label='Color'
              placeholder='Separate the color with commas'
              onChange={handleColor}
            />
            <FormInput
              name='size'
              label='Size'
              placeholder='Separate the size with commas'
              onChange={handleSize}
            />
            <FormGroup>
              <FormLabel htmlFor='category'>Select category</FormLabel>
              <FormSelect id='category' name='category' onChange={handleChange}>
                <Option value=''>Select a category</Option>
                <Option value='jeans'>Jeans</Option>
                <Option value='electronics'>Electronics</Option>
                <Option value='gadgets'>Gadgets</Option>
                <Option value='shirts'>Shirts</Option>
                <Option value='snickers'>Snickers</Option>
              </FormSelect>
              {errors.category && <FormError message={errors.category} />}
            </FormGroup>
            <FormInput
              name='tags'
              label='Product tags'
              placeholder='Separate the tags with commas'
              onChange={handleTags}
              error={errors.tags}
            />
            <FormGroup>
              <label className={labelClasses}>Attach images</label>
              <input
                type='file'
                id='file'
                accept='image/*'
                onChange={(e) => setFiles(e.target.files)}
                multiple
              />
            </FormGroup>
            <FormButton label='Create' />
          </Form>
        </StyledBox>
      </FormBox>
    </ClientOnly>
  );
}

const Form = styled.form`
  margin: 2rem 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const FormLabel = styled.label`
  display: inline-block;
  font-weight: 600;
  font-size: 1.4rem;
  color:  ${({ theme }) => theme.textLabel};
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

const UploadProgress = styled.span`
  text-transform: capitalize;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
`;

export default NewProduct;
