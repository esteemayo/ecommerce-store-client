import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = ({ title }) => {
  return <STyledHeading>{title}</STyledHeading>;
}

const STyledHeading = styled.h1`
  display: block;
  font-weight: 500;
  font-size: 2.5rem;
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.textFormHeader};
`;

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
