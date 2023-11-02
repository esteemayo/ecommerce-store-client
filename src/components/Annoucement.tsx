'use client';

import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

const Annoucement = () => {
  return (
    <Container>
      <Wrapper>
        <Marquee speed={100} gradient>
          <Text>
            Free delivery for all orders over $100. Order your goods now!
          </Text>
          <Text>Super Deal! Free Shipping on Orders Over $100.</Text>
        </Marquee>
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
