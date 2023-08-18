'use client';

import styled from 'styled-components';
import Image from 'next/image';

const EmptyState = () => {
  return (
    <Container>
      <Wrapper>
        <StyledImage
          src={'/img/404.png'}
          width={500}
          height={500}
          alt='404'
        />
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: 50rem;
  height: 50rem;
  display: block;
  object-fit: cover;

  @media only screen and (max-width: 25em) {
    width: 40rem;
    height: 40rem;
  }
`;

export default EmptyState;
