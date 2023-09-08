import styled from 'styled-components';
import PropTypes, { css } from 'prop-types';

const Button = ({ text }) => {
  return <StyledButton type='submit'>{text}</StyledButton>;
}

const StyledButton = styled.button`
  display: inline-block;
  border: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.4rem;
  width: 50%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgBtn};
  color: ${({ theme }) => theme.textModalDelBtn};
  background-image: ${({ theme }) => css`
    linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      ${theme.bgImgBtn} 50%
    );
  `};
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.btnOut};
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.398rem;
  }

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    opacity: 0.85;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
