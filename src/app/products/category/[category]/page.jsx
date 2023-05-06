'use client';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { storeProducts } from '@/data';
import ProductList from '@/components/ProductList';
import { getUnique } from '@/utils';

const ProductCategory = ({ params }) => {
  const { category } = params;

  const [sort, setSort] = useState('newest');
  const [filters, setFilters] = useState({});
  const [products, setProducts] = useState(storeProducts);
  const [sortedProducts, setSortedProducts] = useState([]);

  const handleFilter = ({ target: input }) => {
    const { name, value } = input;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  let colors = getUnique(products, 'color');
  colors = colors.map((color, index) => {
    return (
      <Option key={index} value={color}>
        {color}
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

  useEffect(() => {
    setSortedProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        ))
    );
  }, [filters, products]);

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

  return (
    <Container>
      <FilterContainer>
        <FilterHeading>Filter by</FilterHeading>
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
      <ProductWrapper>
        {sortedProducts ? (
          <ProductList products={sortedProducts} />
        ) : (
          <ProductList products={products} />
        )}
      </ProductWrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  max-width: 120rem;
  margin: 0 auto;
`;

const FilterContainer = styled.section`
  padding: 7rem 3rem;
  width: 100%;
`;

const FilterHeading = styled.h1`
  display: inline-block;
  font-weight: 600;
  font-size: 2.25rem;
  margin-bottom: 1rem;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const FilterRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
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
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  display: inline-block;
  text-transform: capitalize;
  width: 20rem;
  padding: 3px;
  font-size: 1.4rem;
  background-color: transparent;
  color: #999;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline-color: #eee;
`;

const Option = styled.option`
  text-transform: capitalize;
  background-color: var(--clr-white);
  color: inherit;
`;

const ProductWrapper = styled.div`
  width: 100%;
  padding: 8rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 4rem;
  column-gap: 1rem;
`;

export default ProductCategory;
