'use client';

import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import Heading from './Heading';
import MenuItem from './MenuItem';

const Submenu = () => {
  const { isSubmenuOpen, location, page: { page, links } } = useSelector(
    (state) => ({ ...state.submenu })
  );

  const containerRef = useRef();
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = containerRef.current;
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns('col-3');
    }

    if (links.length === 4) {
      setColumns('col-4');
    }

    if (links.length > 4) {
      setColumns('col-3');
    }
  }, [links, location]);

  return (
    <Container type={isSubmenuOpen ? 'show' : ''} ref={containerRef}>
      <Heading title={page} />
      <ListContainer columns={columns}>
        {links?.map((link, index) => {
          return <MenuItem key={index} {...link} />;
        })}
      </ListContainer>
    </Container>
  );
}

const Container = styled.aside`
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 1rem;
  position: absolute;
  left: 50%;
  top: 5rem;
  transform: translateX(-50%);
  display: ${({ type }) => type === 'show' ? 'block' : 'none'};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  box-shadow: ${({ theme }) => theme.boxSub};
  z-index: 3000;

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid ${({ theme }) => theme.bg};
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem 2rem;
  width: ${({ columns }) => columns === 'col-2' && '20rem'};
  width: ${({ columns }) => columns === 'col-3' && '30rem'};
  width: ${({ columns }) => columns === 'col-4' && '50rem'};
`;

export default Submenu;
