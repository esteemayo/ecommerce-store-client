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
  const [perc, setPerc] = useState(null);
  const [data, setData] = useState(initialState);

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    const { name, email, username, password, confirmPassword } = data;

    if (name.trim() === '') {
      errors.name = 'Name must not be empty';
    }

    if (email.trim() === '') {
      errors.email = 'Email must not be empty';
    } else {
      const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)*[a-zA-Z]{2,9})$/;
      if (!email.match(regEx)) {
        errors.email = 'Email must be a valid email address';
      }
    }

    if (username.trim() === '') {
      errors.username = 'Username must not be empty';
    }

    if (password === '') {
      errors.password = 'Password must not be empty';
    } else if (password.length < 8) {
      errors.password = 'Password should be at least 8 characters long';
    } else if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your new password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    console.log({ ...data, email: data.email.toLowerCase(), file });
  };

  return (
    <Container onMouseOver={() => dispatch(closeSubmenu())}>
      <RegisterContainer>
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
              {perc !== null && perc < 100 ? (
                <UploadProgress>Uploading: {perc}%</UploadProgress>
              ) : (
                <>
                  <FormUpload
                    type='file'
                    id='file'
                    accept='image/*'
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <FormLabel htmlFor='file' type='file'>Attach a photo</FormLabel>
                </>
              )}
            </FormGroup>
            <FormButton type='submit' disabled={perc !== null && perc < 100}>
              Register
            </FormButton>
          </Form>
        </Wrapper>
        <LoginContainer>
          <LoginText>
            Already have an account? {' '}
            <Link href='/login' passHref>Sign in</Link>
          </LoginText>
        </LoginContainer>
      </RegisterContainer>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const RegisterContainer = styled.div`
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
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  color: ${({ theme }) => theme.textFormHeader};
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
  color:  ${({ theme }) => theme.textLabel};
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
  outline-color: ${({ theme }) => theme.inputOut};
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

const FormUpload = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + ${FormLabel} {
    outline: 3px solid ${({ theme }) => theme.fileInput};
    outline-offset: 3px;
  }

  & + ${FormLabel} {
    color: ${({ theme }) => theme.textFile};
    display: inline-block;
    text-decoration: none;
    padding: 3px;
    border-bottom: 1px solid ${({ theme }) => theme.fileInput};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.fileInput};
      color: ${({ theme }) => theme.textCat};
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
`;

const UploadProgress = styled.span`
  text-transform: capitalize;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
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
  color: ${({ theme }) => theme.textBtn};
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
  color:  ${({ theme }) => theme.textLabel};

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
