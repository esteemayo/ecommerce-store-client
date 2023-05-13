'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaFacebookF } from 'react-icons/fa';
import Image from 'next/image';

import { closeSubmenu } from '@/features/submenu/submenuSlice';

const Login = () => {
  const dispatch = useDispatch();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState({});

  const username = usernameRef.current?.value;
  const password = passwordRef.current?.value;

  const validateForm = () => {
    const tempErrors = {};

    if (username === '') {
      tempErrors.username = 'Username field is required';
    }

    if (password === '') {
      tempErrors.password = 'Password field is required';
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) return;
    setErrors({});

    console.log({ username, password });
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
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
              ref={passwordRef}
            />
            {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
          </FormGroup>
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
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);

  @media only screen and (max-width: 21.25em) {
    width: 35rem;
  }
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
  justify-content: start;
  gap: 1.5rem;
  margin: 2rem 0;

  @media only screen and (max-width: 64em) {
    margin: 1.8rem 0;
  }

  @media only screen and (max-width: 21.25em) {
    gap: 1rem;
  }
`;

const GoogleButton = styled.button`
  width: 50%;
  padding: 1rem 4rem;
  font-weight: 400;
  font-size: 1.5rem;
  background-color: transparent;
  color: inherit;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  outline-color: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media only screen and (max-width: 21.25em) {
    width: 40%;
    justify-content: center;
    gap: 0.5rem;
  }

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 2.3rem;
    height: 2.3rem;
    display: block;
    object-fit: cover;

    @media only screen and (max-width: 21.25em) {
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
  color: inherit;
  border: 1px solid #ddd;
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

  @media only screen and (max-width: 21.25em) {
    width: 45%;
    justify-content: center;
    gap: 0.5rem;
  }

  svg {
    font-size: 2.3rem;
    color: #3b5999;

    @media only screen and (max-width: 21.25em) {
      font-size: 2rem;
    }
  }
`;

const Text = styled.p`
  display: block;
  text-align: center;
  text-transform: lowercase;
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
  color: #888;
`;

const FormInput = styled.input`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
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

const FormButton = styled.button`
  margin-top: 2rem;
  border: none;
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  width: 100%;
  padding: 1.5rem;
  background-color: var(--clr-primary-green);
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #89a8a0 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #85beae;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const RegisterContainer = styled.div`
  margin-top: 3rem;
`;

const RegisterText = styled.p`
  font-size: 1.7rem;
  color: #888;

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      text-decoration-color: #89a8a0;
      color: #89a8a0;
      outline-color: #ddd;
      transition: all 0.3s ease;
    }

    &:hover {
      text-decoration: underline;
      text-decoration-color: #89a8a0;
      text-underline-offset: 0.4rem;
    }
  }
`;

const ForgotPassword = styled.p`
  font-size: 1.65rem;
  color: #888;

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
