'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useMemo } from 'react';

import FooterText from './FooterText';
import MenuItem from './MenuItem';
import SocialIcon from './SocialIcon';

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
              <Heading>About the store</Heading>
              <ListContainer>
                {storeLinks.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <MenuItem
                      key={id}
                      url={url}
                      label={text}
                    />
                  );
                })}
              </ListContainer>
            </Left>
            <Center>
              <Heading>Discover</Heading>
              <ListContainer>
                {discoverLinks.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <MenuItem
                      key={id}
                      url={url}
                      label={text}
                    />
                  );
                })}
              </ListContainer>
            </Center>
            <Right>
              <Heading>Customer care</Heading>
              <ListContainer>
                {customerLinks.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <MenuItem
                      key={id}
                      url={url}
                      label={text}
                    />
                  );
                })}
              </ListContainer>
            </Right>
          </LinkContainer>
        </FooterLeft>
        <FooterRight>
          <FooterContainer>
            <SearchContainer>
              <SearchInput type='search' placeholder='Search store...' />
            </SearchContainer>
            <Header>Follow us</Header>
            <SocialIcon data={social} />
          </FooterContainer>
        </FooterRight>
      </Wrapper>
      <FooterLinkContainer>
        {footerLinks.map((link) => {
          const { id, url, text } = link;
          return (
            <LinkItem key={id}>
              <Link href={url} passHref>
                {text}
              </Link>
            </LinkItem>
          );
        })}
      </FooterLinkContainer>
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

const Header = styled.h4`
  font-weight: 300;
  font-size: 1.4rem;

  @media only screen and (max-width: 37.5em) {
    font-size: 1.7rem;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }
`;

const FooterLinkContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;

  @media only screen and (max-width: 26.875em) {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 37.5em) {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
  }
`;

const LinkItem = styled.li`
  font-size: 1.4rem;
  color: var(--clr-white);
  outline-color: var(--clr-primary-green);

  @media only screen and (max-width: 37.5rem) {
    font-size: 1.57rem;
  }

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: inherit;
      color: inherit;
      line-height: 1.3em;
      outline-offset: 0.5rem;
      outline-color: var(--clr-primary-green);
    }
    
    &:active {
      color: currentColor;
    }
  }
`;

export default Footer;
