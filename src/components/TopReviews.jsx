import styled from 'styled-components';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ReviewItem from './ReviewItem';

const TopReviews = () => {
  return (
    <Container>
      <Wrapper>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className='arrow left'
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
