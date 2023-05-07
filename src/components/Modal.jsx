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
  
`;

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  
`;

const ButtonContainer = styled.div`
  
`;

export default Modal;
