import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { IconButton } from './IconButton';
import HeartIcon from '../icons/HeartIcon';

import useWishlist from '@/hooks/useWishlist';

const WishlistButton = ({ actionId, product, wished }) => {
  const { isWished, handleToggle } = useWishlist({
    actionId,
    product,
    wished,
  });

  const wishlistLabel = useMemo(() => {
    if (wished.includes(actionId)) {
      return 'Added to Wishlist';
    }

    return 'Add to Wishlist';
  }, [actionId, wished]);

  return (
    <IconButton onClick={handleToggle}>
      <HeartIcon isWished={isWished} />
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
