'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState, useMemo } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import { sublinks } from '@/data';
import { closeSidebar } from '@/features/submenu/submenuSlice';

import Heading from './Heading';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => ({ ...state.submenu }));

  const [query, setQuery] = useState('');

  const handleClick = useCallback(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    console.log(query);
  }, [query]);

  return (
    <Container type={isSidebarOpen ? 'show' : ''}>
      <Wrapper>
        <CloseButton type='button' onClick={handleClick}>
          <FontAwesomeIcon icon={faXmark} />
        </CloseButton>
        <SidebarMenu items={sublinks} />
        <SearchContainer>
          <Heading title='Search products' />
          <Form onSubmit={handleSearch}>
            <Input
              type='search'
              value={query}
              placeholder='Search items...'
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type='submit'>Search</Button>
          </Form>
        </SearchContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  transform: scale(${({ type }) => type === 'show' ? 1 : 0});
  z-index: ${({ type }) => type === 'show' ? 2000 : -1};
  transition: all 0.3s linear;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 50em) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 90vw;
  height: 97vh;
  max-width: 62rem;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  position: relative;

  @media only screen and (max-width: 31.5em) {
    width: 100vw;
    height: 100%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  outline: none;
  display: inline-block;
  font-size: 3rem;
  padding: 0 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textHeader};
  cursor: pointer;

  svg {
    color: currentColor;
  }
`;

const SearchContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 75%;
  padding: 1rem;
  background-color: transparent;
  color: #999;
  border: 2px solid #eef2ff;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  outline-color: #eee;
  caret-color: ${({ theme }) => theme.inputCaret};

  @media only screen and (max-width: 25rem) {
    width: 65%;
  }

  @media only screen and (max-width: 18.75rem) {
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
  }

  &::-webkit-input-placeholder {
    font-weight: 300;
    font-size: 1.5rem;
    color: #bbb;
  }
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  font-weight: 500;
  font-size: 1.45rem;
  padding: 1.4rem 2.5rem;
  background-color: var(--clr-primary-green);
  color: var(--clr-white);
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  outline-color: #85beae;
  cursor: pointer;

  @media only screen and (max-width: 18.75rem) {
    padding-top: 1.1rem;
    padding-bottom: 1.1rem;
  }
`;

export default Sidebar;
