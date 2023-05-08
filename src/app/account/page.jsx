'use client';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

import Modal from '@/components/Modal';
import FileUploadModal from '@/components/FileUploadModal';
import UpdateData from '@/components/UpdateData';
import UpdatePassword from '@/components/UpdatePassword';

const Account = () => {
  const [isPassword, setIsPassword] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isFileUpload, setIsFileUpload] = useState(false);

  const user = false;

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
                    <Button type='button' onClick={() => setIsEmailOpen(true)}>Change</Button>
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
                    <Button type='button' onClick={() => setIsPassword(true)}>Change</Button>
                  </ButtonContainer>
                </InputContainer>
                <DeleteContainer>
                  <DeleteHeader>Delete your account</DeleteHeader>
                  <DeleteWarning>
                    You will receive an email to confirm your decision.
                    Please note, that all your data will be permanently erased.
                  </DeleteWarning>
                  <DeleteButton type='button'>Delete account</DeleteButton>
                </DeleteContainer>
              </Left>
              <Right>
                <AvatarContainer>
                  {user ? (
                    <Image
                      src='/img/user-9.jpg'
                      width={100}
                      height={100}
                      alt=''
                    />
                  ) : (
                    <FontAwesomeIcon icon={faUser} />
                  )}
                </AvatarContainer>
                <FileButton type='button' onClick={() => setIsFileUpload(true)}>Upload a picture</FileButton>
              </Right>
            </AccountInfo>
          </AccountWrapper>
        </AccountContainer>
      </Wrapper>
      <FileUploadModal
        openModal={isFileUpload}
        closeModal={setIsFileUpload}
      />
      <Modal
        title='Change your password'
        openModal={isPassword}
        closeModal={setIsPassword}
      >
        <UpdatePassword onCancel={() => setIsPassword(false)} />
      </Modal>
      <Modal
        title='Change your email address'
        openModal={isEmailOpen}
        closeModal={setIsEmailOpen}
      >
        <UpdateData onCancel={() => setIsEmailOpen(false)} />
      </Modal>
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
  flex: 1.5;
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

const DeleteContainer = styled.div`
  margin-top: 3rem;
`;

const DeleteHeader = styled.h2`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.385rem;
  color: var(--clr-primary-green);
`;

const DeleteWarning = styled.p`
  font-size: 1.3rem;
  color: #999;
  line-height: 1.2;
  word-wrap: break-word;
`;
2
const DeleteButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0.5rem 2rem;
  background-color: transparent;
  color: #de0a0a;
  border: 1px solid #de0a0a;
  border-radius: 0.5rem;
  outline-color: #e92222;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(222, 10, 10, 0.1);
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarContainer = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: #d5dae7;
  border-radius: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  img {
    width: 10rem;
    height: 10rem;
    display: block;
    object-fit: cover;
    border-radius: 3.5rem;
  }

  svg {
    font-size: 5rem;
    color: var(--clr-white);
  }
`;

const FileButton = styled.button`
  display: inline-block;
  border: none;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 1.2rem 3.5rem;
  background-color: #6d857f;
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #89a8a0 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #85beae;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-position: 100%;
  }
`;

export default Account;
