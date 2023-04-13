import styled from 'styled-components';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ReviewItem from './ReviewItem';

const TopReviews = () => {
  const reviewRef = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    setIsMoved(true);
    const distance = reviewRef.current.getBoundingClientRect().x - 50;

    if (direction === 'left') {
      setCurrentSlide(currentSlide - 1);
      reviewRef.current.style.transform = `translateX(${730 + distance}px)`;
    }

    if (direction === 'right') {
      setCurrentSlide(currentSlide + 1);
      reviewRef.current.style.transform = `translateX(${-730 + distance}px)`;
    }
  };

  return (
    <Container>
      <Heading>You didn&apos;t hear it from us</Heading>
      <Wrapper>
        <IconButton
          direction='left'
          onClick={() => handleClick('left')}
          style={{ display: (!isMoved || currentSlide === 0) && 'none' }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconButton>
        <ReviewContainer ref={reviewRef}>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </ReviewContainer>
        <IconButton
          direction='right'
          onClick={() => handleClick('right')}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </IconButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 10rem 0;
  background-color: #f4f8f7;
`;

const Heading = styled.h1`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
  font-size: 2.7rem;
  color: #1658a3;
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    display: inline-block;
    width: 4rem;
    height: 3px;
    background-color: #1658a3;
    border-radius: 3px;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const IconButton = styled.button`
  border: none;
  width: 4rem;
  height: 4rem;
  background-color: var(--clr-white);
  color: #777;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  outline-color: #777;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: ${({ direction }) => direction === 'left' && '8.2rem'};
  right: ${({ direction }) => direction === 'right' && 0};
  transform: translate(-50%);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReviewContainer = styled.div`
  margin-left: 5rem;
  margin-top: 1rem;
  display: flex;
  width: max-content;
  transition: all 0.3s ease;
  /* animation-timing-function: cubic-bezier(0.04, 1.72, 0.51, 0.15); */
`;

export default TopReviews;
