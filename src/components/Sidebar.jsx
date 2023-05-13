import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import { sublinks } from '@/data';
import { closeSidebar } from '@/features/submenu/submenuSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => ({ ...state.submenu }));

  return (
    <Container type={isSidebarOpen ? 'show' : ''}>
      <Wrapper>
        <CloseButton onClick={() => dispatch(closeSidebar())}>
          <FontAwesomeIcon icon={faXmark} />
        </CloseButton>
        <LinksContainer>
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <LinksWrapper key={index}>
                <Title>{page}</Title>
                <ListsContainer>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <ListItem key={index}>
                        <Link href={url} passHref>
                          {icon}
                          &nbsp;
                          {label}
                        </Link>
                      </ListItem>
                    );
                  })}
                </ListsContainer>
              </LinksWrapper>
            );
          })}
        </LinksContainer>
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
  z-index: ${({ type }) => type === 'show' ? 2 : -1};
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
  background-color: var(--clr-white);
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  position: relative;

  @media only screen and (max-width: 31.25em) {
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
  color: hsl(210, 22%, 49%);
  cursor: pointer;

  svg {
    color: currentColor;
  }
`;

const LinksContainer = styled.div`
  margin-top: 3rem;

  @media only screen and (max-width: 31.25em) {
    padding: 0 5rem;
  }
`;

const LinksWrapper = styled.article`
  margin-bottom: 1.7rem;
`;

const Title = styled.h4`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const ListsContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.25rem;
`;

const ListItem = styled.li`
  font-size: 1.4rem;

  & > * {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: capitalize;
      color: hsl(209, 61%, 16%);
      outline-color: #777;
      transition: all 0.2s ease;
    }

    &:hover {
      color: var(--clr-secondary-green);
    }
    
    svg {
      color: var(--clr-secondary-green);
    }
  }
`;

export default Sidebar;
