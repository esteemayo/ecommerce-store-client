'use client';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';

import AuthInfo from '@/components/form/FormInfo';
import FormButton from '@/components/form/FormButton';
import FormInput from '@/components/form/FormInput';

import ClientOnly from '@/components/ClientOnly';

import { closeSubmenu } from '@/features/submenu/submenuSlice';

import { registerInputs } from '@/formData';

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

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const validateForm = useCallback(() => {
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
  }, [data]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    console.log({ ...data, email: data.email.toLowerCase(), file });
  }, [data, file, validateForm]);

  return (
    <ClientOnly>
      <Container onMouseOver={() => dispatch(closeSubmenu())}>
        <RegisterContainer>
          <Wrapper>
            <Header>Register your account</Header>
            <Form onSubmit={handleSubmit}>
              {registerInputs.map((input) => {
                const { id, name, type, label, placeholder } = input;
                return (
                  <FormInput
                    key={id}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    onChange={handleChange}
                    autoFocus={name === 'name' ? true : false}
                    error={errors[name]}
                  />
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
              <FormButton
                label='Register'
                disabled={perc !== null && perc < 100}
              />
            </Form>
          </Wrapper>
          <AuthInfo
            url='/login'
            text='Already have an account?'
            label='Sign in'
          />
        </RegisterContainer>
      </Container>
    </ClientOnly>
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
    display: inline - block;
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

export default Register;
