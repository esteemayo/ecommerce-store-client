'use client';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NumericFormat } from 'react-number-format';
import { faEnvelope, faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';

const Success = () => {
  return (
    <Container>
      <Wrapper>
        <SuccessContainer>
          <SuccessWrapper>
            <SuccessInfo>
              <SuccessAlert>Order successfully placed</SuccessAlert>
              <Text>
                Thank you for your order, you will receive it in {' '}
                <Minutes>45 minutes</Minutes>
              </Text>
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
                  <FontAwesomeIcon icon={faEnvelope} />
                  <Email>gorczany.tamara@yahoo.com</Email>
                </IconContainer>
              </InfoContainer>
              <MushroomContainer>
                <IconContainer>
                  <FontAwesomeIcon icon={faMessage} />
                  <MushroomText>&quot;No mushrooms, please&quot;</MushroomText>
                </IconContainer>
              </MushroomContainer>
              <TotalPayment>The payment of {' '}
                <NumericFormat
                  value={17950}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                /> {' '}
                you&apos;ll make when the courier arrives with your order.
              </TotalPayment>
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
  background-color: #f4f8f7;
  padding: 4rem 7rem;
  border-radius: 0.5rem;
`;

const SuccessInfo = styled.div`
  max-width: 40rem;
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

const Minutes = styled.span`
  font-weight: 600;
  padding: 0.5rem;
  background-color: hsla(0, 0%, 100%, 0.4);
`;

const InfoContainer = styled.div`
  padding: 2.7rem 2.3rem;
  background-color: hsla(0, 0%, 100%, 0.4);
  border-radius: 0.5rem;
`;

const InfoText = styled.p`
  display: inline-block;
  font-size: 1.37rem;
  margin-bottom: 1.5rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #409384;
  }
`;

const Address = styled.span`
  text-transform: capitalize;
  font-size: 1.5rem;
`;

const Phone = styled.span`
  font-size: 1.5rem;
`;

const Email = styled.span`
  text-transform: lowercase;
  font-size: 1.5rem;
`;

const MushroomContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem 2.3rem;
  background-color: hsla(0, 0%, 100%, 0.4);
  border-radius: 0.5rem;
`;

const MushroomText = styled.span`
  font-size: 1.5rem;
`;

const TotalPayment = styled.p`
  display: inline-block;
  width: 90%;
  font-size: 1.5rem;
  line-height: 1.3;
  margin-top: 3rem;
`;

export default Success;
