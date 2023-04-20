import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '@mui/material/Rating';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState } from 'react';

const ReviewModal = () => {
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState(null);

  const handleClick = () => {
    console.log({ rating, review });
  };

  return (
    <Container>
      <Wrapper>
        <ButtonContainer>
          <CloseButton>
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
          onChange={(e) => setReview(e.target.value)}
          placeholder='Example: Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is ...'
        ></TextArea>
        <Agreement>
          <Input id='terms' type='radio' />
          <Label htmlFor='terms'>
            I accept the <Link href='#' passHref>terms and conditions</Link>
          </Label>
        </Agreement>
        <Information>
          You will be able to receive emails in connection with this review (eg if others comment on your review).
          All emails contain the option to unsubscribe. We can use the text and star rating
          from your review in other marketting.
        </Information>
        <Button type='button' onClick={handleClick}>
          Submit product review
        </Button>
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
  z-index: 4000;
`;

const Wrapper = styled.div`
  width: 40rem;
  padding: 2rem 4rem;
  background-color: var(--clr-white);
  border-radius: 1.5rem;
  box-shadow: 0 1rem 4rem rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 0 1rem 4rem rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 0 1rem 4rem rgba(255, 255, 255, 0.5);
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
  background-color: #f5eef4;
  color: #888;
  border-radius: 50%;
  cursor: pointer;
`;

const Header = styled.h1`
  display: inline-block;
  font-weight: 600;
  font-size: 1.75rem;
  color: inherit;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 10rem;
  margin-top: 1rem;

  svg {
    font-size: 3.5rem;
    border: 1px solid #f4f8f7;
    margin-right: 3px;
  }
`;

const Text = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  color: inherit;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.3rem;
  color: inherit;

  a {
    &:link,
    &:visited {
      color: inherit;
    }
  }
`;

const TextArea = styled.textarea`
  display: inline-block;
  width: 100%;
  height: 10rem;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 1rem;
  color: #999;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  outline-color: #eee;
  overflow: hidden;
  resize: none;
  caret-color: var(--caret-light);

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
  margin: 2rem 0;
`;

const Input = styled.input``;

const Information = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0.2px;
  line-height: 1.2;
`;

const Button = styled.button`
  border: none;
  text-align: center;
  width: 17rem;
  padding: 1.5rem 1rem;
  font-weight: 500;
  font-size: 1.4rem;
  background-color: var(--clr-secondary-blue);
  color: var(--clr-white);
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #5885b9 50%
  );
  background-size: 220%;
  border-radius: 0.5rem;
  outline-color: #4489fe;
  margin: 3rem 0;
  cursor: pointer;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-position: 100%;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default ReviewModal;
