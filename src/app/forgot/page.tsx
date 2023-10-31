'use client';

import { useCallback, useState } from 'react';

import FormButton from '@/components/form/FormButton';
import FormBox from '@/components/form/FormBox';
import FormInput from '@/components/form/FormInput';
import Form from '@/components/form/Form';
import { StyledBox } from '@/components/form/StyledBox';
import Heading from '@/components/form/Heading';

interface IErrors {
  email?: string;
}

const Forgot = () => {
  const [email, setEmail] = useState(null);
  const [errors, setErrors] = useState<IErrors>({});

  const validateForm = useCallback(() => {
    const errors: IErrors = {};

    if (!email) {
      errors.email = 'Please enter your email address';
    } else {
      const regEx =
        /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)*[a-zA-Z]{2,9})$/;
      if (!email.match(regEx)) {
        errors.email = 'Email must be a valid email address';
      }
    }

    return errors;
  }, [email]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errors = validateForm();
      if (Object.keys(errors).length > 0) return setErrors(errors);
      setErrors({});

      console.log(email);
    },
    [email, validateForm]
  );

  return (
    <FormBox>
      <StyledBox>
        <Heading small title='Forgot password' />
        <Form onSubmit={handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={email}
            placeholder='Enter email address'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            error={errors.email}
            autoFocus
          />
          <FormButton label='Reset password' />
        </Form>
      </StyledBox>
    </FormBox>
  );
};

export default Forgot;
