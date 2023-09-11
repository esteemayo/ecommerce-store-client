import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';

import { addWishlist } from '@/features/cart/cartSlice';

const useWishlist = ({ actionId, product, wished }) => {
  const dispatch = useDispatch();

  const isWished = useMemo(() => {
    let list = wished;
    list = list?.includes(actionId);
    return !!list;
  }, [actionId, wished]);

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
  wished: PropTypes.array,
};

export default useWishlist;
