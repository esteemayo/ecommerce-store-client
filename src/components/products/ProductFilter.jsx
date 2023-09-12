'use client';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getUnique } from '@/utils';
import FormatPrice from '../FormatPrice';

const ProductFilter = ({
  newPrice,
  products,
  price,
  category,
  size,
  color,
  minPrice,
  maxPrice,
  onChange,
}) => {
  console.log(typeof newPrice)
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
      <FilterHeading>Filter by</FilterHeading>
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
        <Filter>
          <Label htmlFor='price'>
            Product price {' '}
            <FormatPrice value={price} />
          </Label>
          <Input
            id='price'
            name='price'
            type='range'
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={onChange}
          />
        </Filter>
      </FilterWrapper>
    </Container>
  );
}

const Container = styled.section`
  padding: 7rem 0;
  width: 100%;
`;

const FilterHeading = styled.h1`
  display: inline-block;
  font-weight: 600;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
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

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textFilterLabel};
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
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

const Input = styled.input`
  display: inline-block;
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

ProductFilter.propTypes = {
  products: PropTypes.array,
  price: PropTypes.any,
  category: PropTypes.string,
  size: PropTypes.any,
  color: PropTypes.string,
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  onChange: PropTypes.func,
};

export default ProductFilter;
