'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ProductList from '@/components/products/ProductList';
import Pagination from '@/components/Pagination';
import ProductFilter from '@/components/products/ProductFilter';
import ClientOnly from '@/components/ClientOnly';

import { storeProducts } from '@/data';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

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

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

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
    <ClientOnly>
      <Container onMouseOver={() => dispatch(closeSubmenu())}>
        <Wrapper>
          <ProductFilter
            {...values}
            products={products}
            handleChange={handleChange}
          />
          <ProductList products={sortedProducts} />
          {products.length > 0 && <Pagination />}
        </Wrapper>
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export default Products;
