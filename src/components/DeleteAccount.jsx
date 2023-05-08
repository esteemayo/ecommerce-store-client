import styled from 'styled-components';

const DeleteAccount = () => {
  return (
    <Container>
      <Heading>You are about to delete your account</Heading>
      <WarningText>
        You will receive an email to confirm your decision.
        Please note, that all your data will be permanently erased.
      </WarningText>
      <ButtonContainer>

      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem 0;
`;

const Heading = styled.h4`
  display: inline-block;
  font-weight: 600;
  font-size: 1.8rem;
`;

const WarningText = styled.p`
  font-size: 1.5rem;
  color: #aaa;
  line-height: 1.2;
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  
`;

export default DeleteAccount;
