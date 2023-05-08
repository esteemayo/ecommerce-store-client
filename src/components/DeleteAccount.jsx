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
        <CancelButton type='button'>Cancel</CancelButton>
        <DeleteButton type='button'>Delete account</DeleteButton>
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
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CancelButton = styled.button`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.4rem;
  width: 50%;
  padding: 1.5rem;
  background-color: transparent;
  color: #6d857f;
  border-radius: 0.5rem;
  outline-color: #eee;
`;

const DeleteButton = styled.button`
  
`;

export default DeleteAccount;
