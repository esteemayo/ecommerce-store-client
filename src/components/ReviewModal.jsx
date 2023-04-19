import styled from 'styled-components';

const ReviewModal = () => {
  return (
    <Container>
      <Wrapper>
        <ButtonContainer>

        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4000;
`;

const Wrapper = styled.div`
  width: 50rem;
  padding: 2rem;
  background-color: var(--clr-white);
  border-radius: 1rem;
  box-shadow: 0 1rem 4rem rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 0 1rem 4rem rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 0 1rem 4rem rgba(255, 255, 255, 0.5);
`;

const ButtonContainer = styled.div`
  
`;

const CloseButton = styled.button`
  
`;

export default ReviewModal;
