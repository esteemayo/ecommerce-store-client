'use client';

import styled from 'styled-components';

const SidebarMenu = ({ data }) => {
  return (
    <Container>
      {data.map((item) => {
        const { id } = item;
        return (
          <Wrapper key={id}></Wrapper>
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

export default SidebarMenu;
