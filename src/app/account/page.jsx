'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import Modal from '@/components/modals/Modal';
import FileUploadModal from '@/components/modals/FileUploadModal';

import UpdateData from '@/components/accounts/UpdateData';
import UpdatePassword from '@/components/accounts/UpdatePassword';
import DeleteAccount from '@/components/accounts/DeleteAccount';

import ClientOnly from '@/components/ClientOnly';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

const Account = () => {
  const dispatch = useDispatch();

  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isFileUploadOpen, setIsFileUploadOpen] = useState(false);

  const user = false;

  const handleOpenEmail = useCallback(() => {
    setIsEmailOpen(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsEmailOpen(false);
  }, []);

  const openHandler = useCallback(() => {
    setIsPasswordOpen(true);
  }, []);

  const closeHandler = useCallback(() => {
    setIsPasswordOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsDeleteOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsDeleteOpen(false);
  }, []);

  return (
    <ClientOnly>
      <Container onMouseOver={() => dispatch(closeSubmenu())}>
        <ContainerBox>
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
                        <Button type='button' onClick={handleOpenEmail}>
                          Change
                        </Button>
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
                        <Button type='button' onClick={openHandler}>
                          Change
                        </Button>
                      </ButtonContainer>
                    </InputContainer>
                    <DeleteContainer>
                      <DeleteHeader>Delete your account</DeleteHeader>
                      <DeleteWarning>
                        You will receive an email to confirm your decision.
                        Please note, that all your data will be permanently erased.
                      </DeleteWarning>
                      <DeleteButton type='button' onClick={handleOpen}>
                        Delete account
                      </DeleteButton>
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
                    <FileButton type='button' onClick={() => setIsFileUploadOpen(true)}>
                      Upload a picture
                    </FileButton>
                  </Right>
                </AccountInfo>
              </AccountWrapper>
            </AccountContainer>
          </Wrapper>
        </ContainerBox>
        <FileUploadModal
          openModal={isFileUploadOpen}
          closeModal={setIsFileUploadOpen}
        />
        <Modal
          title='Change your password'
          isOpen={isPasswordOpen}
          onClose={closeHandler}
        >
          <UpdatePassword onCancel={closeHandler} />
        </Modal>
        <Modal
          title='Change your email address'
          isOpen={isEmailOpen}
          onClose={handleCancel}
        >
          <UpdateData onCancel={handleCancel} />
        </Modal>
        <Modal isOpen={isDeleteOpen} onClose={handleClose}>
          <DeleteAccount onCancel={handleClose} />
        </Modal>
      </Container>
    </ClientOnly>
  );
}

const Container = styled.main`
  width: 100vw;
  background-color: ${({ theme }) => theme.bg};
`;

const ContainerBox = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 10rem 0;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
    padding: 8rem 0;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (max-width: 23.75em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
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
  color: ${({ theme }) => theme.text};
  line-height: 1.2;
  letter-spacing: 0.5px;

  @media only screen and (max-width: 25em) {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

const HeadingText = styled.p`
  font-size: 1.35rem;
  color: ${({ theme }) => theme.textWlHeader};
  line-height: 1.3;
  letter-spacing: 0.3px;

  @media only screen and (max-width: 25em) {
    font-size: 1.25rem;
    letter-spacing: 0.5px;
  }
`;

const AccountContainer = styled.div`
  padding: 3rem 5rem;
  box-shadow: ${({ theme }) => theme.boxCart};
  -webkit-box-shadow: ${({ theme }) => theme.boxCart};
  -moz-box-shadow: ${({ theme }) => theme.boxCart};
  border-radius: 1rem;

  @media only screen and (max-width: 43.75em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media only screen and (max-width: 17.5em) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const AccountWrapper = styled.div`
  padding: 2rem 3rem;

  @media only screen and (max-width: 43.75em) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media only screen and (max-width: 31.25em) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const AccountInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;

  @media only screen and (max-width: 43.75em) {
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  flex: 1.5;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 10rem;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textLabel};
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
  outline-color: ${({ theme }) => theme.inputOut};
  caret-color: ${({ theme }) => theme.inputCaret};

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
  color: ${({ theme }) => theme.textAccBtn};
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
  color: ${({ theme }) => theme.textDelHeader};

  @media only screen and (max-width: 43.75em) {
    font-size: 1.58rem;
  }
`;

const DeleteWarning = styled.p`
  font-size: 1.3rem;
  color: #999;
  line-height: 1.2;
  word-wrap: break-word;

  @media only screen and (max-width: 43.75em) {
    font-size: 1.5rem;
  }
`;

const DeleteButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0.5rem 2rem;
  background-color: transparent;
  color: var(--clr-primary-red);
  border: 1px solid var(--clr-primary-red);
  border-radius: 0.5rem;
  outline-color: #e92222;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  @media only screen and (max-width: 43.75em) {
    font-size: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  &:hover {
    background-color: rgba(222, 10, 10, 0.1);
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 43.75em) {
    width: 100%;
  }
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
  background-color: var(--clr-primary-green);
  color: ${({ theme }) => theme.textBtn};
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    var(--clr-tertiary-green) 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #85beae;
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 43.75em) {
    padding: 1.2rem 2.5rem;
  }

  @media only screen and (max-width: 31.25em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  &:hover {
    background-position: 100%;
  }
`;

export default Account;
