'use client';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import FileUploadModal from '@/components/modals/FileUploadModal';
import ClientOnly from '@/components/ClientOnly';
import { closeSubmenu } from '@/features/submenu/submenuSlice';

import usePasswordModal from '@/hooks/usePasswordModal';
import useFileModal from '@/hooks/useFileModal';
import useAccountModal from '@/hooks/useAccountModal';
import useEmailModal from '@/hooks/useEmailModal';

import AccountHead from './AccountHead';
import DeactivateAccount from './DeactivateAccount';
import AccountUpload from './AccountUpload';

const Account = () => {
  const dispatch = useDispatch();

  const emailModal = useEmailModal();
  const fileModal = useFileModal();
  const passwordModal = usePasswordModal();
  const accountModal = useAccountModal();

  const user = false;

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
                    <AccountHead
                      onOpen={emailModal.onOpen}
                      onAction={passwordModal.onOpen}
                    />
                    <DeactivateAccount onOpen={accountModal.onOpen} />
                  </Left>
                  <Right>
                    <AccountUpload
                      onOpen={fileModal.onOpen}
                      currentUser={user}
                    />
                  </Right>
                </AccountInfo>
              </AccountWrapper>
            </AccountContainer>
          </Wrapper>
        </ContainerBox>
        <FileUploadModal
          isOpen={fileModal.isOpen}
          onClose={fileModal.onClose}
        />
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

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 43.75em) {
    width: 100%;
  }
`;

export default Account;
