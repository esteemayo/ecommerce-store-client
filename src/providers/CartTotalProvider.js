'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { calcTotals } from '@/features/cart/cartSlice';

const CartTotalProvider = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => ({ ...state.cart }));

  return (
    <div>CartTotalProvider</div>
  );
}

export default CartTotalProvider;
