import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faFillHeart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import WishIcon from '../icons/WishIcon';
import useWishlist from '@/hooks/useWishlist';

const WishlistButton = ({ actionId, product }) => {
  const { wishlists } = useSelector((state) => ({ ...state.cart }));
  const { isWished, handleToggle } = useWishlist(actionId, product, wishlists);

  return (
    <StyledButton onClick={handleToggle}>
      <WishIcon isWished={isWished} />
      Add to Wishlist
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  background-color: transparent;
  color: #858585;
  outline-color: #b8b6b6;
  outline-offset: 3px;
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media only screen and (max-width: 64em) {
    align-items: self-end;
  }

  @media only screen and (max-width: 35em) {
    font-size: 1.37rem;
  }

  &:hover {
    opacity: 0.75;
  }

  svg {
    font-size: 1.7rem;

    @media only screen and (max-width: 35em) {
      font-size: 1.6rem;
    }
  }
`;

WishlistButton.propTypes = {
  actionId: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired,
};

export default WishlistButton;
