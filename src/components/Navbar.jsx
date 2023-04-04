'use client';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoBox>Logo</LogoBox>
        <ToggleButton>###</ToggleButton>
        <ListContainer>
          <ListItem></ListItem>
        </ListContainer>
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
`;

const LogoBox = styled.div`
  
`;

const ToggleButton = styled.button`
  
`;

const ListContainer = styled.ul`
  
`;

const ListItem = styled.li`
  
`;

export default Navbar