import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const TopReviews = () => {
  return (
    <Container>
      <Wrapper>
        <FontAwesomeIcon icon={faArrowLeft} />
        <ListContainer>

        </ListContainer>
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
