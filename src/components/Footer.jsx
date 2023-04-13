import Link from 'next/link';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterLeft>
          <LinkContainer>
            <Left>
              <Heading>About the store</Heading>
              <ListContainer>
                <ListItem>
                  <Link href='/' passHref>Home</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>About us</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Become a customer</Link>
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
                <ListItem>
                  <Link href='#' passHref>Partners and factories</Link>
                </ListItem>
              </ListContainer>
            </Left>
            <Center>
              <Heading>Discover</Heading>
              <ListContainer>
                <ListItem>
                  <Link href='#' passHref>Developer API</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Tools</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Blog</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Gift cards</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Rewards</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Affiliate</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Work with us</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Our Stores</Link>
                </ListItem>
              </ListContainer>
            </Center>
            <Right>
              <Heading>Customer care</Heading>
              <ListContainer>
                <ListItem>
                  <Link href='#' passHref>Shipping Information</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Returns & Exchange</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Coupon codes</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>F.A.Q.</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Terms & condition</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Refund Policy</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Privacy Policy</Link>
                </ListItem>
                <ListItem>
                  <Link href='#' passHref>Accessibility statement</Link>
                </ListItem>
              </ListContainer>
            </Right>
          </LinkContainer>
        </FooterLeft>
        <FooterRight>
          <FooterContainer>

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
`;

const FooterContainer = styled.div`

`;

export default Footer;
