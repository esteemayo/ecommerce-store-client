import { useMemo } from 'react';
import PropTypes from 'prop-types';

import WishIcon from '../icons/WishIcon';
import useWishlist from '@/hooks/useWishlist';
import { IconButton } from './IconButton';

const WishlistButton = ({ actionId, product, wished }) => {
  const { isWished, handleToggle } = useWishlist({
    actionId,
    product,
    wished,
  });

  const wishlistLabel = useMemo(() => {
    if (wished.includes(actionId)) {
      return 'Added to wishlists';
    }

    return 'Add to Wishlist';
  }, [actionId, wished]);

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
