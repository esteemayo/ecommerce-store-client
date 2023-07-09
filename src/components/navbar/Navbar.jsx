'use client';

import styled from 'styled-components';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useCallback, useEffect, useState } from 'react';
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { calcTotals } from '@/features/cart/cartSlice';
import { closeSubmenu, openSidebar, openSubmenu } from '@/features/submenu/submenuSlice';

import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';
import CartQuantity from './CartQuantity';

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
          <ListItem>
            <Button
              type='button'
              className='link-btn'
              onMouseOver={displaySubmenu}
            >
              products
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type='button'
              className='link-btn'
              onMouseOver={displaySubmenu}
            >
              sells
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type='button'
              className='link-btn'
              onMouseOver={displaySubmenu}
            >
              manage
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type='button'
              className='link-btn'
              onMouseOver={displaySubmenu}
            >
              integrate
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type='button'
              className='link-btn'
              onMouseOver={displaySubmenu}
            >
              resources
            </Button>
          </ListItem>
        </ListContainer>
        <ButtonContainer>
          <DarkModeToggle />
          {!user ? (
            <LoginButton
              onMouseOver={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Link href='/login' passHref>
                Sign in
                &nbsp;
                {isHover ? <ArrowForwardIcon /> : <ArrowForwardIosIcon />}
              </Link>
            </LoginButton>
          ) : (
            <CartWrapper>
              <Link href='/cart' passHref>
                <FontAwesomeIcon icon={faBagShopping} />
                <CartTotal>{qty}</CartTotal>
              </Link>
            </CartWrapper>
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

const ListItem = styled.li``;

const Button = styled.button`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
  font-size: 1.5rem;
  text-transform: capitalize;
  background-color: transparent;
  color: var(--clr-white);
  outline-color: var(--clr-primary-green);

  &:hover {
    opacity: 0.5;
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

const LoginButton = styled.button`
  border: none;
  display: inline-block;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0.75rem 2rem;
  background-color: var(--clr-primary-green);
  color: var(--clr-white);
  border-radius: 10rem;
  outline-color: var(--clr-primary-green);
  cursor: pointer;
  transition: all 0.2s ease;
    
  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      color: currentColor;
      outline-color: var(--clr-primary-green);
      position: relative;
    }
  
    svg {
      position: absolute;
      top: 3px;
      right: -1rem;
      font-size: 1.25rem;
      fill: currentColor;
      transition: 150ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }
  }
  
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.4);
    opacity: 1;
  }
`;

const CartWrapper = styled.div`
  position: relative;

  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: var(--clr-white);
      outline-color: var(--clr-primary-green);
    }

    &:active {
      color: currentColor;
    }

    svg {
      font-size: 2.3rem;
      fill: currentColor;
    }
  }
`;

const CartTotal = styled.span`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  background-color: var(--clr-tertiary-green);
  color: var(--clr-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0.7rem;
  right: -1rem;
  cursor: pointer;
`;

export default Navbar;
