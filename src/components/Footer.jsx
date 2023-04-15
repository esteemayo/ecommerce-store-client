import Link from 'next/link';
import styled from 'styled-components';

import { customerLinks, discoverLinks, social, storeLinks } from '@/data';

const Footer = () => {
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
            <SocialContainer>
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
                )
              })}
            </SocialContainer>
          </FooterContainer>
        </FooterRight>
      </Wrapper>
    </Container>
  );
}

const Container = styled.footer`
  width: 100vw;
  padding: 15rem 0;
  background-color: #1e3161;
  color: var(--clr-white);
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;

  display: flex;
  align-items: start;
  gap: 5rem;
`;

const FooterLeft = styled.div`
  flex: 3;
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
  margin-bottom: 2.4rem;
`;

const ListContainer = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  outline-color: #1658a3;

  &:not(:last-of-type) {
    margin-bottom: 1.6rem;
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
      outline-color: #1658a3;
    }

    &:hover {
      display: flex;
      flex-direction: column;

      &::after {
        content: '';
        display: inline-block;
        width: 3rem;
        height: 1px;
        background-color: var(--clr-white);
      }
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
`;

const SearchContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  background-color: var(--clr-white);
  border-radius: 0.5rem;
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
  caret-color: #1658a3;

  &::placeholder {
    font-size: 1.4rem;
    color: #aaa;
  }
`;

const SocialContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Header = styled.h4`
  
`;

const SocialIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #${({ color }) => color};
  color: inherit;
  border-radius: 50%;
  cursor: pointer;

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
    }
  }

  svg {
    font-size: 2rem;
    color: inherit;
  }
`;

export default Footer;
