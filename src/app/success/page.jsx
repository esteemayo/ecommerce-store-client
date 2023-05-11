'use client';
import styled from 'styled-components';

const Success = () => {
  return (
    <Container>
      <Wrapper>
        <SuccessContainer>
          Success
        </SuccessContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  padding: 10rem 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
`;

const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Success;
