import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';

import { addWishlist } from '@/features/cart/cartSlice';

const useWishlist = ({ actionId, product, wishlists }) => {
  const dispatch = useDispatch();

  const isWished = useMemo(() => {
    const list = wishlists;
    const wished = list.includes(actionId)
    return !!wished;
  }, [actionId, wishlists]);

  const handleToggle = useCallback(() => {
    dispatch(addWishlist({ ...product }));
  }, [dispatch, product]);

  return {
    isWished,
    handleToggle,
  };
}

useWishlist.propTypes = {
  actionId: PropTypes.string,
  product: PropTypes.object,
  wishlists: PropTypes.array,
};

export default useWishlist;
