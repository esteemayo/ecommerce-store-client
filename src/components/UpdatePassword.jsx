import styled from 'styled-components';

const UpdatePassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Heading>Change your password</Heading>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <FormInput
            type='password'
            id='password'
            name='password'
            placeholder='Type in your new password'
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
          <FormInput
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            placeholder='Confirm your password'
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor='currentPassword'>Current Password</FormLabel>
          <FormInput
            type='password'
            id='currentPassword'
            name='currentPassword'
            placeholder='Type in your current password'
          />
        </FormGroup>
        <FormButtonContainer>
          <CancelButton type='button'>Cancel</CancelButton>
          <FormButton type='submit'>Save</FormButton>
        </FormButtonContainer>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  
`;

const Heading = styled.h1`
  
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
  border: none;
  font-weight: 500;
  font-size: 1.4rem;
  width: 50%;
  padding: 1.5rem;
`;

const FormButton = styled.button`
  display: inline-block;
  border: none;
  font-weight: 500;
  font-size: 1.4rem;
  width: 50%;
  padding: 1.5rem;
`;

export default UpdatePassword;
