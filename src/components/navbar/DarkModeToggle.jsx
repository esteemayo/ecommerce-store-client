import styled from 'styled-components';

const DarkModeToggle = () => {
  return (
    <Container>
      <Icon>🌙</Icon>
      <Icon>🔆</Icon>
      <Ball />
    </Container>
  );
}

const Container = styled.div`
  width: 4.2rem;
  height: 2.4rem;
  padding: 2px;
  border: 1.5px solid var(--clr-primary-green);
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.div`
  font-size: 1.2rem;
`;

const Ball = styled.div`

`;

export default DarkModeToggle;
