'use client';

import { useCallback, useState } from 'react';

import AuthInfo from '@/components/form/FormInfo';
import FormButton from '@/components/form/FormButton';
import FormBox from '@/components/form/FormBox';
import { StyledBox } from '@/components/form/StyledBox';
import Heading from '@/components/form/Heading';
import UploadProgress from '@/components/form/UploadProgress';
import FormInput from '@/components/form/FormInput';
import FormUpload from '@/components/form/FormUpload';
import Form from '@/components/form/Form';
import CountrySelect from '@/components/inputs/CountrySelect';

import { registerInputs } from '@/data/formData';
import { useCountries } from '@/hooks/useCountries';

interface IErrors {
  name?: string;
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  country?: string;
}

const initialState = {
  name: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  country: '',
};

const Register = () => {
  const { getAll } = useCountries();

  const [perc, setPerc] = useState(0);
  const [data, setData] = useState(initialState);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState<IErrors>({});

  const handleChange = useCallback(
    ({ target: input }: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = input;
      setData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const validateForm = useCallback(() => {
    const errors: IErrors = {};
    const { name, email, username, password, confirmPassword, country } = data;

    if (name.trim() === '') {
      errors.name = 'Name must not be empty';
    }

    if (email.trim() === '') {
      errors.email = 'Email must not be empty';
    } else {
      const regEx =
        /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)*[a-zA-Z]{2,9})$/;
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

    if (country.trim() === '') {
      errors.country = 'Country must not be empty';
    }

    return errors;
  }, [data]);

  const handleClear = useCallback(() => {
    setData(initialState);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errors = validateForm();
      if (Object.keys(errors).length > 0) return setErrors(errors);
      setErrors({});

      console.log({ ...data, file });
      handleClear();
    },
    [data, file, handleClear, validateForm]
  );

  return (
    <FormBox>
      <StyledBox>
        <Heading small title='Register your account' />
        <Form onSubmit={handleSubmit}>
          {registerInputs.map((input) => {
            const { id, name, type, label, placeholder } = input;
            return (
              <FormInput
                key={id}
                name={name}
                type={type}
                label={label}
                value={data[name]}
                placeholder={placeholder}
                onChange={handleChange}
                autoFocus={name === 'name' ? true : false}
                error={errors[name]}
              />
            );
          })}
          <CountrySelect
            name='country'
            label='Country'
            value={data.country}
            data={getAll()}
            onChange={handleChange}
            error={errors.country}
          />
          {perc > 0 && perc < 100 ? (
            <UploadProgress percentage={perc} />
          ) : (
            <>
              <FormUpload
                id='file'
                accept='image/*'
                label='Attach a photo'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFile(e.target.files[0])
                }
              />
            </>
          )}
          <FormButton label='Register' disabled={perc > 0 && perc < 100} />
        </Form>
      </StyledBox>
      <AuthInfo url='/login' text='Already have an account?' label='Sign in' />
    </FormBox>
  );
};

export default Register;
