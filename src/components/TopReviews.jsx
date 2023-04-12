import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const TopReviews = () => {
  return (
    <Container>
      <Wrapper>
        <FontAwesomeIcon icon={faArrowLeft} />
        <ReviewContainer>

        </ListContainer>
        <FontAwesomeIcon icon={faArrowRight} />
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

const ListContainer = styled.div`
  
`;

export default TopReviews;
