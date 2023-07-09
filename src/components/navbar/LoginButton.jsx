'use client';

import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LoginButton = ({ isHover, onMouse }) => {
  return (
    <>
      <Button
        type='button'
        onMouseOver={() => onMouse(true)}
        onMouseLeave={() => onMouse(false)}
      >
        <Link href='/login' passHref>
          Sign in
          &nbsp;
          {isHover ? <ArrowForwardIcon /> : <ArrowForwardIosIcon />}
        </Link>
      </Button>
    </>
  );
}

const Button = styled.button`
  border: none;
  display: inline-block;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0.75rem 2rem;
  background-color: var(--clr-primary-green);
  color: var(--clr-white);
  border-radius: 10rem;
  outline-color: var(--clr-primary-green);
  cursor: pointer;
  transition: all 0.2s ease;

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      color: currentColor;
      outline-color: var(--clr-primary-green);
      position: relative;
    }

    svg {
      position: absolute;
      top: 3px;
      right: -1rem;
      font-size: 1.25rem;
      fill: currentColor;
      transition: 150ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }
  }

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.4);
    opacity: 1;
  }
`;

export default LoginButton;
