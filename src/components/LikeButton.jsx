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

  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media only screen and (max-width: 64em) {
    align-items: self-end;
  }

  svg {
    font-size: 1.7rem;

    @media only screen and (max-width: 35em) {
      font-size: 1.6rem;
    }
  }
`;

export default LikeButton;
