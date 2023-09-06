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
  font-weight: ${({ type }) => type !== 'small' ? '500' : '400'};
  font-size: ${({ type }) => type !== 'small' ? ' 2.5rem' : '2rem'};
  text-transform: ${({ type }) => type !== 'small' && 'capitalize'};
  text-align: center;
  color: ${({ theme }) => theme.textFormHeader};
`;

Heading.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Heading;
