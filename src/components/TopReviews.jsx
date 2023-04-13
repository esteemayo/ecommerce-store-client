import styled from 'styled-components';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ReviewItem from './ReviewItem';
import { useRef, useState } from 'react';

const TopReviews = () => {
  const reviewRef = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    console.log(direction);
  };

  return (
    <Container>
      <Heading>You didn&apos;t hear it from us</Heading>
      <Wrapper>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className='arrow left'
          onClick={() => handleClick('left')}
        />
        <ReviewContainer>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </ReviewContainer>
        <FontAwesomeIcon
          icon={faArrowRight}
          className='arrow right'
          onClick={() => handleClick('right')}
        />
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

  .arrow {
    width: 5rem;
    height: 100%;
    background-color: rgba(22, 22, 22, 0.5);
    color: var(--clr-white);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    z-index: 1000;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
`;

const ReviewContainer = styled.div`
  margin-left: 5rem;
  margin-top: 1rem;
  display: flex;
  width: max-content;
`;

export default TopReviews;
