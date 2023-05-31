import styled from 'styled-components';

const Darkmode = () => {
  return (
    <Container>
      <Wrapper>
        Darkmode
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 1%;
  width: 4.5rem;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.bgMode};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  
`;

export default Darkmode;
