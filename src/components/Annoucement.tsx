'use client';

import styled from 'styled-components';

const Annoucement = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          Free delivery for all orders over $100. Order your goods now!
        </Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  padding: 2rem;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Text = styled.p`
  color: inherit;
`;

export default Annoucement;
