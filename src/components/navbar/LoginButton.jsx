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
`;

export default LoginButton;
