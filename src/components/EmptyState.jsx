'use client';

import styled from 'styled-components';
import Image from 'next/image';

const EmptyState = () => {
  return (
    <Container>
      <Wrapper>
        <StyledImage src={'/img/not-found.png'} fill alt='404' />
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
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 50rem;
  display: block;
  object-fit: cover;
`;

export default EmptyState;
