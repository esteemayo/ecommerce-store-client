'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import FormButton from '@/components/form/FormButton';
import ClientOnly from '@/components/ClientOnly';
import FormInput from '@/components/form/FormInput';

import { closeSubmenu } from '@/features/submenu/submenuSlice';

const initialState = {
  password: '',
  confirmPassword: '',
};

const ResetPassword = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateForm = useCallback(() => {
    const tempErrors = {};

    if (!password) {
      tempErrors.password = 'Please enter your new password';
    } else if (password.length < 8) {
      tempErrors.password = 'Password should be at least 8 characters long';
    } else if (!confirmPassword) {
      tempErrors.confirmPassword = 'Please confirm your new password';
    } else if (password !== confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return true;
    }
    return false;
  }, [confirmPassword, password]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (validateForm()) return;
    setErrors({});

    console.log({ password, confirmPassword });
  }, [confirmPassword, password, validateForm]);

  return (
    <ClientOnly>
      <Container onMouseOver={() => dispatch(closeSubmenu())}>
        <ResetContainer>
          <Wrapper>
            <Header>Reset your password</Header>
            <Form onSubmit={handleSubmit}>
              <FormInput
                type='password'
                name='password'
                label='Password'
                placeholder='Enter your password'
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                autoFocus
              />
              <FormInput
                type='password'
                name='confirmPassword'
                label='Confirm password'
                placeholder='Confirm your password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={errors.confirmPassword}
              />
              <FormButton label='Reset password' />
            </Form>
          </Wrapper>
        </ResetContainer>
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const ResetContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 0;
  display: flex;
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
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.textFormHeader};
`;

const Form = styled.form`
  margin: 2rem 0;
`;

export default ResetPassword;
