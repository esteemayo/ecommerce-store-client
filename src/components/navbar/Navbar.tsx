'use client';

import styled from 'styled-components';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useState } from 'react';

import { useSubmenu } from '@/hooks/useSubmenu';
import useSearchModal from '@/hooks/useSearchModal';
import { useSidebar } from '@/hooks/useSidebar';

import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';
import LoginButton from './LoginButton';
import CartQuantity from './CartQuantity';
import MenuItem from './MenuItem';
import ToggleButton from './ToggleButton';
import SearchIcon from './SearchIcon';

import { navLinks } from '@/data';
import { useCartStore } from '@/hooks/useCartStore';

const Navbar = () => {
  const searchModal = useSearchModal();
  const qty = useCartStore((state) => state.qty);

  const openSubmenu = useSubmenu((state) => state.openSubmenu);
  const onOpen = useSidebar((state) => state.onOpen);
  const closeSubmenu = useSubmenu((state) => state.closeSubmenu);

  const [isHover, setIsHover] = useState(false);

  const user = true;

  const handleMouseOver = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  const displaySubmenu = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
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

      openSubmenu(submenu);
    },
    [openSubmenu]
  );

  const handleSubmenu = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (!e.target.classList.contains('link-btn')) {
        closeSubmenu();
      }
    },
    [closeSubmenu]
  );

  return (
    <Container onMouseOver={handleSubmenu}>
      <Wrapper>
        <LogoBox>
          <Logo />
        </LogoBox>
        <ToggleButton icon={faBars} onClick={onOpen} />
        <ListContainer>
          {navLinks.map((item) => {
            const { id, text } = item;
            return <MenuItem key={id} label={text} onMouse={displaySubmenu} />;
          })}
        </ListContainer>
        <ButtonContainer>
          <DarkModeToggle />
          <SearchIcon onOpen={searchModal.onOpen} />
          {!user ? (
            <LoginButton
              isHover={isHover}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            />
          ) : (
            <CartQuantity amount={qty} />
          )}
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav`
  width: 100vw;
  height: 5rem;
  background-color: ${({ theme }) => theme.bgNav};
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

  @media only screen and (min-width: 50em) {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;

const ButtonContainer = styled.div`
  display: none;

  @media only screen and (min-width: 50em) {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;

export default Navbar;
