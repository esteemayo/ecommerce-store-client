'use client';
import styled from 'styled-components';

const Success = () => {
  return (
    <Container>
      <Wrapper>
        <SuccessContainer>
          <SuccessAlert>Order successfully placed</SuccessAlert>
          <Text>Thank you for your order, you will receive it in 45 minutes</Text>
          <InfoContainer>

          </InfoContainer>
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

const SuccessAlert = styled.p`
  
`;

const Text = styled.p`
  
`;

const InfoContainer = styled.div`
  
`;

export default Success;
