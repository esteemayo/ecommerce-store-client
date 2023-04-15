import styled from 'styled-components';
import Spinner from './Spinner';

const Loader = () => {
  return (
    <Container>
      <Wrapper>
        <Spinner />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40rem;
  height: 30rem;
  background-color: var(--clr-white);
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loader;
