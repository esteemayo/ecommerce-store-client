import styled from 'styled-components';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LikeButton = () => {
  return (
    <StyledButton>
      <FontAwesomeIcon icon={faStar} />
      Add to favorites
    </StyledButton>
  );
}

const StyledButton = styled.button`
  
`;

export default LikeButton;
