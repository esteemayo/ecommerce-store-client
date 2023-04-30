import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const CartModal = ({ isModalOpen, closeModal }) => {
  return (
    <Container type={isModalOpen ? 'show' : ''}>
      <Wrapper>
        <ButtonContainer>
          <CloseButton type='button'>
            <CloseIcon />
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
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  opacity: ${({ type }) => type === 'show' ? 1 : 0};
  z-index: ${({ type }) => type === 'show' ? 4000 : -1};
`;

const Wrapper = styled.div`
  
`;

const ButtonContainer = styled.div`
  
`;

const CloseButton = styled.button`
  
`;

export default CartModal;
