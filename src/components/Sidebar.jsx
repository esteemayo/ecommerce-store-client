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
        <LinksContainer>

        </LinksContainer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  width: 90vw;
  height: 90vh;
  max-width: 62rem;
`;

const CloseButton = styled.button`

`;

const LinksContainer = styled.div`
  
`;

export default Sidebar;
