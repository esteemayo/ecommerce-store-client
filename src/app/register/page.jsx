'use client';

import styled from 'styled-components';
import { useState } from 'react';

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
import FormUpload from '@/components/form/FormUpload';

const initialState = {
  name: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const [perc, setPerc] = useState(0);
  const [file, setFile] = useState(null);

  const validateForm = (data) => {
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
  };

  const onSubmitHandler = () => {
    console.log({ ...formData, file });
  };

  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(onSubmitHandler, initialState, validateForm);

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
                  value={formData[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                  autoFocus={name === 'name' ? true : false}
                  error={errors[name]}
                />
              );
            })}
            {perc > 0 && perc < 100 ? (
              <UploadProgress percentage={perc} />
            ) : (
              <>
                <FormUpload
                  id='file'
                  accept='image/*'
                  label='Attach a photo'
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </>
            )}
            <FormButton
              label='Register'
              disabled={perc > 0 && perc < 100}
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

export default Register;
