import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = ({ type, title }) => {
  return (
    <StyledHeading type={type}>
      {title}
    </StyledHeading>
  );
}

const StyledHeading = styled.h1`
  display: block;
  font-weight: ${({ type }) => type !== 'login' ? '500' : '400'};
  font-size: ${({ type }) => type !== 'login' ? ' 2.5rem' : '2rem'};
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.textFormHeader};
`;

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
