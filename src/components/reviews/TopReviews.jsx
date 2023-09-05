'use client';

import styled from 'styled-components';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../Header';
import ReviewItem from './ReviewItem';

import { topReviews } from '@/data';
import { StyledWrapper } from '../StyledWrapper';

const TopReviews = () => {
  const reviewRef = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 730);

  const lastIndex = topReviews.lastIndexOf(topReviews.slice(-1)[0]);

  const handleClick = useCallback((direction) => {
    setIsMoved(true);
    const distance = reviewRef.current.getBoundingClientRect().x - 50;

    if (direction === 'left') {
      setCurrentSlide(currentSlide - 1);
      reviewRef.current.style.transform = `translateX(${730 + distance}px)`;
    }

    if (direction === 'right' && currentSlide < 8 - clickLimit) {
      setCurrentSlide(currentSlide + 1);
      reviewRef.current.style.transform = `translateX(${-730 + distance}px)`;
    }
  }, [clickLimit, currentSlide]);

  return (
    <Container>
      <StyledWrapper>
        <Header title='You didn&apos;t hear it from us' />
      </StyledWrapper>
      <Wrapper>
        <IconButton
          direction='left'
          onClick={() => handleClick('left')}
          style={{ display: (!isMoved || currentSlide === 0) && 'none' }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconButton>
        <ReviewContainer ref={reviewRef}>
          {topReviews.map((review) => {
            return <ReviewItem key={review.id} {...review} />;
          })}
        </ReviewContainer>
        <IconButton
          direction='right'
          onClick={() => handleClick('right')}
          style={{ display: currentSlide === lastIndex - 1 && 'none' }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </IconButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  padding: 10rem 0;
  background-color: ${({ theme }) => theme.bgLight};

  @media only screen and (max-width: 64em) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`;

const HeadingContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  @media only screen and (max-width: 64em) {
    max-width: 100rem;
  }

  @media only screen and (max-width: 59.375em) {
    max-width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    max-width: 70rem;
  }

  @media only screen and (max-width: 37.5em) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media only screen and (max-width: 25em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const IconButton = styled.button`
  border: none;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.bgRevArrowBtn};
  color: ${({ theme }) => theme.textRevArrowBtn};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxRev};
  -webkit-box-shadow: ${({ theme }) => theme.boxRev};
  -moz-box-shadow: ${({ theme }) => theme.boxRev};
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

  @media only screen and (max-width: 50em) {
    left: ${({ direction }) => direction === 'left' && '4.5rem'};
  }

  @media only screen and (max-width: 43.75em) {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.55rem;
  }

  svg {
    color: inherit;
  }
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
