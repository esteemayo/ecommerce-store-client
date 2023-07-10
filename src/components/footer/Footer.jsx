'use client';

import styled from 'styled-components';
import { useMemo } from 'react';

import FooterText from './FooterText';
import MenuItem from './MenuItem';
import SocialIcon from './SocialIcon';
import Heading from './Heading';
import FooterLink from './FooterLink';

import {
  customerLinks,
  discoverLinks,
  footerLinks,
  social,
  storeLinks,
} from '@/data';

const Footer = () => {
  const year = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);

  return (
    <Container>
      <Wrapper>
        <FooterLeft>
          <LinkContainer>
            <Left>
              <Heading title='About the store' />
              <MenuItem data={storeLinks} />
            </Left>
            <Center>
              <Heading title='Discover' />
              <MenuItem data={discoverLinks} />
            </Center>
            <Right>
              <Heading title='Customer care' />
              <MenuItem data={customerLinks} />
            </Right>
          </LinkContainer>
        </FooterLeft>
        <FooterRight>
          <FooterContainer>
            <SearchContainer>
              <SearchInput type='search' placeholder='Search store...' />
            </SearchContainer>
            <Heading title='Follow us' small />
            <SocialIcon data={social} />
          </FooterContainer>
        </FooterRight>
      </Wrapper>
      <FooterLink data={footerLinks} />
      <FooterText value={year} />
    </Container>
  );
}

const Container = styled.footer`
  width: 100vw;
  padding: 8rem 0;
  background-color: var(--clr-secondary-green);
  color: var(--clr-white);

  @media only screen and (max-width: 64em) {
    padding: 6rem 8rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media only screen and (max-width: 23.75em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  align-items: start;
  gap: 5rem;

  @media only screen and (max-width: 64em) {
   flex-direction: column;
   align-items: center;
  }
`;

const FooterLeft = styled.div`
  flex: 3;

  @media only screen and (max-width: 64em) {
    width: 100%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
  }
`;

const Left = styled.div``;

const ListContainer = styled.ul`
  list-style: none;

  @media only screen and (max-width: 37.5em) {
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.5rem;
    column-gap: 1.5rem;
  }
`;

const Center = styled.div``;

const Right = styled.div``;

const FooterRight = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 64em) {
    align-items: center;
  }

  @media only screen and (max-width: 37.5em) {
    align-items: flex-start;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  background-color: var(--clr-white);
  border-radius: 0.5rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 64em) {
    width: 30%;
  }

  @media only screen and (max-width: 37.5em) {
    display: none;
  }
`;

const SearchInput = styled.input`
  display: inline-block;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 0 1rem;
  background-color: transparent;
  color: #999;
  caret-color: var(--caret-light);

  &::placeholder {
    font-size: 1.4rem;
    color: #aaa;
  }
`;

export default Footer;
