'use client';

import PropTypes from 'prop-types';

import Input from './Input';
import CancelButton from './CancelButton';
import Button from './Button';

import { Container } from './Container';
import { ButtonContainer } from './ButtonContainer';

import Form from '../form/Form';

import { useForm } from '@/hooks/useForm';
import { passwordInputs } from '@/data/formData';

const initialState = {
  password: '',
  confirmPassword: '',
  currentPassword: '',
};

const UpdatePassword = ({ onCancel }) => {
  const validateForm = (data) => {
    const errors = {};
    const { password, confirmPassword, currentPassword } = data;

    if (password === '') {
      errors.password = 'Please enter your new password';
    } else if (password.length < 8) {
      errors.password = 'Password should be at least 8 characters long';
    } else if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your new password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (currentPassword === '') {
      errors.currentPassword = 'Please enter your current password';
    }

    return errors;
  };

  const onSubmitHandler = () => {
    console.log({ ...formData });
  };

  const {
    errors,
    formData,
    handleClose,
    handleChange,
    handleSubmit,
  } = useForm(onSubmitHandler, initialState, validateForm, onCancel);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {passwordInputs.map((input) => {
          const { id, name, type, label, placeholder } = input;
          return (
            <Input
              key={id}
              id={id}
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

UpdatePassword.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default UpdatePassword;
