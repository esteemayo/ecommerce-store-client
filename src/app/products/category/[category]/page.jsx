'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import ClientOnly from '@/components/ClientOnly';
import ProductBox from '@/components/products/ProductBox';
import Heading from '@/components/filters/Heading';
import Option from '@/components/filters/Option';
import { Label } from '@/components/filters/Label';
import { Filter } from '@/components/filters/Filter';

import { getUnique } from '@/utils';
import { storeProducts } from '@/data';

const ProductList = dynamic(() => import('@/components/products/ProductList'), { ssr: false });

const ProductCategory = ({ params }) => {
  const { category } = params;

  const [sort, setSort] = useState('newest');
  const [products, setProducts] = useState(storeProducts);
  const [filters, setFilters] = useState({});
  const [sortedProducts, setSortedProducts] = useState([]);

  const handleFilter = useCallback(({ target: input }) => {
    const { name, value } = input;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }, []);

  useEffect(() => {
    category && setSortedProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        ))
    );
  }, [category, filters, products]);

  useEffect(() => {
    if (sort === 'newest') {
      setSortedProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }

    if (sort === 'asc') {
      setSortedProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }

    if (sort === 'desc') {
      setSortedProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  let colors = getUnique(products, 'color');
  colors = colors.map((color, index) => {
    return (
      <Option
        key={index}
        value={color}
      />
    );
  });

  let sizes = getUnique(products, 'size');
  sizes = sizes.map((size, index) => {
    return (
      <Option
        key={index}
        value={size}
      />
    );
  });

  return (
    <ClientOnly>
      <ProductBox>
        <FilterContainer>
          <Heading title='Filter by' />
          <FilterWrapper>
            <FilterLeft>
              <Filter>
                <Label htmlFor='color'>Color</Label>
                <Select id='color' name='color' onChange={handleFilter}>
                  {colors}
                </Select>
              </Filter>
              <Filter>
                <Label htmlFor='size'>Product size</Label>
                <Select id='size' name='size' onChange={handleFilter}>
                  {sizes}
                </Select>
              </Filter>
            </FilterLeft>
            <FilterRight>
              <Filter>
                <Label htmlFor='price'>Product price</Label>
                <Select id='price' name='price' onChange={(e) => setSort(e.target.value)}>
                  <Option value='newest'>Newest</Option>
                  <Option value='asc'>Price (asc)</Option>
                  <Option value='desc'>Price (desc)</Option>
                </Select>
              </Filter>
            </FilterRight>
          </FilterWrapper>
        </FilterContainer>
        {category ? (
          <ProductList products={sortedProducts} />
        ) : (
          <ProductList products={products} />
        )}
      </ProductBox>
    </ClientOnly>
  );
}

const FilterContainer = styled.section`
  padding: 7rem 0;
  width: 100%;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }
`;

const FilterLeft = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 7rem;

  @media only screen and (max-width: 59.375em) {
    gap: 4rem;
  }

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    align-items: center;
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

const FilterRight = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media only screen and (max-width: 37.5em) {
    margin-top: 2rem;
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
    width: 60rem;
    padding: 0.7rem;
  }

  @media only screen and (max-width: 35em) {
    width: 54rem;
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

// const Option = styled.option`
//   text-transform: capitalize;
//   background-color: ${({ theme }) => theme.bgProdCard};
//   color: inherit;
// `;

export default ProductCategory;
