'use client';
import styled from 'styled-components';

const WishLists = () => {
  return (
    <Container>
      <Wrapper>
        <HeadingContainer>
          <Heading>My wishlist</Heading>
          <Date dateTime='2023-04-29T00:42:49.511Z'>29 April, 2023</Date>
        </HeadingContainer>
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
  max-width: 102.4rem;
  margin: 0 auto;
`;

const Header = styled.div`
  
`;

const HeadingContainer = styled.div`
  
`;

const Heading = styled.h1`
  
`;

const Date = styled.time`
  
`;

export default WishLists;
