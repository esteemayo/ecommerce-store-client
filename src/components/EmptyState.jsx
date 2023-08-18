'use client';

import styled from 'styled-components';
import Image from 'next/image';

const EmptyState = () => {
  return (
    <Container>
      <Wrapper>
        <StyledImage src={'/img/404.png'} fill alt='404' />
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
  
`;

export default EmptyState;
