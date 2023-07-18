'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { calcTotals } from '@/features/cart/cartSlice';

const CartTotalProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => ({ ...state.cart }));

  useEffect(() => {
    dispatch(calcTotals());
  }, [cart, dispatch]);

  return <>{children}</>;
}

export default CartTotalProvider;
