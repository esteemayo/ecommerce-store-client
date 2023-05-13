import Link from 'next/link';
import styled from 'styled-components';

import {
  customerLinks,
  discoverLinks,
  footerLinks,
  social,
  storeLinks,
} from '@/data';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

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
                    <ListItem key={id}>
                      <Link href={url} passHref>{text}</Link>
                    </ListItem>
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
                    <ListItem key={id}>
                      <Link href={url} passHref>{text}</Link>
                    </ListItem>
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
                    <ListItem key={id}>
                      <Link href={url} passHref>{text}</Link>
                    </ListItem>
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
            <SocialContainer>
              {social.map((item) => {
                const { id, url, icon, color } = item;
                return (
                  <SocialIcon key={id} color={color}>
                    <Link href={url} passHref>
                      {icon}
                    </Link>
                  </SocialIcon>
                );
              })}
            </SocialContainer>
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
      <FooterText>
        &copy; {year} by Emmanuel Adebayo&trade;. All rights reserved. We are a young company always
        looking for new and creative ideas to help you with our products in your everyday work.
      </FooterText>
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
`;

const Left = styled.div``;

const Heading = styled.h4`
  font-weight: 500;
  font-size: 2rem;
  line-height: 1em;
  margin-bottom: 2rem;
`;

const ListContainer = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  outline-color: var(--clr-secondary-blue);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }

  &:hover {
    color: #f5f5f5;
  }

  
  &::after {
    content: '';
    display: inline-block;
    width: 2rem;
    height: 1px;
    background-color: var(--clr-white);
  }

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.4rem;
      color: inherit;
      line-height: 1.3em;
      transition: all 0.2s ease;
      backface-visibility: hidden;
      outline-color: var(--clr-primary-green);
    }
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
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #${({ color }) => color};
  color: inherit;
  border-radius: 50%;
  cursor: pointer;

  @media only screen and (max-width: 37.5em) {
    width: 3rem;
    height: 3rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    &:link,
    &:visited {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: inherit;
      outline-color: #ccc;
    }
  }

  svg {
    font-size: 2rem;
    color: inherit;

    @media only screen and (max-width: 37.5em) {
      font-size: 1.7rem;
    }
  }
`;

const FooterLinkContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const LinkItem = styled.li`
  font-size: 1.4rem;
  color: var(--clr-white);
  outline-color: var(--clr-primary-green);

  a {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      color: inherit;
      line-height: 1.3em;
      outline-color: var(--clr-primary-green);
    }
  }
`;

const FooterText = styled.p`
  width: 60%;
  font-size: 1.6rem;
  text-align: center;
  color: var(--clr-white);
  margin: 0 auto;
  line-height: 1.1;
  margin-top: 2rem;

  @media only screen and (max-width: 37.5em) {
    width: 80%;
  }
`;

export default Footer;
