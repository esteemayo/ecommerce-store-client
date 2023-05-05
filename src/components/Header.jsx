import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <Heading>{title}</Heading>
  );
}

const Heading = styled.h1`
  font-family: inherit;
  font-weight: 600;
  color: var(--clr-secondary-green);
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    display: inline-block;
    width: 4rem;
    height: 3px;
    background-color: var(--clr-secondary-green);
    border-radius: 3px;
  }
`;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
