'use client';

import styled from 'styled-components';
import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import FormButton from '@/components/form/FormButton';
import FormBox from '@/components/form/FormBox';
import { StyledBox } from '@/components/form/StyledBox';
import Heading from '@/components/form/Heading';
import FormInput from '@/components/form/FormInput';
import Select from '@/components/form/Select';
import TextArea from '@/components/form/TextArea';
import Form from '@/components/form/Form';

import ClientOnly from '@/components/ClientOnly';

import { selectInputs } from '@/formData';
import { FormGroup } from '@mui/material';

const initialState = {
  name: '',
  desc: '',
  price: '',
  priceDiscount: '',
  numberInStock: '',
  category: '',
};

const NewProduct = () => {
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
            title='Create new product'
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
            <TextArea
              name='desc'
              label='Description'
              placeholder='Enter product description'
              onChange={handleChange}
              error={errors.desc}
            />
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
            <Select
              name='category'
              label='Select category'
              defaultText='Select a category'
              onChange={handleChange}
              data={selectInputs}
              error={errors.category}
            />
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

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;

//   &:not(:last-of-type) {
//     margin-bottom: 2rem;
//   }
// `;

export default NewProduct;
