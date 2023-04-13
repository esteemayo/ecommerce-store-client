import Link from 'next/link';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LinkContainer>
          <Left>
            <Heading>About the store</Heading>
            <ListContainer>
              <ListItem>
                <Link href='/' passHref>Home</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Become a customer</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>About us</Link>
              </ListItem>
              <ListItem>FAQ</ListItem>
              <ListItem>Return policy</ListItem>
              <ListItem>Contact us</ListItem>
            </ListContainer>
          </Left>
          <Center>Center</Center>
          <Right>Right</Right>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.footer`
  width: 100vw;
  padding: 15rem 0;
  background-color: #1e3161;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  
`;

const Heading = styled.h1`

`;

const ListContainer = styled.ul`
  
`;

const ListItem = styled.li`

`;

const Center = styled.div`
  
`;

const Right = styled.div`
  
`;

export default Footer;
