import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ReviewItem from './ReviewItem';

const TopReviews = () => {
  return (
    <Container>
      <Wrapper>
        <FontAwesomeIcon icon={faArrowLeft} className='arrow left' />
        <ReviewContainer>
          <ReviewItem />
        </ReviewContainer>
        <FontAwesomeIcon icon={faArrowRight} className='arrow right' />
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding: 10rem 0;
`;

const Wrapper = styled.div`
  
`;

const ReviewContainer = styled.div`
  position: relative;
`;

export default TopReviews;
