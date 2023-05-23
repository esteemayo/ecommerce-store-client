'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { registerInputs } from '@/formData';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const initialState = {
  name: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(initialState);

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    const { name, email, username, password, confirmPassword } = data;

    if (name.trim() === '') {
      errors.name = 'Name field is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email field is required';
    }

    if (username.trim() === '') {
      errors.username = 'Username field is required';
    }

    if (password === '') {
      errors.password = 'Password field is required';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    console.log({ ...data, file });
  };

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <Wrapper>
        <Header>Register your account</Header>
        <Form onSubmit={handleSubmit}>
          {registerInputs.map((input) => {
            const { id, name, type, label, placeholder } = input;
            return (
              <FormGroup key={id}>
                <FormLabel htmlFor={id}>{label}</FormLabel>
                <FormInput
                  id={id}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  onChange={handleChange}
                  autoFocus={name === 'name' ? true : false}
                />
                {errors[name] && <ErrorMsg>{errors[name]}</ErrorMsg>}
              </FormGroup>
            );
          })}
          <FormGroup type='file'>
            <FormUpload
              type='file'
              id='file'
              accept='image/*'
              onChange={(e) => setFile(e.target.files[0])}
            />
            <FormLabel htmlFor='file' type='file'>Attach a photo</FormLabel>
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
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 0;
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
  align-items: ${({ type }) => type === 'file' && 'start'};
  justify-content: ${({ type }) => type === 'file' && 'center'};

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const FormLabel = styled.label`
  display: inline-block;
  width: ${({ type }) => type !== 'file' && '13rem'};
  font-weight: 600;
  font-size: ${({ type }) => type === 'file' ? '1.6rem' : '1.4rem'};
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

const FormUpload = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + ${FormLabel} {
    outline: 3px solid #89a8a0;
    outline-offset: 3px;
  }

  & + ${FormLabel} {
    color: #89a8a0;
    display: inline-block;
    text-decoration: none;
    padding: 3px;
    border-bottom: 1px solid #89a8a0;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #89a8a0;
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

const ErrorMsg = styled.span`
  font-size: 1.3rem;
  color: var(--clr-secondary-red);
  margin-top: 1px;
`;

export default Register;
