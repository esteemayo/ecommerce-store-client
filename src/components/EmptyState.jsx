'use client';

import styled from 'styled-components';
import Image from 'next/image';

const EmptyState = () => {
  return (
    <Container>
      <Wrapper>
        EmptyState
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

export default EmptyState;
