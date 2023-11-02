'use client';

import styled from 'styled-components';

const Annoucement = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          Free delivery for all orders over $100. Order your goods now!
        </Text>
        <Text>
          Super Deal! Free Shipping on Orders Over $100.
        </Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  padding: 1rem 6rem;
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  color: inherit;
`;

export default Annoucement;
