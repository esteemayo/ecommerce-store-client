import styled from 'styled-components';
import PropTypes from 'prop-types';

const AuthError = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
}

const ErrorMessage = styled.span`
  font-size: 1.3rem;
  color: var(--clr-secondary-red);
  margin-top: 1px;
`;

export default AuthError;
