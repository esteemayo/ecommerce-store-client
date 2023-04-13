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
                <Link href='#' passHref>FAQ</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Return policy</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Contact us</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Status</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Pricing</Link>
              </ListItem>
            </ListContainer>
          </Left>
          <Center>
            <Heading>Resources</Heading>
            <ListContainer>
              <ListItem>
                <Link href='#' passHref>Developer API</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Tools</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Tools</Link>
              </ListItem>
            </ListContainer>
          </Center>
          <Right>
            <Heading>Company</Heading>
            <ListContainer>
              <ListItem>
                <Link href='#' passHref>About us</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Sustainability</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Terms of Service</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Privacy</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Compression</Link>
              </ListItem>
              <ListItem>
                <Link href='#' passHref>Format</Link>
              </ListItem>
            </ListContainer>
          </Right>
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
