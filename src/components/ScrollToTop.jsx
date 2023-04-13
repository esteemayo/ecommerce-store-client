import styled from 'styled-components';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollToTop = () => {
  return (
    <Container>
      <Wrapper>
        <KeyboardDoubleArrowUpIcon />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  z-index: 3000;
  animation: fadeIn 700ms ease-in-out 1s both;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: var(--clr-white);
  background-color: var(--clr-black);
  color: #777;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ScrollToTop;
