'use client';

import styled from 'styled-components';

import AccountUpload from './AccountUpload';
import AccountHead from './AccountHead';
import DeactivateAccount from './DeactivateAccount';

import { AccountInfoProps } from '@/types';

const AccountInfo = ({
  user,
  accountModal,
  emailModal,
  fileModal,
  passwordModal,
}: AccountInfoProps) => {
  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div`
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

export default AccountInfo;
