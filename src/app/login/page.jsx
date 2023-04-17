'use client';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Log in with</Header>
        <GoogleContainer>
          <GoogleButton>
            Google
          </GoogleButton>
        </GoogleContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  border-radius: 1rem;
`;

const Header = styled.h1`
  display: block;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  color: #979797;
`;

const GoogleContainer = styled.div`
  
`;

const GoogleButton = styled.button`
  
`;

export default Login;
