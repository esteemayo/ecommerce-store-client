'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';

import AuthInfo from '@/components/form/FormInfo';
import FormButton from '@/components/form/FormButton';
import FormBox from '@/components/form/FormBox';
import { StyledBox } from '@/components/form/StyledBox';
import Heading from '@/components/form/Heading';
import UploadProgress from '@/components/form/UploadProgress';
import FormInput from '@/components/form/FormInput';

import ClientOnly from '@/components/ClientOnly';

import { useForm } from '@/hooks/useForm';
import { registerInputs } from '@/formData';

const initialState = {
  name: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    console.log({ ...data, email: data.email.toLowerCase(), file });
  };

  return (
    <ClientOnly>
      <FormBox>
        <StyledBox>
          <Heading
            small
            title='Register your account'
          />
          <Form onSubmit={handleSubmit}>
            {registerInputs.map((input) => {
              const { id, name, type, label, placeholder } = input;
              return (
                <FormInput
                  key={id}
                  name={name}
                  type={type}
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
                <UploadProgress percentage={perc} />
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
        </StyledBox>
        <AuthInfo
          url='/login'
          text='Already have an account?'
          label='Sign in'
        />
      </FormBox>
    </ClientOnly>
  );
}

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

export default Register;
