'use client';

import { useState } from 'react';

import ProductBox from '@/components/products/ProductBox';
import ClientOnly from '@/components/ClientOnly';
import ProductList from '@/components/products/ProductList';

import { storeProducts } from '@/data';

const Search = () => {
  const [products, setProducts] = useState(storeProducts);

  return (
    <ClientOnly>
      <ProductBox>
        <ProductList
          products={products}
          title='No result matches your search criteria'
        />
      </ProductBox>
    </ClientOnly>
  );
}

export default Search;
