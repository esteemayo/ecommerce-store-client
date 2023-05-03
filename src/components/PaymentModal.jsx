import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const PaymentModal = ({ openModal, closeModal }) => {
  return (
    <Overlay type={openModal ? 'show' : ''}>
      <Container>
        <Wrapper>
          <CloseButtonContainer>
            <CloseButton type='button'>
              <CloseIcon />
            </CloseButton>
          </CloseButtonContainer>
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
  left: 0;
  display: ${({ type }) => type === 'show' ? 'block' : 'none'};
  z-index: 4000;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem 4rem;
  background-color: var(--clr-white);
  border-radius: 1.5rem;
  position: relative;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  height: 4rem;
`;

const CloseButton = styled.button`
  display: inline-block;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
  background-color: transparent;
  color: #838283;
  outline-color: #f1e4f4;
  cursor: pointer;
`;

export default PaymentModal;
