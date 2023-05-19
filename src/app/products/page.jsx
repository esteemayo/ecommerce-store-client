'use client';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { storeProducts } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';
import ProductList from '@/components/ProductList';
import ProductFilter from '@/components/ProductFilter';
import Pagination from '@/components/Pagination';

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

  const { category, size, color, price, products, sortedProducts } = values;

  useEffect(() => {
    let tempProducts = [];
    storeProducts.map((item) => {
      tempProducts.push(item);
    });
    const maxPrice = Math.max(...tempProducts.map((item) => item.price));
    setValues({ products: tempProducts, sortedProducts: tempProducts, price: maxPrice, maxPrice });
  }, []);

  // useEffect(() => {
  //   let tempProducts = [...products];
  //   if (category !== 'all') {
  //     tempProducts = tempProducts.filter((item) => item.category === category);
  //   }

  //   if (color) {
  //     tempProducts = tempProducts.filter((item) =>
  //       Object.entries(color).every(([key, value]) => {
  //         item[key].includes(value)
  //       })
  //     );
  //   }

  //   if (size) {
  //     tempProducts = tempProducts.filter((item) =>
  //       Object.entries(size).every(([key, value]) => {
  //         item[key].includes(value)
  //       })
  //     );
  //   }

  //   tempProducts = tempProducts.filter((item) => item.price <= price);

  //   setValues({ sortedProducts: tempProducts });
  // }, [products, category, color, size, price]);

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
  max-width: 120rem;
  margin: 0 auto;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
  }

  @media only screen and (max-width: 43.75em) {
    max-width: 75rem;
  }
`;

export default Products;
