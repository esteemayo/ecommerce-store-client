import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const PaymentModal = ({ openModal, closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Overlay type={openModal ? 'show' : ''}>
      <Container>
        <Wrapper>
          <CloseButtonContainer>
            <CloseButton type='button'>
              <CloseIcon />
            </CloseButton>
          </CloseButtonContainer>
          <Heading>You will pay $99.99 after delivery</Heading>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <FormInput
                id='name'
                name='name'
                type='text'
                placeholder='Enter your name'
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='address'>Address</FormLabel>
              <FormInput
                type='text'
                id='address'
                name='address'
                placeholder='Enter your address'
              />
            </FormGroup>
            <FormButton type='submit'>Order</FormButton>
          </Form>
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
  border-radius: 0.5rem;
  position: relative;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
  width: 4rem;
  height: 4rem;
`;

const CloseButton = styled.button`
  display: inline-block;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2.3rem;
  background-color: transparent;
  color: #838283;
  outline-color: #f1e4f4;
  cursor: pointer;

  svg {
    font-size: 2.3rem;
    fill: currentColor;
  }
`;

const Heading = styled.h1`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
`;

const Form = styled.form`
  margin: 2rem 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const FormLabel = styled.label`
  display: inline-block;
  width: 5rem;
  text-transform: capitalize;
`;

const FormInput = styled.input`
  
`;

const FormButton = styled.button`
  
`;

export default PaymentModal;
