import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const CartModal = ({ isModalOpen, closeModal }) => {
  return (
    <Container>
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
  
`;

const Wrapper = styled.div`
  
`;

const ButtonContainer = styled.div`
  
`;

const CloseButton = styled.button`
  
`;

export default CartModal;
