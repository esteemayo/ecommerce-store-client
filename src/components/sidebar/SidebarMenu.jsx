'use client';

import styled from 'styled-components';
import Link from 'next/link';

const SidebarMenu = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => {
        const { page, links } = item;
        return (
          <Wrapper key={index}>
            <Heading>{page}</Heading>
            <ListContainer>
              {links.map((link, index) => {
                const { url, icon, label } = link;
                return (
                  <ListItem key={index}>
                    <Link href={url} passHref>
                      {icon}
                      &nbsp;
                      {label}
                    </Link>
                  </ListItem>
                );
              })}
            </ListContainer>
          </Wrapper>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;
`;

const Wrapper = styled.article`
  margin-bottom: 1.7rem;
`;

const Heading = styled.h4`
  display: inline-block;
  text-transform: capitalize;
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const ListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.25rem;
`;

const ListItem = styled.li`
  font-size: 1.4rem;

  & > * {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
      text-transform: capitalize;
      color: inherit;
      outline-color: #eee;
      transition: all 0.2s ease;
    }

    &:active {
      color: currentColor;
    }

    &:hover {
      color: #686767;
    }

    svg {
      color: var(--clr-secondary-green);
    }
  }
`;

export default SidebarMenu;
