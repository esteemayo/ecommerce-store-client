import styled from 'styled-components';

const PaymentModal = () => {
  return (
    <Overlay>
      PaymentModal
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PaymentModal;
