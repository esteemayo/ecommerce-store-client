'use client';
import styled from 'styled-components';

const Account = () => {
  return (
    <Container>
      <Wrapper>
        <HeadingContainer>
          <Heading>Account settings</Heading>
          <HeadingText>Edit your name, avatar etc.</HeadingText>
        </HeadingContainer>
        <AccountContainer>
          <AccountWrapper>
            <AccountInfo>
              <Left>
                <FormGroup>
                  <FormLabel htmlFor='name'>Your name</FormLabel>
                  <FormInput
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Name'
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor='email'>Your email</FormLabel>
                  <FormInput
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor='username'>Your username</FormLabel>
                  <FormInput
                    type='text'
                    id='username'
                    name='username'
                    placeholder='Username'
                  />
                </FormGroup>
              </Left>
              <Right>
                <AvatarContainer>

                </AvatarContainer>
                <FileButton type='button'>Upload a picture</FileButton>
              </Right>
            </AccountInfo>
            <DeleteContainer>
              <DeleteHeader>Delete your account</DeleteHeader>
              <DeleteWarning>
                You will receive an email to confirm your decision.
                Please note, that all your data will be permanently erased.
              </DeleteWarning>
            </DeleteContainer>
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
  max-width: 80rem;
  margin: 0 auto;
`;

const HeadingContainer = styled.div`
  margin-bottom: 1.2rem;
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
  padding: 3rem 5rem;
  box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -webkit-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  -moz-box-shadow: 2px 0.4rem 1rem 1px rgba(201, 201, 201, 0.47);
  border-radius: 1rem;
`;

const AccountWrapper = styled.div`
  
`;

const AccountInfo = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Left = styled.div`
  flex: 2;
`;

const FormGroup = styled.div`
  
`;

const FormLabel = styled.label`
  
`;

const FormInput = styled.input`
  
`;

const Right = styled.div`
  flex: 1;
`;

const AvatarContainer = styled.div`
  
`;

const FileButton = styled.button`
  
`;

const DeleteContainer = styled.div`
  
`;

const DeleteHeader = styled.h2`
  
`;

const DeleteWarning = styled.p`
  
`;

export default Account;
