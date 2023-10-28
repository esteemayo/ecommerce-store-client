import styled from 'styled-components';
import PropTypes from 'prop-types';

const AccountEmail = ({ email }) => {
  return (
    <Container>
      Your current email address is {' '}
      <EmailAddress>{email}</EmailAddress>
    </Container>
  );
}

const Container = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text};
  line-height: 1;
`;

const EmailAddress = styled.span`
  display: block;
  font-weight: 600;
`;

AccountEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default AccountEmail;
