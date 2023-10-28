import styled from 'styled-components';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchIcon = ({ onOpen }) => {
  return (
    <Container onClick={onOpen}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </Container>
  );
}

const Container = styled.button`
  display: inline-block;
  border: none;
  font-size: 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.bgToggleModeIcon};
  outline-color: var(--clr-primary-green);
  cursor: pointer;

  svg {
    font-size: inherit;
    color: currentColor;
  }
`;

SearchIcon.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default SearchIcon;