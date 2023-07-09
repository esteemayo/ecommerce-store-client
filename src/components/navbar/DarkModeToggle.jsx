import styled from 'styled-components';
import { useSelector } from 'react-redux';

const DarkModeToggle = () => {
  const { darkMode } = useSelector((state) => ({ ...state.darkMode }));

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
  position: relative;
  cursor: pointer;
`;

const Icon = styled.div`
  font-size: 1.2rem;
`;

const Ball = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--clr-primary-green);
  border-radius: 50%;
  position: absolute;
`;

export default DarkModeToggle;
