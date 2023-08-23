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
  width: 100%;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const FormGroup = styled.div`
  flex: 3;
  padding: 1rem 0;
  border: 3px solid ${({ theme }) => theme.textScroll};
  border-right: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  svg {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.textScroll};
    cursor: text;
  }
`;

const Input = styled.input`
  display: inline-block;
  border: none;
  outline: none;
  width: 100%;
  font-family: inherit;
  font-size: 1.5rem;
  padding-left: 4.25rem;
  background-color: transparent;
  color: #999;
  caret-color: ${({ theme }) => theme.inputCaret};

  &::-webkit-input-placeholder {
    font-size: 1.4rem;
    color: #bbb;
    letter-spacing: 1px;
  }
`;

const Button = styled.button`
  flex: 1;
  border: 3px solid ${({ theme }) => theme.textScroll};
  border-left: none;
  font-weight: 500;
  font-size: 1.45rem;
  padding: 1.49rem 0;
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
  background-size: 250%;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  outline-color:  ${({ theme }) => theme.btnOut};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-position: 100%;
  }
`;

export default Search;
