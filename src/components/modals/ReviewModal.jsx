'use client';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '@mui/material/Rating';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

const ReviewModal = ({ isOpen, setIsModalOpen }) => {
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState('');
  const [terms, setTerms] = useState(false);
  const [showModal, setShowModal] = useState(isOpen);

  const handleCloseModal = useCallback((e) => {
    e.stopPropagation();

    if (e.target.classList.contains('overlay')) {
      closeModalHandler();
    }
  }, [closeModalHandler]);

  const closeModalHandler = useCallback(() => {
    setIsModalOpen(false);
    handleClear();
  }, [setIsModalOpen, handleClear]);

  const handleClear = useCallback(() => {
    setRating(null);
    setReview('');
    setTerms(false);
  }, []);

  const handleClick = useCallback(() => {
    console.log({ rating, review, terms });
    handleClear();
  }, [rating, review, terms, handleClear]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return (
    <Overlay
      className='overlay'
      type={isOpen ? 'show' : ''}
      onClick={handleCloseModal}
    >
      <Container>
        <Wrapper>
          <ButtonContainer>
            <CloseButton
              type='button'
              onClick={closeModalHandler}
            >
              <FontAwesomeIcon icon={faXmark} />
            </CloseButton>
          </ButtonContainer>
          <Header>Overall rating</Header>
          <RatingContainer>
            <Rating
              size='large'
              name='size-large'
              value={rating}
              precision={0.5}
              onChange={(e, newValue) => {
                setRating(newValue);
              }}
            />
            <Text>Click to rate</Text>
          </RatingContainer>
          <Label htmlFor='review'>Product review</Label>
          <TextArea
            id='review'
            name='review'
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder='Example: Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is ...'
          ></TextArea>
          <Agreement>
            <Input
              id='terms'
              type='checkbox'
              value={terms}
              onChange={(e) => setTerms(e.currentTarget.checked)}
            />
            <Label htmlFor='terms'>
              I accept the <Link href='#' passHref>terms and conditions</Link>
            </Label>
          </Agreement>
          <Information>
            You will be able to receive emails in connection with this review (eg if others comment on your review).
            All emails contain the option to unsubscribe. We can use the text and star rating
            from your review in other marketting.
          </Information>
          <Button
            type='button'
            onClick={handleClick}
          >
            Submit product review
          </Button>
        </Wrapper>
      </Container>
    </Overlay>
  );
}

const Overlay = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.bgOverlay};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${({ type }) => type === 'show' ? 'block' : 'none'};
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  opacity: ${({ type }) => type === 'show' ? 1 : 0};
  z-index: ${({ type }) => type === 'show' ? 4000 : -1};
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.bgModal};
  border-radius: 1.5rem;

  @media only screen and (max-width: 25em) {
    width: 35rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 32rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1rem;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1rem;
  right: -2rem;
  border: none;
  outline: none;
  display: inline-block;
  width: 4rem;
  height: 4rem;
  font-weight: 300;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.bgRevCloseBtn};
  color: ${({ theme }) => theme.textRevCloseBtn};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  @media only screen and (max-width: 18.75em) {
    right: -1rem;
    width: 3.5rem;
    height: 3.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.bgRevCloseBtnHov};
    color: ${({ theme }) => theme.textRevCloseBtnHov};
  }

  svg {
    font-size: inherit;
    color: currentColor;
  }
`;

const Header = styled.h1`
  display: inline-block;
  font-weight: 600;
  font-size: 1.85rem;
  color: ${({ theme }) => theme.text};
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 10rem;
  margin-top: 1rem;

  svg {
    font-size: 3.5rem;
    fill: ${({ theme }) => theme.star};
    border: 2px solid ${({ theme }) => theme.starBorder};
    border-radius: 0.5rem;
    margin-right: 0.5rem;

    @media only screen and (max-width: 18.75em) {
      font-size: 3rem;
    }
  }
`;

const Text = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};

  a {
    &:link,
    &:visited {
      color: ${({ theme }) => theme.text};
      transition: all 0.3s ease;
    }

    &:hover {
      letter-spacing: 0.1px;
    }
  }
`;

const TextArea = styled.textarea`
  display: inline-block;
  width: 100%;
  height: 10rem;
  font-family: inherit;
  font-weight: lighter;
  font-size: 1.5rem;
  padding: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textReview};
  border: 2px solid ${({ theme }) => theme.starBorder};
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.revOut};
  overflow: hidden;
  resize: none;
  caret-color: ${({ theme }) => theme.inputCaret};

  &::placeholder {
    font-size: 1.3rem;
    color: #bbb;
  }
`;

const Agreement = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
  margin: 2rem 0;
`;

const Input = styled.input``;

const Information = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.2px;
  line-height: 1.2;
`;

const Button = styled.button`
  border: none;
  text-align: center;
  width: 100%;
  padding: 1.5rem 1rem;
  font-weight: 500;
  font-size: 1.4rem;
  background-color: var(--clr-tertiary-green);
  color: ${({ theme }) => theme.textBtn};
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #a9c9c1 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #a9c9c1;
  margin: 3rem 0;
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media only screen and (max-width: 25em), only screen and (hover: none) {
    font-size: 1.38rem;
  }

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default ReviewModal;
