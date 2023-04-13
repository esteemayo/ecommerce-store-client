import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LinkContainer>

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
  
`;

export default Footer;
