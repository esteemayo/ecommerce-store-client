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
  width: 4rem;
  height: 4rem;
  background-color: var(--clr-white);
  color: #777;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
`;

const Wrapper = styled.div`

`;

export default ScrollToTop;
