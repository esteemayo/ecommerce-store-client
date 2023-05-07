import styled from 'styled-components';
import { useState } from 'react';

const initialState = {
  password: '',
  confirmPassword: '',
  currentPassword: '',
};

const UpdatePassword = ({ onCancel }) => {
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState(initialState);

  const { password, confirmPassword, currentPassword } = inputs;

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    if (password === '') {
      errors.password = 'Please enter your new password';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (currentPassword === '') {
      errors.currentPassword = 'Please enter your current password';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ ...inputs });
    handleClear();
  };

  const handleClear = () => {
    setInputs(initialState);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor='password1'>Password</FormLabel>
          <FormInput
            type='password'
            id='password1'
            name='password'
            value={password}
            placeholder='Type in your new password'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
          <FormInput
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={confirmPassword}
            placeholder='Confirm your password'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor='currentPassword'>Current Password</FormLabel>
          <FormInput
            type='password'
            id='currentPassword'
            name='currentPassword'
            value={currentPassword}
            placeholder='Type in your current password'
            onChange={handleChange}
          />
        </FormGroup>
        <FormButtonContainer>
          <CancelButton type='button' onClick={onCancel}>
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

const Form = styled.form`
  margin: 2rem 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const FormLabel = styled.label`
  display: inline-block;
  width: 15rem;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;
  color: #888;
`;

const FormInput = styled.input`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: #f9f9f9;
  color: #999;
  border-radius: 0.5rem;
  outline-color: #eee;
  caret-color: var(--caret-light);

  &::-webkit-input-placeholder {
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
  padding: 1.5rem;
  background-color: transparent;
  color: #6d857f;
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
  padding: 1.5rem;
  background-color: #6d857f;
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #89a8a0 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #85beae;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.span`
  font-size: 1.3rem;
  color: hsl(360, 71%, 66%);
  margin-top: 1px;
`;

export default UpdatePassword;
