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
          <FormButton type='button'>Cancel</FormButton>
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
  
`;

const FormButtonContainer = styled.div`
  
`;

const FormButton = styled.button`
  
`;

export default UpdatePassword;
