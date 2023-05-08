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
  
`;

const Text = styled.p`
  
`;

const EmailText = styled.span`
  
`;

const Form = styled.form`
  
`;

const FormGroup = styled.div`
  
`;

const FormLabel = styled.label`
  
`;

const FormInput = styled.input`
  
`;

const FormButtonContainer = styled.div`
  
`;

const CancelButton = styled.button`
  
`;

const FormButton = styled.button`
  
`;

export default UpdateData;
