'use client';

import styled from 'styled-components';

import FormButton from '@/components/form/FormButton';
import FormBox from '@/components/form/FormBox';
import FormInput from '@/components/form/FormInput';
import Heading from '@/components/form/Heading';
import ClientOnly from '@/components/ClientOnly';

import { useForm } from '@/hooks/useForm';
import { StyledBox } from '@/components/form/StyledBox';

const initialState = {
  password: '',
  confirmPassword: '',
};

const ResetPassword = () => {
  const validateForm = (data) => {
    const tempErrors = {};
    const { password, confirmPassword } = data;

    if (password === '') {
      tempErrors.password = 'Please enter your new password';
    } else if (password.length < 8) {
      tempErrors.password = 'Password should be at least 8 characters long';
    } else if (confirmPassword === '') {
      tempErrors.confirmPassword = 'Please confirm your new password';
    } else if (password !== confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }

    return tempErrors;
  };

  const onSubmitHandler = () => {
    console.log({ ...formData });
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
            title='Reset your password'
          />
          <Form onSubmit={handleSubmit}>
            <FormInput
              type='password'
              name='password'
              label='Password'
              placeholder='Enter your password'
              onChange={handleChange}
              error={errors.password}
              autoFocus
            />
            <FormInput
              type='password'
              name='confirmPassword'
              label='Confirm password'
              placeholder='Confirm your password'
              onChange={handleChange}
              error={errors.confirmPassword}
            />
            <FormButton label='Reset password' />
          </Form>
        </StyledBox>
      </FormBox>
    </ClientOnly>
  );
}

const Form = styled.form`
  margin: 2rem 0;
`;

export default ResetPassword;
