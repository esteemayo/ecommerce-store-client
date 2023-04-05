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
          <Title>products</Title>
          <ListsContainer>
            <ListItem></ListItem>
          </ListsContainer>
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
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
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

const LinksWrapper = styled.article`
  
`;

const LinksContainer = styled.div`
  
`;

const Title = styled.h4`
  
`;

const ListsContainer = styled.ul`
  
`;

const ListItem = styled.li`
  
`;

export default Sidebar;
