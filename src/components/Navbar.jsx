'use client';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>Navbar</Wrapper>
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
  
`;

export default Navbar