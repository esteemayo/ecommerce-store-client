'use client';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Success = () => {
  return (
    <Container>
      <Wrapper>
        <SuccessContainer>
          <SuccessWrapper>
            <SuccessInfo>
              <SuccessAlert>Order successfully placed</SuccessAlert>
              <Text>Thank you for your order, you will receive it in 45 minutes</Text>
              <InfoContainer>
                <InfoText>Here we will deliver your order.</InfoText>
                <IconContainer>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <Address>3711 Schultz Meadow</Address>
                </IconContainer>
                <IconContainer>
                <FontAwesomeIcon icon={faPhone} />
                  <Phone>60640582</Phone>
                </IconContainer>
                <IconContainer>
                  <Email>gorczany.tamara@yahoo.com</Email>
                </IconContainer>
              </InfoContainer>
              <MushroomContainer>
                <IconContainer>
                  <MushroomText>&quot;No mushrooms, please&quot;</MushroomText>
                </IconContainer>
              </MushroomContainer>
            </SuccessInfo>
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
  width: 70rem;
  background-color: #f9f9f9;
  padding: 3rem 7rem;
`;

const SuccessInfo = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`;

const SuccessAlert = styled.p`
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.3rem;
  padding: 0 0.5rem;
  color: #409384;
  border: 1px solid #409384;
  border-radius: 10rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const InfoContainer = styled.div`
  padding: 2.7rem 2.3rem;
  background-color: hsla(0, 0%, 100%, 0.4);
`;

const InfoText = styled.p`
  display: inline-block;
  font-size: 1.37rem;
  margin-bottom: 1.5rem;
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

const MushroomText = styled.span`
  
`;

export default Success;
