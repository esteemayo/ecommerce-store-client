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
  background-color: transparent;
  color: ${({ theme }) => theme.bgModeIcon};
`;

export default SearchIcon;
