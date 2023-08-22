import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const WishlistButton = () => {
  return (
    <StyledButton>
      <FontAwesomeIcon icon={faHeart} />
      Add to Wishlist
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  display: inline-block;
`;

export default WishlistButton;
