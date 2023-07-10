'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { calcTotals } from '@/features/cart/cartSlice';
import { closeSubmenu, openSidebar, openSubmenu } from '@/features/submenu/submenuSlice';

import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';
import LoginButton from './LoginButton';
import CartQuantity from './CartQuantity';
import MenuItem from './MenuItem';

const Navbar = () => {
  const user = true;
  const dispatch = useDispatch();
  const { cart, qty } = useSelector((state) => ({ ...state.cart }));

  const [isHover, setIsHover] = useState(false);

  const displaySubmenu = useCallback((e) => {
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
    if (!e.target.classList.contains('link-btn')) {
      dispatch(closeSubmenu());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(calcTotals());
  }, [cart, dispatch]);

  return (
    <Container onMouseOver={handleSubmenu}>
      <Wrapper>
        <LogoBox>
          <Logo />
        </LogoBox>
        <ToggleButton onClick={() => dispatch(openSidebar())}>
          <FontAwesomeIcon icon={faBars} />
        </ToggleButton>
        <ListContainer>
          <MenuItem label='products' onMouse={displaySubmenu} />
          <MenuItem label='sells' onMouse={displaySubmenu} />
          <MenuItem label='manage' onMouse={displaySubmenu} />
          <MenuItem label='integrate' onMouse={displaySubmenu} />
          <MenuItem label='resources' onMouse={displaySubmenu} />
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

const ToggleButton = styled.button`
  display: inline-block;
  border: none;
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  color: var(--clr-white);
  margin-right: 2rem;
  transition: all 0.5s ease;

  &:hover {
    transform: rotate(90deg);
  }

  svg {
    width: 3rem;
    height: 3rem;
    fill: inherit;
  }

  @media only screen and (min-width:50em){
    display: none;
  }
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
