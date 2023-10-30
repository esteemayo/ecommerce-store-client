import styled from 'styled-components';
import { FC } from 'react';

import { AccountEmailProps } from '@/types';

const AccountEmail: FC<AccountEmailProps> = ({ email }) => {
  return (
    <Container>
      Your current email address is <EmailAddress>{email}</EmailAddress>
    </Container>
  );
};

const Container = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text};
  line-height: 1;
`;

const EmailAddress = styled.span`
  display: block;
  font-weight: 600;
`;

export default AccountEmail;
