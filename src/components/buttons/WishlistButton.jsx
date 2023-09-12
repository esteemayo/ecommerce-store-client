import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';

import WishIcon from '../icons/WishIcon';
import { IconButton } from './IconButton';

import useWishlist from '@/hooks/useWishlist';

const WishlistButton = ({ actionId, product, wished }) => {
  const { isWished, handleToggle } = useWishlist({
    actionId,
    product,
    wished,
  });

  const changeWishlistLabel = useCallback(() => {
    if (wished.includes(actionId)) {
      return 'Added to Wishlist';
    }

    return 'Add to Wishlist';
  }, [actionId, wished]);

  const wishlistLabel = useMemo(() => {
    changeWishlistLabel();
  }, [changeWishlistLabel]);

  return (
    <IconButton onClick={handleToggle}>
      <WishIcon isWished={isWished} />
      {wishlistLabel}
    </IconButton>
  );
}

WishlistButton.propTypes = {
  actionId: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  wished: PropTypes.array.isRequired,
};

export default WishlistButton;
