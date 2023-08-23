import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    console.log({ searchQuery });
  }, [searchQuery]);

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <FormGroup>
          <Input
            type='search'
            value={searchQuery}
            placeholder='Search for a product'
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </FormGroup>
        <Button type='submit'>Search</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem 0;
`;

const Form = styled.form`
  background-color: crimson;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  position: relative;
`;

const FormGroup = styled.div`
  flex: 2;

  svg {
    position: absolute;
    left: 0;
  }
`;

const Input = styled.input`
  height: 100%;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  height: 100%;
  background-color: ${({ theme }) => theme.bgBtn};
  color: ${({ theme }) => theme.textBtn};
  background-image: ${({ theme }) => css`
    linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      ${theme.bgImgBtn} 50%
    );
  `};
  background-size: 220%;
  outline-color:  ${({ theme }) => theme.btnOut};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-position: 100%;
  }
`;

export default Search;
