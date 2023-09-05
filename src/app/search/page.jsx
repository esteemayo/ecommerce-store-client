'use client';

import { useState } from 'react';

import ProductBox from '@/components/products/ProductBox';
import ClientOnly from '@/components/ClientOnly';
import ProductList from '@/components/products/ProductList';

import { storeProducts } from '@/data';
import EmptyProduct from '@/components/products/EmptyProduct';

const Search = () => {
  const [products, setProducts] = useState(storeProducts);

  let bodyContent;

  if (products.length < 1) {
    bodyContent = (
      <EmptyProduct
        src='/img/no-result.png'
        title='No results matches your search criteria'
      />
    );
  } else {
    bodyContent = <ProductList products={products} />;
  }

  return (
    <ClientOnly>
      <ProductBox>
        {bodyContent}
      </ProductBox>
    </ClientOnly>
  );
}

export default Search;
