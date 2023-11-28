'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';

import AuthInfo from '@/components/form/FormInfo';
import FormButton from '@/components/form/FormButton';
import FormBox from '@/components/form/FormBox';
import { StyledBox } from '@/components/form/StyledBox';
import Heading from '@/components/form/Heading';
import FormInput from '@/components/form/FormInput';
import Form from '@/components/form/Form';
import CheckBox from '@/components/form/CheckBox';

import Forgot from './Forgot';
import SocialLogin from './SocialLogin';

import { useForm } from '@/hooks/useForm';

import { getFromStorage, rememberKey, setToStorage, userKey } from '@/utils';

interface FormData {
  username: string;
  password: string;
}

interface IErrors {
  username?: string;
  password?: string;
}

const initialState: FormData = {
  username: '',
  password: '',
};

const initialError: IErrors = {
  username: '',
  password: '',
};

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = (data: FormData) => {
    const tempErrors: IErrors = {};
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
    console.log({ ...data, rememberMe });

    setToStorage(rememberKey, rememberMe);
    setToStorage(userKey, rememberMe ? data : '');
  };

  const { errors, data, setData, handleChange, handleSubmit } = useForm(
    onSubmitHandler,
    initialState,
    initialError,
    validateForm
  );

  useEffect(() => {
    const rememberMe = getFromStorage(rememberKey);
    const user = getFromStorage(userKey);

    const userData = {
      username: user?.username,
      password: user?.password,
    };

    setData(userData);
    setRememberMe(rememberMe);
  }, [setData]);

  return (
    <FormBox>
      <StyledBox>
        <Heading small type='login' title='Log in with' />
        <SocialLogin />
        <Text>or</Text>
        <Form type='login' onSubmit={handleSubmit}>
          <FormInput
            name='username'
            label='Username'
            value={data.username}
            placeholder='Enter username'
            onChange={handleChange}
            error={errors.username}
            login
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            value={data.password}
            placeholder='Enter your password'
            onChange={handleChange}
            error={errors.password}
            login
          />
          <CheckBox
            name='rememberMe'
            label='Remember me'
            checked={rememberMe}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRememberMe(e.currentTarget.checked)
            }
          />
          <FormButton label='Log in' />
          <Forgot url='/forgo' label='Forgot your password?' />
        </Form>
      </StyledBox>
      <AuthInfo
        url='/register'
        text={`Don't have an account?`}
        label='Sign up'
      />
    </FormBox>
  );
};

const Text = styled.p`
  display: block;
  text-align: center;
  text-transform: lowercase;
  color: ${({ theme }) => theme.text};
`;

export default Login;
