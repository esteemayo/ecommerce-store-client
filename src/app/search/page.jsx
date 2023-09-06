'use client';

import styled from 'styled-components';
import { useState } from 'react';

import ProductBox from '@/components/products/ProductBox';
import EmptyProduct from '@/components/products/EmptyProduct';
import ProductList from '@/components/products/ProductList';

import ClientOnly from '@/components/ClientOnly';

import { storeProducts } from '@/data';

const Search = () => {
  const [products, setProducts] = useState([]);

  let bodyContent;

  if (products.length < 1) {
    bodyContent = (
      <Container>
        <EmptyProduct
          src='/img/no-result.png'
          title='No result matches your search criteria'
        />
      </Container>
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

const Container = styled.div`
  padding: 10rem 0;
`;

export default Search;
