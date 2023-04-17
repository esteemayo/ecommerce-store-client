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
        <Text>or</Text>
        <Form>
          <FormGroup>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <FormInput
              type='text'
              id='username'
              placeholder='Enter username'
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput
              type='text'
              id='password'
              placeholder='Enter your password'
            />
          </FormGroup>
          <FormButton type='submit'>Log in</FormButton>
        </Form>
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
  gap: 1.5rem;
  margin: 2rem 0;
`;

const GoogleButton = styled.button`
  padding: 1rem 3rem;
  font-weight: 400;
  font-size: 1.5rem;
  background-color: transparent;
  color: inherit;
  border: 1px solid #999;
  border-radius: 3px;
  outline-color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  svg {
    font-size: 2.5rem;
    color: #e60023;
  }
`;

const FacebookButton = styled.button`
  padding: 1rem 3rem;
  font-weight: 400;
  font-size: 1.5rem;
  background-color: transparent;
  color: inherit;
  border: 1px solid #999;
  border-radius: 3px;
  outline-color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  display: flex;
  align-items: center;

  svg {
    font-size: 2.5rem;
    color: #3b5999;
  }
`;

const Text = styled.p`
  display: block;
  text-align: center;
  text-transform: lowercase;
`;

const Form = styled.form`
  margin: 2rem 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const FormLabel = styled.label`
  
`;

const FormInput = styled.input`
  
`;

const FormButton = styled.button`

`;

export default Login;
