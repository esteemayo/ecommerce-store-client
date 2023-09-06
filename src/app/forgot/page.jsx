'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import FormButton from '@/components/form/FormButton';
import ClientOnly from '@/components/ClientOnly';
import FormInput from '@/components/form/FormInput';
import FormBox from '@/components/form/FormBox';
import Heading from '@/components/form/Heading';

import { StyledBox } from '@/components/form/StyledBox';

const Forgot = () => {
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

  return (
    <ClientOnly>
      <FormBox>
        <StyledBox>
          <Heading
            small
            title='Forgot password'
          />
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
        </StyledBox>
      </FormBox>
    </ClientOnly>
  );
}

const Form = styled.form`
  margin: 2rem 0;
`;

export default Forgot;
