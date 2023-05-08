import styled from 'styled-components';

const DeleteAccount = () => {
  return (
    <Container>
      <Heading>You are about to delete your account</Heading>
      <WarningText>
        You will receive an email to confirm your decision.
        Please note, that all your data will be permanently erased.
      </WarningText>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem 0;
`;

const Heading = styled.h4`
  display: inline-block;
  font-size: 1.8rem;
`;

const WarningText = styled.p`
  
`;

export default DeleteAccount;
