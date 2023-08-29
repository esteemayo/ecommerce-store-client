'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import FormButton from '@/components/form/FormButton';
import ClientOnly from '@/components/ClientOnly';
import FormInput from '@/components/form/FormInput';

import { closeSubmenu } from '@/features/submenu/submenuSlice';

const Forgot = () => {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const [email, setEmail] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const errors = {};

    if (!email) {
      errors.email = 'Please enter your email address';
    } else {
      const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)*[a-zA-Z]{2,9})$/;
      if (!email.match(regEx)) {
        errors.email = 'Email must be a valid email address';
      }
    }

    return errors;
  }, [email]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    console.log(email);
  }, [email, validateForm]);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <ClientOnly>
      <Container onMouseOver={() => dispatch(closeSubmenu())}>
        <ForgotContainer>
          <Wrapper>
            <Header>Forgot password</Header>
            <Form onSubmit={handleSubmit}>
              <FormInput
                type='email'
                name='email'
                label='Email'
                placeholder='Enter email address'
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                 autoFocus
              />
              <FormButton label='Reset password' />
            </Form>
          </Wrapper>
        </ForgotContainer>
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const ForgotContainer = styled.div`
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
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.textFormHeader};
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
  width: 4rem;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textLabel};
`;

export default Forgot;
