'use client';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Log in with</Header>
        <GoogleContainer>
          <GoogleButton>
            <GoogleIcon />
            &nbsp;
            Google
          </GoogleButton>
          <FacebookButton>
            <FacebookIcon />
            &nbsp;
            Facebook
          </FacebookButton>
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const GoogleButton = styled.button`
  border: none;
  padding: 1.25rem 2.5rem;
  font-weight: 500;
  font-size: 1.5rem;
  background-color: #908f91;
  color: var(--clr-white);
  border-radius: 3px;
  cursor: pointer;

  display: flex;
  align-items: center;

  svg {
    font-size: 3rem;
  }
`;

const FacebookButton = styled.button`
  border: none;
  padding: 1.25rem 2.5rem;
  font-weight: 500;
  font-size: 1.5rem;
  background-color: #908f91;
  color: var(--clr-white);
  border-radius: 3px;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

export default Login;
