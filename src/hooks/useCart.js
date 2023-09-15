'use client';

import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';

import { addProduct } from '@/features/cart/cartSlice';

export const useCart = (product) => {
  const dispatch = useDispatch();

  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [isSelected, setIsSelected] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [alert, setAlert] = useState(false);

  const handleReset = useCallback(() => {
    setSize(null);
    setColor(null);
    setQuantity(1);
    setIsSelected(null);
    setSelectedSize(null);
  }, []);

  const handleClick = useCallback(() => {
    dispatch(addProduct({ ...product, size, color, quantity }));
    setAlert(true);
    handleReset();
  }, [color, product, quantity, size, handleReset, dispatch]);

  return {
    alert,
    setAlert,
    handleClick,
    selectedSize,
    isSelected,
    quantity,
    setQuantity,
    setSize,
    setSelectedSize,
    setIsSelected,
    setColor,
    handleReset,
  };
}
