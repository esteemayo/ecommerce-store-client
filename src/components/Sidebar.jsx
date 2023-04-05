import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => ({ ...state.submenu }));

  return (
    <Container type={isSidebarOpen ? 'show' : ''}>
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
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  transform: scale(${({ type }) => type ? 1 : 0});
  z-index: ${({ type }) => type === 'show' ? 2 : -1};
  transition: all 0.3s linear;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 50em) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 90vw;
  height: 97vh;
  max-width: 62rem;
  padding: 4rem 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`

`;

const LinksContainer = styled.div`
  
`;

export default Sidebar;
