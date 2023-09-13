'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import Heading from '../filters/Heading';
import RangeInput from '../filters/RangeInput';

import { Label } from '../filters/Label';
import { Filter } from '../filters/Filter';

import { getUnique } from '@/utils';

const ProductFilter = ({
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
    return (
      <Option key={index} value={color}>
        {color}
      </Option>
    );
  });

  let categories = ['all', ...getUnique(products, 'category')];
  categories = categories.map((category, index) => {
    return (
      <Option key={index} value={category}>
        {category}
      </Option>
    );
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
      <FilterWrapper>
        <Filter>
          <Label htmlFor='color'>Color</Label>
          <Select
            id='color'
            name='color'
            value={color}
            onChange={onChange}
          >
            {colors}
          </Select>
        </Filter>
        <Filter>
          <Label htmlFor='category'>Category</Label>
          <Select
            id='category'
            name='category'
            value={category}
            onChange={onChange}
          >
            {categories}
          </Select>
        </Filter>
        <Filter>
          <Label htmlFor='size'>Product size</Label>
          <Select
            id='size'
            name='size'
            value={size}
            onChange={onChange}
          >
            {sizes}
          </Select>
        </Filter>
        <RangeInput
          name='price'
          label='Product price'
          price={price}
          value={price}
          min={minPrice}
          max={maxPrice}
          onChange={onChange}
        />
      </FilterWrapper>
    </Container>
  );
}

const Container = styled.section`
  padding: 7rem 0;
  width: 100%;
`;

const FilterWrapper = styled.div`
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

const Select = styled.select`
  display: inline-block;
  text-transform: capitalize;
  width: 20rem;
  padding: 3px;
  font-family: inherit;
  font-size: 1.4rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textFilterSelect};
  border: 1px solid #ddd;
  border-radius: 3px;
  outline-color: ${({ theme }) => theme.filterOut};

  @media only screen and (max-width: 37.5em) {
    width: 26rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 40rem;
  }

  @media only screen and (max-width: 25em) {
    width: 39rem;
  }

  @media only screen and (max-width: 21.875em) {
    width: 37rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 31rem;
  }
`;

const Option = styled.option`
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.bgProdCard};
  color: inherit;
`;

ProductFilter.propTypes = {
  products: PropTypes.array,
  price: PropTypes.number,
  category: PropTypes.string,
  size: PropTypes.any,
  color: PropTypes.string,
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  onChange: PropTypes.func,
};

export default ProductFilter;
