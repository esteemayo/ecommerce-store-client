import { useDispatch } from 'react-redux';
import { useCallback, useMemo } from 'react';

export const useWishlist = ({ actionId, products }) => {
  const dispatch = useDispatch();

  const isWished = useMemo(() => {
    const wished = products.includes(actionId)
    return !!wished;
  }, [actionId, products]);

  return (
    <div>useWishlist</div>
  );
}
