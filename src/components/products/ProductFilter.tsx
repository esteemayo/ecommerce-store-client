'use client';

import styled from 'styled-components';
import { FC } from 'react';

import Heading from '../filters/Heading';
import Option from '../filters/Option';
import RangeInput from '../filters/RangeInput';
import Select from '../filters/Select';

import { getUnique } from '@/utils';
import { ProductFilterProps } from '@/types';

const ProductFilter: FC<ProductFilterProps> = ({
  products,
  price,
  category,
  size,
  color,
  minPrice,
  maxPrice,
  onChange,
}) => {
  let colors = getUnique(products, 'color');
  colors = colors.map((color, index) => {
    return <Option key={index} value={color} />;
  });

  let categories = ['all', ...getUnique(products, 'category')];
  categories = categories.map((category, index) => {
    return <Option key={index} value={category} />;
  });

  let sizes = getUnique(products, 'size');
  sizes = sizes.map((size, index) => {
    return (
      <Option key={index} value={size}>
        {size}
      </Option>
    );
  });

  return (
    <Container>
      <Heading title='Filter by' />
      <Wrapper>
        <Select
          name='color'
          label='Color'
          type='product'
          value={color}
          options={colors}
          onChange={onChange}
        />
        <Select
          name='category'
          label='Category'
          type='product'
          value={category}
          options={categories}
          onChange={onChange}
        />
        <Select
          name='size'
          label='Product size'
          type='product'
          value={size}
          options={sizes}
          onChange={onChange}
        />
        <RangeInput
          name='price'
          label='Product price'
          price={price}
          value={price}
          min={minPrice}
          max={maxPrice}
          onChange={onChange}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 7rem 0;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 7rem;

  @media only screen and (max-width: 59.375em) {
    gap: 4rem;
  }

  @media only screen and (max-width: 37.5em) {
    gap: 2rem;
  }

  @media only screen and (max-width: 31.25em) {
    gap: 1.5rem;
  }

  @media only screen and (max-width: 26.25em) {
    gap: 3rem;
  }

  @media only screen and (max-width: 18.75em) {
    gap: 1rem;
  }
`;

export default ProductFilter;
