'use client';
import styled from 'styled-components';

import Loader from "@/components/Loader";

const Login = () => {
  return (
    <Container>
      <Loader size='md' />
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

export default Login;
