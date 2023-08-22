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
  
`;

export default LikeButton;
