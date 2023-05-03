import styled from 'styled-components';

const PaymentModal = ({ openModal, closeModal }) => {
  return (
    <Overlay type={openModal ? 'show' : ''}>
      <Container>
        PaymentModal
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
  
`;

export default PaymentModal;
