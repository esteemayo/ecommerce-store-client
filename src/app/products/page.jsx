'use client';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { products } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import ProductList from '@/components/ProductList';
import Pagination from '@/components/Pagination';
import ProductFilter from '@/components/ProductFilter';
import { useState } from 'react';

const Products = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    category: 'all',
    size: '',
    color: '',
    minPrice: 0,
    maxPrice: 0,
  });
  const [sortedProducts, setSortedProducts] = useState([]);

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <ProductFilter products={products} {...values} />
      <ProductList products={products} />
      <Pagination />
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
`;

export default Products;
