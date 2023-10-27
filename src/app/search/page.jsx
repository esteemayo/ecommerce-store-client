'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import { storeProducts } from '@/data';
import ProductBox from '@/components/products/ProductBox';

const ProductList = dynamic(() => import('@/components/products/ProductList'), {
  ssr: false,
});

const Search = () => {
  const [products, setProducts] = useState(storeProducts);

  return (
    <ProductBox>
      <ProductList
        products={products}
        title='No result matches your search criteria'
      />
    </ProductBox>
  );
};

export default Search;
