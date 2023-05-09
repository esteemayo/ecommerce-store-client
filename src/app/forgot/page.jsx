'use client';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { closeSubmenu } from '@/features/submenu/submenuSlice';

const Forgot = () => {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const [email, setEmail] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = 'Please enter your email address';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    console.log(email);
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <Wrapper>
        <Header>Forgot password</Header>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput
              id='email'
              type='email'
              name='email'
              ref={emailRef}
              placeholder='Enter email address'
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
          </FormGroup>
          <FormButton type='submit'>Reset password</FormButton>
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
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
`;

const Header = styled.h1`
  display: block;
  font-weight: 500;
  font-size: 2.5rem;
  text-transform: capitalize;
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
  width: 4rem;
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

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.span`
  font-size: 1.3rem;
  color: hsl(360, 71%, 66%);
  margin-top: 1px;
`;

export default Forgot;
