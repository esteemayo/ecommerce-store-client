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
          </FormGroup>
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

`;

const Header = styled.h1`

`;

const Form = styled.form`

`;

const FormGroup = styled.div`

`;

const FormLabel = styled.label`

`;

export default ResetPassword;
