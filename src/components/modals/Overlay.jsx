import styled from 'styled-components';
import PropTypes from 'prop-types';

const Overlay = ({ type, mode, children, onClick }) => {
  return (
    <StyledOverlay
      type={type}
      mode={mode}
      onClick={onClick}
    >
      <Container>{children}</Container>
    </StyledOverlay>
  );
}

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.bgOverlay};
  backdrop-filter: ${({ mode }) => mode === 'true' && 'blur(2px)'};
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ type }) => type === 'show' ? 'block' : 'none'};
  visibility: ${({ type }) => type === 'show' ? 'visible' : 'hidden'};
  opacity: ${({ type }) => type === 'show' ? 1 : 0};
  z-index: ${({ type }) => type === 'show' ? 4000 : -1};
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Overlay;
