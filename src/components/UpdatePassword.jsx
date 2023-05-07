import styled from 'styled-components';

const UpdatePassword = () => {
  return (
    <Container>
      <Heading>Change your password</Heading>
      <Form>
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
        <FormButton type='submit'>Save</FormButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  
`;

const Heading = styled.h1`
  
`;

const Form = styled.form`
  
`;

const FormGroup = styled.div`
  
`;

const FormLabel = styled.label`
  
`;

const FormInput = styled.input`
  
`;

const FormButton = styled.button`
  
`;

export default UpdatePassword;
