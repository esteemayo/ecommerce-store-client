'use client';
import styled from 'styled-components';

const Account = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Account settings</Heading>
        <HeadingText>Edit your name, avatar etc.</HeadingText>
        <AccountContainer>
          <AccountWrapper>

          </AccountWrapper>
        </AccountContainer>
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
  display: inline-block;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 2.3rem;
  letter-spacing: 0.1px;
`;

const HeadingText = styled.p`
  
`;

const AccountContainer = styled.div`
  
`;

const AccountWrapper = styled.div`
  
`;

export default Account;
