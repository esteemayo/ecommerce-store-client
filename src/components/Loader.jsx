import styled from 'styled-components';

const Loader = () => {
  return (
    <Container>
      Loader
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
`;

export default Loader;
