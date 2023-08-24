import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import { faClock, faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import { getFromStorage, setToStorage } from '@/utils';

const getAllHistories = () => {
  const histories = getFromStorage('histories')
  return histories ?? [];
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [histories, setHistories] = useState(getAllHistories());

  const handleDelete = useCallback((id) => {
    setHistories((prev) => [...prev].filter((item) => item.id !== id));
  }, []);

  const handleSearch = useCallback(() => {
    console.log({ searchQuery });
  }, [searchQuery]);

  const handleHistory = useCallback(() => {
    const data = {
      id: new Date().getTime(),
      query: searchQuery,
    };

    setHistories((prev) => [data, ...prev]);
  }, [searchQuery]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    handleSearch();
    handleHistory();
    setSearchQuery('');
  }, [handleSearch, handleHistory]);

  useEffect(() => {
    setToStorage('histories', histories);
  }, [histories]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
      {!!histories.length > 0 && histories.map((item) => {
        const { id, query } = item;
        return (
          <Wrapper key={id}>
            <Left>
              <FontAwesomeIcon icon={faClock} />
            </Left>
            <History>
              <StyledLink href='#' passHref>{query}</StyledLink>
            </History>
            <Remove onClick={() => handleDelete(id)}>
              <FontAwesomeIcon icon={faTimes} />
            </Remove>
          </Wrapper>
        );
      })}
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
  margin-bottom: 2rem;
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
  outline: none;
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
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-position: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  color: ${({ theme }) => theme.textProdCard};
  position: relative;
  margin-bottom: 0.5rem;
`;

const Left = styled.div`
  svg {
    font-size: 1.75rem;
    color: inherit;
  }
`;

const History = styled.div``;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: currentColor;
`;

const Remove = styled.button`
  display: inline-block;
  border: none;
  font-size: 1.75rem;
  background-color: transparent;
  color: currentColor;
  outline-offset: 2px;
  cursor: pointer;

  position: absolute;
  right: 0;

  svg {
    font-size: inherit;
    color: inherit;
  }
`;

export default Search;
