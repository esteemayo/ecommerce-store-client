'use client';
import styled from 'styled-components';

const Submenu = () => {
  return (
    <Container type='show'>Submenu</Container>
  );
}

const Container = styled.aside`
  padding: 2rem;
  width: 50rem;
  height: 40rem;
  background-color: #f4d4f5;
  border-radius: 1rem;
  position: absolute;
  left: 50%;
  top: 5rem;
  transform: translateX(-50%);
  display: ${({ type }) => type === 'show' ? 'block' : 'none'};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 3000;
`;

export default Submenu;
