'use client';
import styled from 'styled-components';

const WishLists = () => {
  return (
    <Container>
      <Wrapper>
        WishLists
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

export default WishLists;
