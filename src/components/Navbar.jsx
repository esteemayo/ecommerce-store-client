'use client';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoBox>Logo</LogoBox>
        <ToggleButton>###</ToggleButton>
        <ListContainer>
          <ListItem>
            <Button>products</Button>
          </ListItem>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  
`;

const ToggleButton = styled.button`
  @media only screen and (min-width:50em){
    display: none;
  }
`;

const ListContainer = styled.ul`
  display: none;

  @media only screen and (min-width:50em){
    list-style: none;
    display: flex;
    align-items: center;
    gap: 5rem;
  }
`;

const ListItem = styled.li`
  
`;

const Button = styled.button`
  
`;

export default Navbar