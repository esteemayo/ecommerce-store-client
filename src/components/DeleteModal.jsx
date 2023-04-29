import styled from 'styled-components';

const DeleteModal = () => {
  return (
    <Container>
      <Wrapper>
        DeleteModal
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
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
  width: 35rem;
  padding: 5rem;
  background-color: var(--clr-white);
  border-radius: 1rem;
`;

export default DeleteModal;
