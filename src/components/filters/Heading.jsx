import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = ({ title }) => {
  return <StyledHeading>{title}</StyledHeading>;
}

const StyledHeading = styled.h1`
  display: inline-block;
  font-weight: 600;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
