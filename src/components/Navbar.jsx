'use client';
import styled from 'styled-components';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { closeSubmenu, openSidebar, openSubmenu } from '@/features/submenu/submenuSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);

  const displaySubmenu = (e) => {
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
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      dispatch(closeSubmenu());
    }
  };

  return (
    <Container onMouseOver={handleSubmenu}>
      <Wrapper>
        <LogoBox>
          <Link href='/' passHref>
            <Image
              src='/img/logo.png'
              width={100}
              height={100}
              priority
              alt=''
            />
          </Link>
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
          <CartWrapper>
            <Link href='/cart' passHref>
              <FontAwesomeIcon icon={faBagShopping} />
            </Link>
            <CartTotal>2</CartTotal>
          </CartWrapper>
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
`;

const LogoBox = styled.div`
  a {
    &:link,
    &:visited {
      text-decoration: none;
    }

    & > img {
      display: block;
      object-fit: cover;
    }
  }
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

  &:hover {
    opacity: 0.5;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const LoginButton = styled.button`
  display: none;

  @media only screen and (min-width: 50em){
    border: none;
    display: inline-block;
    font-weight: 600;
    font-size: 1.5rem;
    padding: 0.75rem 2rem;
    background-color: var(--clr-primary-green);
    color: var(--clr-white);
    border-radius: 10rem;
    cursor: pointer;
    transition: all 0.2s ease;
    
    a {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        color: currentColor;
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
  }
`;

const CartWrapper = styled.div`
  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: var(--clr-white);
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

`;

export default Navbar;
