'use client';
import styled from 'styled-components';

const Account = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Account settings</Heading>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
`;

const Heading = styled.h1`
  
`;

const HeadingText = styled.p`
  
`;

export default Account;
