import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const LikeButton = () => {
  return (
    <StyledButton>
      <FontAwesomeIcon icon={faStar} />
      Add to favorites
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  font-weight: 500;
  font-size: 1.4rem;
  background-color: transparent;
  color: #858585;
  outline-color: #b8b6b6;
  outline-offset: 3px;
  cursor: pointer;
`;

export default LikeButton;
