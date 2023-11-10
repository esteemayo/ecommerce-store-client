'use client';

import styled from 'styled-components';
import dynamic from 'next/dynamic';

import usePasswordModal from '@/hooks/usePasswordModal';
import useFileModal from '@/hooks/useFileModal';
import useAccountModal from '@/hooks/useAccountModal';
import { useSubmenu } from '@/hooks/useSubmenu';
import useEmailModal from '@/hooks/useEmailModal';

import Heading from './Heading';

const AccountHead = dynamic(() => import('./AccountHead'), { ssr: false });
const DeactivateAccount = dynamic(() => import('./DeactivateAccount'), {
  ssr: false,
});
const AccountUpload = dynamic(() => import('./AccountUpload'), { ssr: false });

const Account = () => {
  const closeSubmenu = useSubmenu((state) => state.closeSubmenu);
  const emailModal = useEmailModal();
  const passwordModal = usePasswordModal();
  const fileModal = useFileModal();
  const accountModal = useAccountModal();

  const user = false;

  return (
    <Container onMouseOver={closeSubmenu}>
      <ContainerBox>
        <Wrapper>
          <Heading />
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
                  <AccountUpload onOpen={fileModal.onOpen} currentUser={user} />
                </Right>
              </AccountInfo>
            </AccountWrapper>
          </AccountContainer>
        </Wrapper>
      </ContainerBox>
    </Container>
  );
};

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
