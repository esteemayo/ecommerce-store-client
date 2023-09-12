import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CardButton = ({ onClick }) => {
  return (
    <Button type='button' onClick={onClick}>
      <FontAwesomeIcon icon={faShoppingCart} />
      &nbsp;
      add to cart
    </Button>
  );
}

const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.bgBtn};
  color: ${({ theme }) => theme.textBtn};
  background-image: ${({ theme }) => css`
    linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      ${theme.bgImgBtn} 50%
    );
  `};
  background-size: 220%;
  outline-color: ${({ theme }) => theme.btnOut};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 64em) {
    padding: 1.3rem 1rem;
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.498rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1.4rem;
  }

  &:hover {
    background-position: 100%;
  }
`;

CardButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CardButton;
