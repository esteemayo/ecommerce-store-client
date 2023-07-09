import styled from 'styled-components';

const DarkModeToggle = () => {
  return (
    <Container>
      <Icon>🌙</Icon>
      <Icon>🔆</Icon>
    </Container>
  );
}

const Container = styled.div`
  width: 4.2rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.div`
  
`;

export default DarkModeToggle;
