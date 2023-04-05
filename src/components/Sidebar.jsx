import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <CloseButton>
          <FontAwesomeIcon icon={faXmark} />
        </CloseButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.aside`
  
`;

const Wrapper = styled.div`
  
`;

const CloseButton = styled.button`

`;

export default Sidebar;
