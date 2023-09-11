import { useDispatch } from 'react-redux';
import { useCallback, useMemo } from 'react';

import { addWishlist } from '@/features/cart/cartSlice';

export const useWishlist = ({ actionId, products }) => {
  const dispatch = useDispatch();

  const isWished = useMemo(() => {
    const wished = products.includes(actionId)
    return !!wished;
  }, [actionId, products]);

  const handleToggle = useCallback(() => {
    dispatch(addWishlist({ ...product }));
  }, [dispatch]);

  return (
    <div>useWishlist</div>
  );
}
