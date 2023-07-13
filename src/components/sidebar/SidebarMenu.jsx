'use client';

import styled from 'styled-components';
import Link from 'next/link';

const SidebarMenu = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => {
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
`;

const ListContainer = styled.ul`
  
`;

const ListItem = styled.li`
  
`;

export default SidebarMenu;
