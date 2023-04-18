'use client';
import styled from 'styled-components';

const ResetPassword = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Reset your password</Header>
        <Form>
          <FormGroup>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput
              id='password'
              type='password'
              name='password'
              placeholder='Enter your password'
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='confirmPassword'>Confirm password</FormLabel>
            <FormInput
              id='confirmPassword'
              type='password'
              name='confirmPassword'
              placeholder='Confirm your password'
            />
          </FormGroup>
          <FormButton type='submit'>Reset password</FormButton>
        </Form>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.25);
`;

const Header = styled.h1`
  display: block;
  font-weight: 500;
  font-size: 2.5rem;
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

export default ResetPassword;
