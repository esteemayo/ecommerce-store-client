'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import AuthInfo from '@/components/form/FormInfo';
import FormButton from '@/components/form/FormButton';
import FormBox from '@/components/form/FormBox';
import { StyledBox } from '@/components/form/StyledBox';
import Heading from '@/components/form/Heading';
import FormInput from '@/components/form/FormInput';
import Form from '@/components/form/Form';
import CheckBox from '@/components/form/CheckBox';

import { useForm } from '@/hooks/useForm';
import ClientOnly from '@/components/ClientOnly';

import SocialLogin from './SocialLogin';
import {
  getFromStorage,
  rememberKey,
  setToStorage,
  userKey,
} from '@/utils';
import Forgot from './Forgot';

const initialState = {
  username: '',
  password: '',
};

const Login = () => {
  const { mode } = useSelector((state) => ({ ...state.darkMode }));
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = (data) => {
    const tempErrors = {};
    const { password, username } = data;

    if (username.trim() === '') {
      tempErrors.username = 'Username must not be empty';
    }

    if (password === '') {
      tempErrors.password = 'Password must not be empty';
    } else if (password.length < 8) {
      tempErrors.password = 'Password should be at least 8 characters long';
    }

    return tempErrors;
  };

  const onSubmitHandler = () => {
    console.log({ ...formData, rememberMe });

    setToStorage(rememberKey, rememberMe);
    setToStorage(userKey, rememberMe ? formData : '');
  };

  const {
    errors,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
  } = useForm(onSubmitHandler, initialState, validateForm);

  useEffect(() => {
    const rememberMe = getFromStorage(rememberKey);
    const user = getFromStorage(userKey);

    const userData = {
      username: user?.username,
      password: user?.password,
    };

    setFormData(userData);
    setRememberMe(rememberMe);
  }, [setFormData]);

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
            <FormInput
              name='username'
              label='Username'
              value={formData.username}
              placeholder='Enter username'
              onChange={handleChange}
              error={errors.username}
              login
            />
            <FormInput
              name='password'
              type='password'
              label='Password'
              value={formData.password}
              placeholder='Enter your password'
              onChange={handleChange}
              error={errors.password}
              login
            />
            <CheckBox
              name='rememberMe'
              label='Remember me'
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.currentTarget.checked)}
            />
            <FormButton label='Log in' />
            <Forgot
              url='/forgo'
              label='Forgot your password?'
            />
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
