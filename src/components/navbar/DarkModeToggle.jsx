'use client';

import styled from 'styled-components';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggle } from '@/features/darkMode/darkModeSlice';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => ({ ...state.darkMode }));

  const handleClick = useCallback(() => {
    dispatch(toggle());
  }, [dispatch]);

  return (
    <Container onClick={handleClick}>
      <Icon>
        <DarkModeOutlined />
      </Icon>
      <Icon>
        <LightModeOutlined />
      </Icon>
      <Ball mode={darkMode.toString()} />
    </Container>
  );
}

const Container = styled.div`
  width: 4.2rem;
  height: 2.4rem;
  padding: 2px;
  border: 2px solid var(--clr-tertiary-green);
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 1.5rem;
    color: var(--clr-white);
  }
`;

const Ball = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--clr-tertiary-green);
  border-radius: 50%;
  position: absolute;
  left: ${({ mode }) => mode === 'false' && '2px'};
  right: ${({ mode }) => mode === 'true' && '2px'};
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--clr-primary-green);
  }
`;

export default DarkModeToggle;
