'use client';

import styled from 'styled-components';

const LoginButton = () => {
  return (
    <>
      <Button type='button'>Sign in</Button>
    </>
  );
}

const Button = styled.button`
  border: none;
  display: inline-block;
  font-weight: 600;
  font-size: 1.5rem;
`;

export default LoginButton;
