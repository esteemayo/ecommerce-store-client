import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ReviewModal = () => {
  return (
    <Container>
      <Wrapper>
        <ButtonContainer>
          <CloseButton>
            <FontAwesomeIcon icon={faXmark} />
          </CloseButton>
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
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  display: inline-block;
`;

export default ReviewModal;
