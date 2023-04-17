'use client';
import styled from 'styled-components';

const Register = () => {
  return (
    <Container>
      <Wrapper>
        Register
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem;
`;

export default Register;
