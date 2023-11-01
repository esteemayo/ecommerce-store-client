import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useMemo } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { CardButtonProps } from '@/types';

const CardButton: FC<CardButtonProps> = ({ inCart, onClick }) => {
  const btnLabel = useMemo(() => {
    return `${inCart ? 'added' : 'add'} to cart`;
  }, [inCart]);

  return (
    <Button type='button' disabled={inCart} onClick={onClick}>
      <FontAwesomeIcon icon={faShoppingCart} />
      &nbsp; {btnLabel}
    </Button>
  );
};

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

  &:disabled {
    opacity: 0.75;
    cursor: default;
  }

  &:disabled:hover {
    background-position: 0%;
  }
`;

export default CardButton;
