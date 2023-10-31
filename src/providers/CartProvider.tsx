'use client';

import { FC, useEffect } from 'react';

import { CartProviderProps } from '@/types';
import { useCartStore } from '@/hooks/useCartStore';

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const cart = useCartStore((state) => state.cart);
  const calcTotals = useCartStore((state) => state.calcTotals);

  useEffect(() => {
    calcTotals();
  }, [cart, calcTotals]);

  return <>{children}</>;
};

export default CartProvider;
