'use client';

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import Input from './Input';
import Form from '../form/Form';
import { FormGroup } from '../form/FormGroup';
import FormError from '../form/FormError';

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
          <CancelButton type='button' onClick={cancelHandler}>
            Cancel
          </CancelButton>
          <FormButton type='submit'>Save</FormButton>
        </FormButtonContainer>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1.5rem;
`;

const FormLabel = styled.label`
  display: inline-block;
  width: 15rem;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textLabel};
`;

const FormButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const CancelButton = styled.button`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.4rem;
  width: 50%;
  padding: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textModalBtn};
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  outline-color: #eee;
  cursor: pointer;
`;

const FormButton = styled.button`
  display: inline-block;
  border: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.4rem;
  width: 50%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgBtn};
  color: ${({ theme }) => theme.textModalDelBtn};
  background-image: ${({ theme }) => css`
    linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      ${theme.bgImgBtn} 50%
    );
  `};
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.btnOut};
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    font-size: 1.398rem;
  }

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    opacity: 0.85;
    cursor: not-allowed;
  }
`;

UpdatePassword.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default UpdatePassword;
