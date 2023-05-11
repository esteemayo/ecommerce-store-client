'use client';
import styled from 'styled-components';

const Success = () => {
  return (
    <Container>
      <Wrapper>
        <SuccessContainer>
          <SuccessWrapper>
            <SuccessAlert>Order successfully placed</SuccessAlert>
            <Text>Thank you for your order, you will receive it in 45 minutes</Text>
            <InfoContainer>
              <InfoText>Here we will deliver your order.</InfoText>
              <IconContainer>
                <Address>3711 Schultz Meadow</Address>
              </IconContainer>
              <IconContainer>
                <Phone>60640582</Phone>
              </IconContainer>
              <IconContainer>
                <Email>gorczany.tamara@yahoo.com</Email>
              </IconContainer>
            </InfoContainer>
            <MushroomContainer>

            </MushroomContainer>
          </SuccessWrapper>
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

const SuccessWrapper = styled.div`
  
`;

const SuccessAlert = styled.p`
  
`;

const Text = styled.p`
  
`;

const InfoContainer = styled.div`
  
`;

const InfoText = styled.p`
  
`;

const IconContainer = styled.div`
  
`;

const Address = styled.span`
  
`;

const Phone = styled.span`
  
`;

const Email = styled.span`
  
`;

const MushroomContainer = styled.div`
  
`;

export default Success;
