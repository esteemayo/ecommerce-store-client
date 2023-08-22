import styled from 'styled-components';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchIcon = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </Container>
  );
}

const Container = styled.button`
  display: inline-block;
  border: none;
  font-size: 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.bgModeIcon};
  outline-color: var(--clr-primary-green);
  cursor: pointer;

  svg {
    font-size: inherit;
    color: currentColor;
  }
`;

export default SearchIcon;
