import styled from 'styled-components';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';
import ReviewItem from './ReviewItem';
import { topReviews } from '@/data';

const TopReviews = () => {
  const reviewRef = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const lastIndex = topReviews.lastIndexOf(topReviews.slice(-1)[0]);

  const handleClick = (direction) => {
    setIsMoved(true);
    const distance = reviewRef.current.getBoundingClientRect().x - 50;

    if (direction === 'left') {
      setCurrentSlide(currentSlide - 1);
      reviewRef.current.style.transform = `translateX(${730 + distance}px)`;
    }

    if (direction === 'right' && currentSlide < 8) {
      setCurrentSlide(currentSlide + 1);
      reviewRef.current.style.transform = `translateX(${-730 + distance}px)`;
    }
  };

  return (
    <Container>
      <HeadingContainer>
        <Header title='You didn&apos;t hear it from us' />
      </HeadingContainer>
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
  background-color: #f4f8f7;
`;

const HeadingContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
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
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  -webkit-box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.04);
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
