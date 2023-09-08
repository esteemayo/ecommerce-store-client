'use client';

import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import Button from './Button';
import CancelButton from './CancelButton';
import Input from './Input';
import AccountEmail from './AccountEmail';

import { Container } from './Container';
import { ButtonContainer } from './ButtonContainer';

import Form from '../form/Form';

import { useForm } from '@/hooks/useForm';
import { userDataInputs } from '@/formData';

const initialState = {
  email: '',
  password: '',
};

const UpdateData = ({ onCancel }) => {
  // const [errors, setErrors] = useState({});
  // const [data, setData] = useState(initialState);

  // const handleChange = useCallback(({ target: input }) => {
  //   const { name, value } = input;
  //   setData((prev) => ({ ...prev, [name]: value }));
  // }, []);

  const validateForm = (data) => {
    const errors = {};
    const { email, password } = data;

    if (email.trim() === '') {
      errors.email = 'Please enter your new email address';
    } else {
      const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)*[a-zA-Z]{2,9})$/;
      if (!email.match(regEx)) {
        errors.email = 'Email must be a valid email address';
      }
    }

    if (password === '') {
      errors.password = 'Please enter your password';
    }

    return errors;
  };

  const onSubmitHandler = () => {
    console.log({ ...formData });
  }

  const { formData, errors, handleClose, handleChange, handleSubmit } = useForm(onSubmitHandler, initialState, validateForm, onCancel);

  return (
    <Container>
      <AccountEmail email='brent@email.com' />
      <Form onSubmit={handleSubmit}>
        {userDataInputs.map((input) => {
          const { id, name, type, label, placeholder } = input;
          return (
            <Input
              key={id}
              label={label}
              type={type}
              name={name}
              value={formData[name]}
              placeholder={placeholder}
              onChange={handleChange}
              error={errors?.[name]}
            />
          );
        })}
        <ButtonContainer>
          <CancelButton
            text='Cancel'
            onClick={handleClose}
          />
          <Button text='Save' />
        </ButtonContainer>
      </Form>
    </Container>
  );
}

UpdateData.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default UpdateData;
