import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

const initialState = {
  name: '',
  address: '',
};

const PaymentModal = ({ openModal, closeModal, setIsOpen }) => {
  const { total } = useSelector((state) => ({ ...state.cart }));

  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState(initialState);

  const { name, address } = inputs;

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    closeModal(false);
    setIsOpen(false);
    errors && setErrors({});
    handleClear();
  };

  const handleClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      handleClose();
    }
  };

  const validateForm = () => {
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'Please enter your name';
    }

    if (address.trim() === '') {
      errors.address = 'Please enter your address';
    }

    return errors;
  };

  const handleClear = () => {
    setInputs(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    console.log({ ...inputs, total });
    handleClear();
  };

  return (
    <Overlay
      className='overlay'
      type={openModal ? 'show' : ''}
      onClick={handleClick}
    >
      <Container>
        <Wrapper>
          <CloseButtonContainer>
            <CloseButton type='button' onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
          </CloseButtonContainer>
          <Form onSubmit={handleSubmit}>
            <Heading>
              You will pay {' '}
              <NumericFormat
                value={total}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              /> {' '}
              after delivery
            </Heading>
            <FormGroup>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <FormInput
                id='name'
                name='name'
                type='text'
                value={name}
                placeholder='Enter your name'
                onChange={handleChange}
                autoFocus
              />
              {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='address'>Address</FormLabel>
              <TextArea
                id='address'
                name='address'
                value={address}
                placeholder='Enter your address'
                onChange={handleChange}
              />
              {errors.address && <ErrorMsg>{errors.address}</ErrorMsg>}
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
  background-color: ${({ theme }) => theme.bgOverlay};
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
  background-color: ${({ theme }) => theme.bgModal};
  border-radius: 1rem;
  position: relative;

  @media only screen and (max-width: 25em) {
    width: 35rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 33rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
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
  outline-color: #f7f3f8;
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
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;

  @media only screen and (max-width: 25em) {
    font-size: 1.87rem;
  }
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
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textLabel};
`;

const FormInput = styled.input`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: transparent;
  color: #999;
  border: 2px solid ${({ theme }) => theme.modalInputBorder};
  border-radius: 0.5rem;
  outline-color: #eee;
  caret-color: var(--caret-light);

  @media only screen and (max-width: 18.75em) {
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
  }

  &::placeholder {
    font-weight: 300;
    font-size: 1.5rem;
    color: #bbb;
  }
`;

const TextArea = styled.textarea`
  border: none;
  display: inline-block;
  width: 100%;
  height: 10rem;
  font-family: inherit;
  font-weight: lighter;
  font-size: 1.5rem;
  padding: 1.5rem 1rem;
  background-color: transparent;
  color: #999;
  border: 2px solid #eef2ff;
  border-radius: 0.5rem;
  outline-color: #eee;
  overflow: hidden;
  resize: none;
  caret-color: var(--caret-light);

  @media only screen and (max-width: 18.75em) {
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
  }

  &::placeholder {
    font-weight: 300;
    font-size: 1.5rem;
    color: #bbb;
  }
`;

const FormButton = styled.button`
  border: none;
  display: inline-block;
  font-weight: 500;
  font-size: 1.4rem;
  width: 100%;
  padding: 1.5rem;
  background-color: #6d857f;
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #89a8a0 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #85beae;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 56.25em), only screen and (hover: none) { 
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
  }

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.span`
  font-size: 1.3rem;
  color: var(--clr-secondary-red);
  margin-top: 1px;
`;

export default PaymentModal;
