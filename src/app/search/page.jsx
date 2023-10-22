'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import ClientOnly from '@/components/ClientOnly';
import ProductBox from '@/components/products/ProductBox';

import { storeProducts } from '@/data/data';

const ProductList = dynamic(() => import('@/components/products/ProductList'), { ssr: false });

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
