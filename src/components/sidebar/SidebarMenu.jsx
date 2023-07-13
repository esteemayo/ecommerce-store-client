'use client';

import styled from 'styled-components';

const SidebarMenu = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => {
        const { page, links } = item;
        return (
          <Wrapper key={index}>
            <Heading>{page}</Heading>
            <ListContainer></ListContainer>
          </Wrapper>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  
`;

const Wrapper = styled.article`
  
`;

const Heading = styled.h4`
  
`;

const ListContainer = styled.ul`
  
`;

const ListItem = styled.li`
  
`;

export default SidebarMenu;
