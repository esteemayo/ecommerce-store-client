'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import AuthError from '@/components/form/FormError';
import AuthInfo from '@/components/form/FormInfo';
import FormButton from '@/components/form/FormButton';
import FormBox from '@/components/form/FormBox';
import { StyledBox } from '@/components/form/StyledBox';
import Form from '@/components/form/Form';
import { FormGroup } from '@/components/form/FormGroup';
import Heading from '@/components/form/Heading';

import ClientOnly from '@/components/ClientOnly';

import SocialLogin from './SocialLogin';
import {
  getFromStorage,
  rememberKey,
  setToStorage,
  userKey,
} from '@/utils';

const Login = () => {
  const { mode } = useSelector((state) => ({ ...state.darkMode }));

  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState('');

  const validateForm = useCallback(() => {
    const tempErrors = {};

    if (username.trim() === '') {
      tempErrors.username = 'Username must not be empty';
    }

    if (password === '') {
      tempErrors.password = 'Password must not be empty';
    } else if (password.length < 8) {
      tempErrors.password = 'Password should be at least 8 characters long';
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return true;
    }
    return false;
  }, [username, password]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (validateForm()) return;
    setErrors({});

    const userData = {
      username,
      password,
    };

    console.log({ ...userData, rememberMe });

    setToStorage(rememberKey, rememberMe);
    setToStorage(userKey, rememberMe ? userData : '');
  }, [username, password, rememberMe, validateForm]);

  const checkmarkClasses = useMemo(() => {
    if (mode) {
      return `checkmark dark`;
    }

    return `checkmark light`;
  }, [mode]);

  useEffect(() => {
    const rememberMe = getFromStorage(rememberKey);
    const user = getFromStorage(userKey);

    setUsername(user.username);
    setPassword(user.password);
    setRememberMe(rememberMe);
  }, []);

  return (
    <ClientOnly>
      <FormBox>
        <StyledBox>
          <Heading
            small
            type='login'
            title='Log in with'
          />
          <SocialLogin />
          <Text>or</Text>
          <Form type='login' onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor='username'>Username</FormLabel>
              <FormInput
                type='text'
                id='username'
                value={username}
                placeholder='Enter username'
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <AuthError message={errors.username} />}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormInput
                id='password'
                type='password'
                value={password}
                placeholder='Enter your password'
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <AuthError message={errors.password} />}
            </FormGroup>
            <CheckBoxWrapper className='checkContainer'>
              <CheckBox
                type='checkbox'
                id='rememberMe'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.currentTarget.checked)}
                className='checkbox'
              />
              <CheckMark className={checkmarkClasses} />
              <CheckBoxLabel htmlFor='rememberMe'>Remember me</CheckBoxLabel>
            </CheckBoxWrapper>
            <FormButton label='Log in' />
            <ForgotPassword>
              <Link href='/forgot' passHref>
                Forgot your password?
              </Link>
            </ForgotPassword>
          </Form>
        </StyledBox>
        <AuthInfo
          url='/register'
          text={`Don't have an account?`}
          label='Sign up'
        />
      </FormBox>
    </ClientOnly>
  );
}

const Text = styled.p`
  display: block;
  text-align: center;
  text-transform: lowercase;
  color: ${({ theme }) => theme.text};
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

export default Login;
