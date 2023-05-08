import { useState } from 'react';
import styled from 'styled-components';

const initialState = {
  email: '',
  currentPassword: '',
};

const UpdateData = ({ onCancel }) => {
  const [data, setData] = useState(initialState);

  const { email, currentPassword } = data;

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClear = () => {
    setData(initialState);
  };

  return (
    <Container>
      <Text>
        Your current email address is {' '}
        <EmailText>brent@email.com</EmailText>
      </Text>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor='newEmail'>New email address</FormLabel>
          <FormInput
            type='email'
            name='email'
            id='newEmail'
            value={email}
            placeholder='Type in your new email address'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor='passwordCurrent'>Current Password</FormLabel>
          <FormInput
            type='password'
            id='passwordCurrent'
            name='currentPassword'
            value={currentPassword}
            placeholder='Type in your current password'
            onChange={handleChange}
          />
        </FormGroup>
        <FormButtonContainer>
          <CancelButton type='button' onClick={onCancel}>Cancel</CancelButton>
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
  line-height: 1;
`;

const EmailText = styled.span`
  display: block;
  font-weight: 600;
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
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: transparent;
  color: #999;
  border: 2px solid #f3f4f6;
  border-radius: 0.5rem;
  outline-color: #eee;
  caret-color: var(--caret-light);

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
  background-color: var(--clr-primary-green);
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

export default UpdateData;
