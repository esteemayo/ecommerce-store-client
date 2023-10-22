'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useMemo } from 'react';

import { useSearch } from '@/hooks/useSearch';
import { useSidebar } from '@/hooks/useSidebar';

import Heading from './Heading';
import SidebarMenu from './SidebarMenu';
import Search from './Search';

import { sublinks } from '@/data';

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => ({ ...state.submenu }));
  const { closeSidebarHandler } = useSidebar();
  const { searchQuery, handleChange, handleSearch } = useSearch();

  const activeSidebar = useMemo(() => {
    return isSidebarOpen ? 'show' : '';
  }, [isSidebarOpen]);

  return (
    <Container type={activeSidebar}>
      <Wrapper>
        <Button type='button' onClick={closeSidebarHandler}>
          <FontAwesomeIcon icon={faXmark} />
        </Button>
        <SidebarMenu items={sublinks} />
        <SearchContainer>
          <Heading title='Search products' />
          <Search
            query={searchQuery}
            onChange={handleChange}
            onSubmit={handleSearch}
          />
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
  display: ${({ type }) => type === 'show' ? 'block' : 'none'};
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  z-index: ${({ type }) => type === 'show' ? 2000 : -1};

  @media only screen and (min-width: 50em) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 100%;
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

const Button = styled.button`
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

export default Sidebar;
