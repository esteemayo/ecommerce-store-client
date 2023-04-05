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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  
`;

const CloseButton = styled.button`

`;

export default Sidebar;
