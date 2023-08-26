'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import ClientOnly from '@/components/ClientOnly';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

import {
  getFromStorage,
  rememberKey,
  setToStorage,
  userKey,
} from '@/utils';

const initialState = {
  username: '',
  password: '',
  rememberMe: false,
};

const Login = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => ({ ...state.darkMode }));

  const usernameRef = useRef();
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState(initialState);

  const { username, password } = inputs;

  const handleChange = useCallback(({ target: input }) => {
    const name = input.name;
    const value = input.checked ?? input.value;

    setInputs((prev) => ({ ...prev, [name]: value }));
  }, []);

  const validateForm = useCallback(() => {
    const tempErrors = {};
    const { username, password } = inputs;

    if (username.trim() === '') {
      tempErrors.username = 'Username must not be empty';
    }

    if (password.trim() === '') {
      tempErrors.password = 'Password must not be empty';
    } else if (password.length < 8) {
      tempErrors.password = 'Password should be at least 8 characters long';
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return true;
    }
    return false;
  }, [password, username]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (validateForm()) return;
    setErrors({});

    const userData = {
      username,
      password,
    };

    console.log(userData);

    const remember = setToStorage(rememberKey, rememberMe);
    const key = remember ? userKey : '';
    setToStorage(key, userData);
  }, [password, username, validateForm]);

  const checkmarkClasses = useMemo(() => {
    if (mode) {
      return `checkmark dark`;
    }

    return `checkmark light`;
  }, [mode]);

  useEffect(() => {
    // usernameRef.current.focus();
  }, []);

  return (
    <ClientOnly>
      <Container onMouseOver={() => dispatch(closeSubmenu())}>
        <LoginContainer>
          <Wrapper>
            <Header>Log in with</Header>
            <GoogleContainer>
              <GoogleButton type='button'>
                <Image
                  src='/img/google-logo.png'
                  width={23}
                  height={23}
                  alt=''
                />
                Google
              </GoogleButton>
              <FacebookButton type='button'>
                <FaFacebookF />
                Facebook
              </FacebookButton>
            </GoogleContainer>
            <Text>or</Text>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <FormInput
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Enter username'
                  ref={usernameRef}
                  onChange={handleChange}
                />
                {errors.username && <ErrorMsg>{errors.username}</ErrorMsg>}
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <FormInput
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Enter your password'
                  onChange={handleChange}
                />
                {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
              </FormGroup>
              <CheckBoxWrapper className='checkContainer'>
                <CheckBox
                  type='checkbox'
                  id='rememberMe'
                  name='rememberMe'
                  onChange={handleChange}
                  className='checkbox'
                />
                <CheckMark className={checkmarkClasses} />
                <CheckBoxLabel htmlFor='rememberMe'>Remember me</CheckBoxLabel>
              </CheckBoxWrapper>
              <FormButton type='submit'>Log in</FormButton>
              <ForgotPassword>
                <Link href='/forgot' passHref>
                  Forgot your password?
                </Link>
              </ForgotPassword>
            </Form>
          </Wrapper>
          <RegisterContainer>
            <RegisterText>
              Don&apos;t have an account? {' '}
              <Link href='/register' passHref>Sign up</Link>
            </RegisterText>
          </RegisterContainer>
        </LoginContainer>
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const LoginContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
    padding: 8rem 0;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (max-width: 23.75em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxForm};
  -webkit-box-shadow: ${({ theme }) => theme.boxForm};
  -moz-box-shadow: ${({ theme }) => theme.boxForm};

  @media only screen and (max-width: 21.25em) {
    width: 35rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 32rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Header = styled.h1`
  display: block;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.textFormHeader};
`;

const GoogleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;
  margin: 2rem 0;

  @media only screen and (max-width: 64em) {
    margin: 1.8rem 0;
  }

  @media only screen and (max-width: 26.25em) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const GoogleButton = styled.button`
  width: 50%;
  padding: 1rem 4rem;
  font-weight: 400;
  font-size: 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 0.5rem;
  outline-color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.495rem;
  }

  @media only screen and (max-width: 26.25em) {
    width: 100%;
    justify-content: center;
  }

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 2.3rem;
    height: 2.3rem;
    display: block;
    object-fit: cover;

    @media only screen and (max-width: 26.25em) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const FacebookButton = styled.button`
  width: 50%;
  padding: 1rem 4rem;
  font-weight: 400;
  font-size: 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 0.5rem;
  outline-color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.495rem;
  }

  @media only screen and (max-width: 26.25em) {
    width: 100%;
    justify-content: center;
  }

  svg {
    font-size: 2.3rem;
    color: #3b5999;

    @media only screen and (max-width: 26.25em) {
      font-size: 2rem;
    }
  }
`;

const Text = styled.p`
  display: block;
  text-align: center;
  text-transform: lowercase;
  color: ${({ theme }) => theme.text};
`;

const Form = styled.form`
  margin: 2rem 0;

  @media only screen and (max-width: 64em) {
    margin: 1.8rem 0;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const FormLabel = styled.label`
  display: inline-block;
  width: 7rem;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textLabel};
`;

const FormInput = styled.input`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.bgInput};
  color: #999;
  border-radius: 0.5rem;
  outline-color:  ${({ theme }) => theme.inputOut};
  caret-color: ${({ theme }) => theme.inputCaret};
  transition: all 0.3s ease;

  &:focus {
    background-color: transparent;
  }

  &::-webkit-input-placeholder {
    font-weight: 300;
    font-size: 1.5rem;
    color: #bbb;
  }
`;

const CheckBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const CheckBox = styled.input``;

const CheckBoxLabel = styled.label`
  width: 10rem;
  display: inline-block;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textLabel};
  margin-left: 3.5rem;
`;

const CheckMark = styled.span``;

const FormButton = styled.button`
  margin-top: 2rem;
  border: none;
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  width: 100%;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.bgBtn};
  color: ${({ theme }) => theme.textBtn};
  background-image: ${({ theme }) => css`
    linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      ${theme.bgImgBtn} 50%
    );
  `};
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color:  ${({ theme }) => theme.btnOut};
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.398rem;
  }

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    opacity: 0.85;
    cursor: not-allowed;
  }
`;

const RegisterContainer = styled.div`
  margin-top: 3rem;
`;

const RegisterText = styled.p`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.textLabel};

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      text-decoration-color: var(--clr-tertiary-green);
      color: var(--clr-tertiary-green);
      outline-color: #ddd;
      transition: all 0.3s ease;
    }

    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--clr-tertiary-green);
      text-underline-offset: 0.4rem;
    }
  }
`;

const ForgotPassword = styled.p`
  font-size: 1.65rem;
  color: ${({ theme }) => theme.textLabel};

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: inherit;
      color: currentColor;
      outline-color: #ddd;
      margin-top: 1rem;
      transition: all 0.3s ease;
    }

    &:hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
`;

const ErrorMsg = styled.span`
  font-size: 1.3rem;
  color: var(--clr-secondary-red);
  margin-top: 1px;
`;

export default Login;
