'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import Heading from '@/components/filters/Heading';
import Option from '@/components/filters/Option';
import SelectColor from '@/components/filters/SelectColor';
import Select from '@/components/filters/Select';

import ClientOnly from '@/components/ClientOnly';
import ProductBox from '@/components/products/ProductBox';

import { getUnique } from '@/utils';
import { priceOptions, storeProducts } from '@/data';

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
        <Container>
          <Heading title='Filter by' />
          <Wrapper>
            <FilterLeft>
              <Select
                name='color'
                label='Color'
                options={colors}
                onChange={handleFilter}
              />
              <Select
                name='size'
                label='Product size'
                options={sizes}
                onChange={handleFilter}
              />
            </FilterLeft>
            <FilterRight>
              <SelectColor
                name='price'
                label='Product price'
                options={priceOptions}
                onChange={(e) => setSort(e.target.value)}
              />
            </FilterRight>
          </Wrapper>
        </Container>
        {category ? (
          <ProductList products={sortedProducts} />
        ) : (
          <ProductList products={products} />
        )}
      </ProductBox>
    </ClientOnly>
  );
}

const Container = styled.section`
  padding: 7rem 0;
  width: 100%;
`;

const Wrapper = styled.div`
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

export default ProductCategory;
