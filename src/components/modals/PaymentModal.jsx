'use client';

import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

import Overlay from './Overlay';
import FormatPrice from '../FormatPrice';

import Input from '../carts/Input';
import TextArea from '../carts/TextArea';

import Form from '../form/Form';
import FormButton from '../form/FormButton';

import { useForm } from '@/hooks/useForm';

const initialState = {
  name: '',
  address: '',
};

const PaymentModal = ({ isOpen, onClose, onExit }) => {
  const { total } = useSelector((state) => ({ ...state.cart }));
  const { mode } = useSelector((state) => ({ ...state.darkMode }));

  const [showModal, setShowModal] = useState(isOpen);

  const closeHandler = () => {
    setShowModal(false);
    onClose();
    handleClose();
  };

  const handleClick = (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('overlay')) {
      closeHandler();
    }
  };

  const validateForm = (data) => {
    const errors = {};
    const { address, name } = data;

    if (name.trim() === '') {
      errors.name = 'Please enter your name';
    }

    if (address.trim() === '') {
      errors.address = 'Please enter your address';
    }

    return errors;
  };

  const onSubmitHandler = () => {
    console.log({ ...formData });
  };

  const {
    errors,
    formData,
    handleChange,
    handleClose,
    handleSubmit,
  } = useForm(onSubmitHandler, initialState, validateForm, onExit);

  const activeModal = useMemo(() => {
    return showModal ? 'show' : '';
  }, [showModal]);

  const modeValue = useMemo(() => {
    return mode.toString();
  }, [mode]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return (
    <Overlay
      type={activeModal}
      mode={modeValue}
      onClick={handleClick}
    >
      <Wrapper>
        <CloseButtonContainer>
          <CloseButton type='button' onClick={closeHandler}>
            <CloseIcon />
          </CloseButton>
        </CloseButtonContainer>
        <Form onSubmit={handleSubmit}>
          <Heading>
            You will pay {' '}
            <FormatPrice value={total} /> {' '}
            after delivery
          </Heading>
          <Input
            name='name'
            label='Name'
            value={formData.name}
            placeholder='Enter your name'
            onChange={handleChange}
            error={errors.name}
            autoFocus
          />
          <TextArea
            name='address'
            label='Address'
            value={formData.address}
            placeholder='Enter your address'
            onChange={handleChange}
            error={errors.address}
          />
          <FormButton label='Order' />
        </Form>
      </Wrapper>
    </Overlay>
  );
}

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

PaymentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired,
};

export default PaymentModal;
