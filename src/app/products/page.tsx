'use client';

import dynamic from 'next/dynamic';
import { ChangeEventHandler, useCallback, useEffect, useState } from 'react';

import ProductBox from '@/components/products/ProductBox';
import Pagination from '@/components/Pagination';
import ProductFilter from '@/components/products/ProductFilter';

import { storeProducts } from '@/data';
import { StoreProduct } from '@/types';
import { getProducts } from '../../services/productService';

const ProductList = dynamic(() => import('@/components/products/ProductList'), {
  ssr: false,
});

const Products = () => {
  const [category, setCategory] = useState('all');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
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

  // const {
  //   category,
  //   size,
  //   color,
  //   minPrice,
  //   maxPrice,
  //   price,
  //   products,
  //   sortedProducts,
  // } = values;

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> =
    useCallback(({ target: input }) => {
      const { name, value } = input;
      setValues((prev) => ({ ...prev, [name]: value }));
    }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProducts();
        console.log(data);
        const maxPrice = Math.max(...data.products.map((item) => item.price));

        setProducts(data.products);
        setSortedProducts(data.products);
        setMaxPrice(maxPrice);
        setPrice(maxPrice);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    let tempProducts = [...products];
    if (category !== 'all') {
      tempProducts = tempProducts.filter((item) => item.category === category);
    }

    if (color) {
      tempProducts = tempProducts.filter((item) =>
        Object.entries(color).every(([key, value]) => {
          item[key].includes(value);
        })
      );
    }

    if (size) {
      tempProducts = tempProducts.filter((item) =>
        Object.entries(size).every(([key, value]) => {
          item[key].includes(value);
        })
      );
    }

    tempProducts = tempProducts.filter((item) => item.price <= price);

    setSortedProducts(tempProducts);
  }, [category, color, price, products, size]);

  return (
    <ProductBox>
      <ProductFilter
        products={products}
        price={price}
        category={category}
        size={size}
        color={color}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onChange={handleChange}
      />
      <ProductList products={sortedProducts} />
      {products.length > 0 && <Pagination />}
    </ProductBox>
  );
};

export default Products;
