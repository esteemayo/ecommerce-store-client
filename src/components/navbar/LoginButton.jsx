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
`;

export default LoginButton;
