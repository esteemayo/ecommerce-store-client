import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = ({ small, type, title }) => {
  return (
    <StyledHeading small={small} type={type}>
      {title}
    </StyledHeading>
  );
}

const StyledHeading = styled.h1`
  display: block;
  font-weight: ${({ type }) => type !== 'login' ? '500' : '400'};
  font-size: ${({ type }) => type !== 'login' ? ' 2.5rem' : '2rem'};
  text-transform: ${({ small }) => !small && 'capitalize'};
  text-align: center;
  color: ${({ theme }) => theme.textFormHeader};
`;

Heading.propTypes = {
  small: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Heading;
