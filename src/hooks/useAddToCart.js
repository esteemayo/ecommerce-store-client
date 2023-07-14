'use client';

import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';

const useAddToCart = () => {
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

  return (
    <div>useAddToCart</div>
  );
}

export default useAddToCart;
