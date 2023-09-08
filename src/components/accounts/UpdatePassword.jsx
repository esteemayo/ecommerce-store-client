'use client';

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import Input from './Input';
import CancelButton from './CancelButton';
import Button from './Button';

import Form from '../form/Form';

import { passwordInputs } from '@/formData';

const initialState = {
  password: '',
  confirmPassword: '',
  currentPassword: '',
};

const UpdatePassword = ({ onCancel }) => {
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState(initialState);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleClear = useCallback(() => {
    setInputs(initialState);
  }, []);

  const validateForm = useCallback(() => {
    const errors = {};
    const { password, confirmPassword, currentPassword } = inputs;

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
  }, [inputs]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    console.log({ ...inputs });
    handleClear();
  }, [inputs, validateForm, handleClear]);

  const cancelHandler = useCallback(() => {
    onCancel();
    handleClear();
    errors && setErrors();
  }, [errors, handleClear, onCancel]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {passwordInputs.map((input) => {
          const { id, name, type, label, placeholder } = input;
          return (
            <Input
              key={id}
              label={label}
              type={type}
              name={name}
              value={inputs[name]}
              placeholder={placeholder}
              onChange={handleChange}
              error={errors[name]}
            />
          );
        })}
        <FormButtonContainer>
          <CancelButton
            text='Cancel'
            onClick={cancelHandler}
          />
          <Button text='Save' />
        </FormButtonContainer>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1.5rem;
`;

const FormButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

UpdatePassword.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default UpdatePassword;
