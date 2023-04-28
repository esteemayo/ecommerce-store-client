'use client';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { products } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import ProductList from '@/components/ProductList';
import Pagination from '@/components/Pagination';
import ProductFilter from '@/components/ProductFilter';
import { useEffect, useState } from 'react';

const Products = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    category: 'all',
    size: '',
    color: '',
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    products: [],
    sortedProducts: [],
  });

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const { category, size, color, price, sortedProducts } = values;

  useEffect(() => {
    const tempProducts = [...products];
    const maxPrice = Math.max(...tempProducts.map((item) => item.price));
    setValues({ tempProducts, sortedProducts: tempProducts, price: maxPrice, maxPrice });
  }, []);

  useEffect(() => {
    let tempProducts = [...products];
    if (category !== 'all') {
      tempProducts = tempProducts.filter((item) => item.category === category);
    }

    if (color) {
      tempProducts = tempProducts.filter((item) =>
        Object.entries(color).every(([key, value]) => {
          item[key].includes(value)
        })
      );
    }

    if (size) {
      tempProducts = tempProducts.filter((item) =>
        Object.entries(size).every(([key, value]) => {
          item[key].includes(value)
        })
      );
    }

    if (price) {
      tempProducts = tempProducts.filter((item) => item.price <= price);
    }

    setValues({ sortedProducts: tempProducts });
  }, [category, color, size, price]);

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <ProductFilter
        {...values}
        products={products}
        handleChange={handleChange}
      />
      <ProductList products={sortedProducts} />
      <Pagination />
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
`;

export default Products;
