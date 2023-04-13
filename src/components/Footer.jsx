import Link from 'next/link';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

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
            <SearchContainer>
              <SearchInput type='search' placeholder='Search' />
            </SearchContainer>
            <SocialContainer>
              <SocialIcon color='3b5999'>
                <Link href='#' passHref>
                  <FacebookIcon />
                </Link>
              </SocialIcon>
              <SocialIcon color='55acee'>
                <Link href='#' passHref>
                  <TwitterIcon />
                </Link>
              </SocialIcon>
              <SocialIcon color='e4405f'>
                <Link href='#' passHref>
                  <InstagramIcon />
                </Link>
              </SocialIcon>
              <SocialIcon color='0a66c2'>
                <Link href='#' passHref>
                  <LinkedInIcon />
                </Link>
              </SocialIcon>
              <SocialIcon color='e60023'>
                <Link href='#' passHref>
                  <PinterestIcon />
                </Link>
              </SocialIcon>
            </SocialContainer>
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
  align-items: center;
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
  outline-color: #1658a3;

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
      outline-color: #1658a3;
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
  width: 100%;
  height: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  background-color: var(--clr-white);
  border-radius: 0.5rem;
`;

const SearchInput = styled.input`
  display: inline-block;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 0 1rem;
  background-color: transparent;
  color: #999;
  caret-color: #1658a3;

  &::placeholder {
    font-size: 1.4rem;
    color: #aaa;
  }
`;

const SocialContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SocialIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #${({ color }) => color};
  color: inherit;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    &:link,
    &:visited {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: inherit;
    }
  }

  svg {
    font-size: 2rem;
    color: inherit;
  }
`;

export default Footer;
