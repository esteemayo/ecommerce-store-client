'use client';

import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { closeSubmenu, openSidebar, openSubmenu } from '@/features/submenu/submenuSlice';

import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';
import LoginButton from './LoginButton';
import CartQuantity from './CartQuantity';
import MenuItem from './MenuItem';
import ToggleButton from './ToggleButton';

import { navLinks } from '@/data';

const Navbar = () => {
  const user = true;
  const dispatch = useDispatch();
  const { qty } = useSelector((state) => ({ ...state.cart }));

  const [isHover, setIsHover] = useState(false);

  const displaySubmenu = useCallback((e) => {
    e.stopPropagation();

    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();

    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom;

    const submenu = {
      page,
      coordinates: {
        center,
        bottom,
      },
    };

    dispatch(openSubmenu(submenu));
  }, [dispatch]);

  const handleSubmenu = useCallback((e) => {
    e.stopPropagation();

    if (!e.target.classList.contains('link-btn')) {
      dispatch(closeSubmenu());
    }
  }, [dispatch]);

  return (
    <Container onMouseOver={handleSubmenu}>
      <Wrapper>
        <LogoBox>
          <Logo />
        </LogoBox>
        <ToggleButton
          icon={faBars}
          onClick={() => dispatch(openSidebar())}
        />
        <ListContainer>
          {navLinks.map((item) => {
            const { id, text } = item;
            return (
              <MenuItem
                key={id}
                label={text}
                onMouse={displaySubmenu}
              />
            );
          })}
        </ListContainer>
        <ButtonContainer>
          <DarkModeToggle />
          {!user ? (
            <LoginButton isHover={isHover} onMouse={setIsHover} />
          ) : (
            <CartQuantity amount={qty} />
          )}
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.nav`
  width: 100vw;
  height: 5rem;
  background-color: var(--clr-secondary-green);
  color: var(--clr-white);
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 64em) {
    padding: 0 8rem;
  }

  @media only screen and (max-width: 31.25em) {
    padding: 0 4rem;
  }

  @media only screen and (max-width: 28.75em) {
    padding: 0;
  }
`;

const LogoBox = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.ul`
  display: none;

  @media only screen and (min-width:50em){
    list-style: none;
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;

const ButtonContainer = styled.div`
  display: none;

  @media only screen and (min-width: 50em){
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;

export default Navbar;
