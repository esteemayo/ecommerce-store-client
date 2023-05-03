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

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    closeModal(false);
    setIsOpen(false);
    errors && setErrors({});
  };

  const handleClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      handleClose();
    }
  };

  const validateForm = () => {
    const errors = {};
    const { name, address } = inputs;

    if (name.trim() === '') {
      errors.name = 'Please enter your name';
    }

    if (address.trim() === '') {
      errors.address = 'Please enter your address';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    console.log({ ...inputs });
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
                value='99.99'
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
                placeholder='Enter your name'
                onChange={handleChange}
              />
              {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor='address'>Address</FormLabel>
              <TextArea
                id='address'
                name='address'
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
  border-radius: 1rem;
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
  margin-bottom: 1rem;
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
  color: #888;
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
  border: 2px solid #eef2ff;
  border-radius: 0.5rem;
  outline-color: #eee;
  caret-color: var(--caret-light);

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

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const ErrorMsg = styled.span`
  font-size: 1.3rem;
  color: hsl(360, 71%, 66%);
  margin-top: 1px;
`;

export default PaymentModal;
