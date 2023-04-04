'use client';
import styled from 'styled-components';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container>
      <Wrapper>
        <LogoBox>Logo</LogoBox>
        <ToggleButton>###</ToggleButton>
        <ListContainer>
          <ListItem>
            <Button
              type='button'
              className='link-btn'
            >
              products
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type='button'
              className='link-btn'
            >
              products
            </Button>
          </ListItem>
          <ListItem>
            <Button
              type='button'
              className='link-btn'
            >
              products
            </Button>
          </ListItem>
        </ListContainer>
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
      </Wrapper>
    </Container>
  );
}

const Container = styled.nav`
  width: 100vw;
  height: 5rem;
  background-color: #e4b2e6;
  color: #fff;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  
`;

const ToggleButton = styled.button`
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
    gap: 5rem;
  }
`;

const ListItem = styled.li`
  
`;

const Button = styled.button`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  text-transform: capitalize;
  background-color: transparent;
  color: #fff;
  cursor: default;
`;

const LoginButton = styled.button`
  border: none;
  display: inline-block;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0.75rem 2rem;
  background-color: #f626fd;
  color: #fff;
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
      transition: 150ms cubic-bezier(0.22, 0.61, 0.36, 1);
    }
  }

  &:hover {
    background-color: #f887fc;
    background-color: hsla(0, 0%, 100%, 0.4);
    opacity: 1;
  }
`;

export default Navbar;
