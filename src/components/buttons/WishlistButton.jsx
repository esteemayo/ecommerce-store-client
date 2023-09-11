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

  return (
    <IconButton onClick={handleToggle}>
      <WishIcon isWished={isWished} />
      Add to Wishlist
    </IconButton>
  );
}

WishlistButton.propTypes = {
  actionId: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  wished: PropTypes.array.isRequired,
};

export default WishlistButton;
