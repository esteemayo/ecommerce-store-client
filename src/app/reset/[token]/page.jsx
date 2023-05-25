'use client';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { closeSubmenu } from '@/features/submenu/submenuSlice';

const ResetPassword = () => {
  const dispatch = useDispatch();

  const passwordRef = useRef();
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateForm = () => {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) return;
    setErrors({});

    console.log({ password, confirmPassword });
  };

  useEffect(() => {
    passwordRef.current.focus();
  }, []);

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <ResetContainer>
        <Wrapper>
          <Header>Reset your password</Header>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <FormInput
                id='password'
                type='password'
                name='password'
                ref={passwordRef}
                placeholder='Enter your password'
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='confirmPassword'>Confirm password</FormLabel>
              <FormInput
                id='confirmPassword'
                type='password'
                name='confirmPassword'
                placeholder='Confirm your password'
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && <ErrorMsg>{errors.confirmPassword}</ErrorMsg>}
            </FormGroup>
            <FormButton type='submit'>Reset password</FormButton>
          </Form>
        </Wrapper>
      </ResetContainer>
    </Container>
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
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);

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
  color: #979797;
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
  display: inline-block;
  width: 13rem;
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
  transition: all 0.3s ease;

  &:focus {
    background-color: var(--clr-white);
  }

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
  text-transform: capitalize;
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

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.398rem;
  }

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.span`
  font-size: 1.3rem;
  color: var(--clr-secondary-red);
  margin-top: 1px;
`;

export default ResetPassword;
