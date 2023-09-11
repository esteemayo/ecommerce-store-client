import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';

import { addWishlist, removeWishlist } from '@/features/cart/cartSlice';

const useWishlist = ({ actionId, product, wished }) => {
  const dispatch = useDispatch();

  const isWished = useMemo(() => {
    let list = wished;
    list = list?.includes(actionId);
    return !!list;
  }, [actionId, wished]);

  const handleToggle = useCallback(() => {
    if (wished.includes(actionId)) {
      dispatch(removeWishlist(actionId));
      return;
    }

    dispatch(addWishlist({ ...product }));
  }, [actionId, dispatch, product, wished]);

  return {
    isWished,
    handleToggle,
  };
}

useWishlist.propTypes = {
  actionId: PropTypes.string,
  product: PropTypes.object,
  wished: PropTypes.array,
};

export default useWishlist;
