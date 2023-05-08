import styled from 'styled-components';

const UpdateData = () => {
  return (
    <Container>
      <Text>
        Your current email address is {' '}
        <EmailText>brent@email.com</EmailText>
      </Text>
      <Form>
        <FormGroup>
          <FormLabel htmlFor='newemail'>New email address</FormLabel>
          <FormInput
            type='email'
            name='email'
            id='newemail'
            placeholder='Type in your new email address'
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor='currentPassword'>Current Password</FormLabel>
          <FormInput
            type='password'
            name='passwordl'
            id='currentPassword'
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
  margin-top: 1.5rem;
`;

const Text = styled.p`
  
`;

const EmailText = styled.span`
  
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
`;

const FormButtonContainer = styled.div`
  
`;

const CancelButton = styled.button`
  
`;

const FormButton = styled.button`
  
`;

export default UpdateData;
