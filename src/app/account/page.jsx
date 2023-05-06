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
  padding: 6rem 0;
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
  line-height: 1.2;
  letter-spacing: 0.5px;
`;

const HeadingText = styled.p`
  font-size: 1.35rem;
  line-height: 1.3;
  letter-spacing: 0.3px;
`;

const AccountContainer = styled.div`
  
`;

const AccountWrapper = styled.div`
  
`;

export default Account;
