'use client';

import { useCallback, useState } from 'react';

import { useCartStore } from './useCartStore';

export const useCart = (product) => {
  const addProduct = useCartStore((state) => state.addProduct);
  const removeWishlist = useCartStore((state) => state.removeWishlist);

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
    addProduct({ ...product, size, color, quantity });
    removeWishlist(product.id);
    setAlert(true);
    handleReset();
  }, [addProduct, color, product, removeWishlist, quantity, size, handleReset]);

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
};
