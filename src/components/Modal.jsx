import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ openModal, closeModal }) => {
  return (
    <Overlay type={openModal ? 'show' : ''}>
      <Container>
        <Wrapper>
          <ButtonContainer>
            <CloseIcon />
          </ButtonContainer>
        </Wrapper>
      </Container>
    </Overlay>
  );
}

const Overlay = styled.aside`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
`;

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  
`;

const ButtonContainer = styled.div`
  
`;

export default Modal;
