'use client';

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import Form from '../form/Form';
import { FormGroup } from '../form/FormGroup';
import FormError from '../form/FormError';

import Input from './Input';
import { userDataInputs } from '@/formData';

const initialState = {
  email: '',
  password: '',
};

const UpdateData = ({ onCancel }) => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(initialState);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleClear = useCallback(() => {
    setData(initialState);
  }, []);

  const validateForm = useCallback(() => {
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
  }, [data]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    console.log({ ...data });
    handleClear();
  }, [data, validateForm, handleClear]);

  const closeHandler = useCallback(() => {
    onCancel();
    handleClear();
    errors && setErrors();
  }, [errors, handleClear, onCancel]);

  return (
    <Container>
      <Text>
        Your current email address is {' '}
        <EmailText>brent@email.com</EmailText>
      </Text>
      <Form onSubmit={handleSubmit}>
        {userDataInputs.map((input) => {
          const { id, name, type, label, placeholder } = input;
          return (
            <Input
              key={id}
              label={label}
              type={type}
              name={name}
              value={data[name]}
              placeholder={placeholder}
              onChange={handleChange}
              error={errors[name]}
            />
          );
        })}
        <FormButtonContainer>
          <CancelButton type='button' onClick={closeHandler}>Cancel</CancelButton>
          <FormButton type='submit'>Save</FormButton>
        </FormButtonContainer>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1.5rem;
`;

const Text = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text};
  line-height: 1;
`;

const EmailText = styled.span`
  display: block;
  font-weight: 600;
`;

const FormLabel = styled.label`
  display: inline-block;
  width: 15rem;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textLabel};
`;

const FormInput = styled.input`
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 1.25rem 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textInput};
  border: 2px solid #f3f4f6;
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.inputOut};
  caret-color: ${({ theme }) => theme.inputCaret};

  @media only screen and (max-width: 25em) {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }

  &::placeholder {
    font-weight: 300;
    font-size: 1.5rem;
    color: #bbb;
  }
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

UpdateData.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default UpdateData;
