'use client';
import styled from 'styled-components';

const WishLists = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <HeadingContainer>
            <Heading>My wishlist</Heading>
            <Date dateTime='2023-04-29T00:42:49.511Z'>29 April, 2023</Date>
          </HeadingContainer>
          <SendButton type='button'>Send wishlist</SendButton>
        </Header>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  padding: 10rem 0;
  cursor: default;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeadingContainer = styled.div`
  
`;

const Heading = styled.h1`
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.8rem;
`;

const Date = styled.time`
  
`;

const SendButton = styled.button`
  
`;

export default WishLists;
