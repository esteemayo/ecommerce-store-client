'use client';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import ProductList from '@/components/products/ProductList';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

import { storeProducts } from '@/data';

const Search = () => {
  return (
    <div>
      Search
    </div>
  );
}

export default Search;
