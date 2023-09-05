'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import ClientOnly from '@/components/ClientOnly';
import ProductList from '@/components/products/ProductList';
import ProductBox from '@/components/products/ProductBox';

import { storeProducts } from '@/data';

const Search = () => {
  const [products, setProducts] = useState(storeProducts);

  return (
    <ClientOnly>
      <ProductBox>
        <ProductList products={products} />
      </ProductBox>
    </ClientOnly>
  );
}

export default Search;
