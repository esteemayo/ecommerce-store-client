'use client';
import Link from 'next/link';
import styled from 'styled-components';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <Header>Register your account</Header>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <FormInput
              type='text'
              id='name'
              name='name'
              placeholder='Enter your name'
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput
              type='email'
              id='email'
              name='email'
              placeholder='Enter email address'
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <FormInput
              type='text'
              id='username'
              name='username'
              placeholder='Enter username'
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
            <FormInput
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm your password'
            />
          </FormGroup>
          <FormGroup type='file'>
            <FormUpload type='file' id='file' />
            <FormLabel htmlFor='file'>Attach a photo</FormLabel>
          </FormGroup>
          <FormButton type='submit'>Register</FormButton>
        </Form>
      </Wrapper>
      <LoginContainer>
        <LoginText>
          Already have an account? {' '}
          <Link href='/login' passHref>Sign in</Link>
        </LoginText>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 150vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
`;

const Header = styled.h1`
  display: block;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  color: #979797;
`;

const Form = styled.form`
  margin: 2rem 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ type }) => type === 'file' && 'start'};
  justify-content: ${({ type }) => type === 'file' && 'center'};

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const FormLabel = styled.label`
  display: inline-block;
  font-weight: 600;
  font-size: 1.4rem;
  color: #888;
`;

const FormInput = styled.input`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.4rem;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: #f9f9f9;
  color: #999;
  border-radius: 0.5rem;
  outline-color: #eee;
  caret-color: var(--caret-light);

  &::-webkit-input-placeholder {
    font-weight: 300;
    font-size: 1.5rem;
    color: #bbb;
  }
`;

const FormUpload = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + ${FormLabel} {
    outline: 3px solid var(--clr-secondary-blue);
    outline-offset: 3px;
  }

  & + ${FormLabel} {
    color: var(--clr-secondary-blue);
    display: inline-block;
    text-decoration: none;
    padding: 3px;
    border-bottom: 1px solid var(--clr-secondary-blue);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: var(--clr-secondary-blue);
      color: var(--clr-white);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
`;

const FormButton = styled.button`
  margin-top: 2rem;
  border: none;
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  width: 100%;
  padding: 1.5rem;
  background-color: var(--clr-secondary-blue);
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #5885b9 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #4489fe;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    font-weight: 600;
    background-position: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const LoginContainer = styled.div`
  margin-top: 3rem;
`;

const LoginText = styled.p`
  font-size: 1.7rem;
  color: #888;

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      color: var(--clr-secondary-blue);
      outline-color: #ddd;
      transition: all 0.3s ease;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Register;
