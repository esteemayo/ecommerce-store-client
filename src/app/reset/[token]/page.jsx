'use client';
import styled from 'styled-components';

const ResetPassword = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Reset your password</Header>
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

export default ResetPassword;
