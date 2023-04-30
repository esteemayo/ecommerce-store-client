import styled from 'styled-components';

const DeleteModal = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Remove a wishlist?</Heading>
        <WarningMessage>Are you sure you wanted to remove this product from your wishlist</WarningMessage>
        <ButtonContainer>

        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35rem;
  padding: 5rem;
  background-color: var(--clr-white);
  border-radius: 1rem;
  box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -webkit-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
  -moz-box-shadow: 0 2rem 4rem rgba(145, 143, 143, 0.1);
`;

const Heading = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 2rem;
`;

const WarningMessage = styled.p`
  font-size: 1.6rem;
  color: #999;
  line-height: 1.2;
`;

const ButtonContainer = styled.div`
  
`;

const Button = styled.button`

`;

export default DeleteModal;
