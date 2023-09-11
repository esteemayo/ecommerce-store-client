import { useMemo } from 'react';
import PropTypes from 'prop-types';

import WishIcon from '../icons/WishIcon';
import { IconButton } from './IconButton';

import useWishlist from '@/hooks/useWishlist';

const WishlistButton = ({ productId, product, wished }) => {
  const { isWished, handleToggle } = useWishlist({
    productId,
    product,
    wished,
  });

  const wishlistLabel = useMemo(() => {
    if (wished.includes(productId)) {
      return 'Added to wishlists';
    }

    return 'Add to Wishlist';
  }, [productId, wished]);

  return (
    <IconButton onClick={handleToggle}>
      <WishIcon isWished={isWished} />
      {wishlistLabel}
    </IconButton>
  );
}

WishlistButton.propTypes = {
  productId: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  wished: PropTypes.array.isRequired,
};

export default WishlistButton;
