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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.div`
  
`;

export default DarkModeToggle;
