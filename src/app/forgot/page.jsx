'use client';
import styled from 'styled-components';

const Forgot = () => {
  return (
    <Container>
      <Wrapper>
        Forgot
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem;
  border-radius: 1rem;
`;

export default Forgot;
