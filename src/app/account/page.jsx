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
                <InputContainer>
                  <Label htmlFor='name'>Your name</Label>
                  <Input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Name'
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor='username'>Your username</Label>
                  <Input
                    type='text'
                    id='username'
                    name='username'
                    placeholder='Username'
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor='email'>Email address</Label>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                  />
                  <ButtonContainer>
                    <Button type='button'>Change</Button>
                  </ButtonContainer>
                </InputContainer>
                <InputContainer>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='********'
                  />
                  <ButtonContainer>
                    <Button type='button'>Change</Button>
                  </ButtonContainer>
                </InputContainer>
                <DeleteContainer>
                  <DeleteHeader>Delete your account</DeleteHeader>
                  <DeleteWarning>
                    You will receive an email to confirm your decision.
                    Please note, that all your data will be permanently erased.
                  </DeleteWarning>
                </DeleteContainer>
              </Left>
              <Right>
                <AvatarContainer>

                </AvatarContainer>
                <FileButton type='button'>Upload a picture</FileButton>
              </Right>
            </AccountInfo>
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
  padding: 2rem 3rem;
`;

const AccountInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;
`;

const Left = styled.div`
  flex: 2;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 10rem;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;
  color: #888;
`;

const Input = styled.input`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 0.9rem 1rem;
  background-color: transparent;
  color: #999;
  border: 2px solid #f3f4f6;
  border-radius: 0.5rem;
  outline-color: #eee;
  caret-color: var(--caret-light);

  &::-webkit-input-placeholder {
    font-weight: 300;
    font-size: 1.5rem;
    color: #bbb;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.2rem;
  background-color: transparent;
  color: var(--clr-primary-green);
  outline-offset: 3px;
  outline-color: #ccc;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;

const AvatarContainer = styled.div`
  
`;

const FileButton = styled.button`
  
`;

const DeleteHeader = styled.h2`
  
`;

const DeleteWarning = styled.p`
  
`;

export default Account;
