'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CartTotalProvider = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => ({ ...state.cart }));

  return (
    <div>CartTotalProvider</div>
  );
}

export default CartTotalProvider;
