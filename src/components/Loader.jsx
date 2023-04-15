import styled from 'styled-components';

const Loader = () => {
  return (
    <Container>
      <Wrapper>
        Loader
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
  background-color: var(--clr-white);
`;

export default Loader;
