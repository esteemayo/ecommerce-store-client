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
  font-weight: 500;
  font-size: 1.4rem;
  background-color: transparent;
  color: #858585;
  outline-color: #b8b6b6;
  outline-offset: 3px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media only screen and (max-width: 64em) {
    align-items: self-end;
  }

  @media only screen and (max-width: 35em) {
    font-size: 1.37rem;
  }

  svg {
    font-size: 1.7rem;

    @media only screen and (max-width: 35em) {
      font-size: 1.6rem;
    }
  }
`;

export default WishlistButton;
