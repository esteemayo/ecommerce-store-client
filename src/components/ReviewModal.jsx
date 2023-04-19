import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import Link from 'next/link';

const ReviewModal = () => {
  const [rating, setRating] = useState(null);

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
        <Title>Product review</Title>
        <TextArea
          placeholder='Example: Since i bought this a month ago, it has been used a lot. What i like best/what is worst about this product is ...'
        ></TextArea>
        <Agreement>
          <RadioButton type='radio' />
          <Span>I accept the <Link href='#' passHref>terms and conditions</Link></Span>
        </Agreement>
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
  width: 50rem;
  padding: 2rem 4rem;
  background-color: var(--clr-white);
  border-radius: 1rem;
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
  top: 0;
  right: 0;
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
`;

const Header = styled.h1`
  display: inline-block;
  font-weight: 400;
  font-size: 1.75rem;
  color: var(--clr-black);
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
  color: #111;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 1.3rem;
  color: var(--clr-black);
  margin-top: 2rem;
`;

const TextArea = styled.textarea`
  display: inline-block;
  width: 100%;
  height: 10rem;;
  padding: 1rem;
  color: #999;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  outline-color: #eee;
  overflow: hidden;
  resize: none;
  caret-color: var(--caret-light);
`;

const Agreement = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`;

const RadioButton = styled.input`
  
`;

const Span = styled.span`

`;

export default ReviewModal;
