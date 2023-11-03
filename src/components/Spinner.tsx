'use client';

import styled from 'styled-components';
import { FC } from 'react';

interface SpinnerProps {
  size?: string;
}

interface IContainer {
  size?: string;
}

const Spinner: FC<SpinnerProps> = ({ size = 'sm' }) => {
  return <Container size={size}>&nbsp;</Container>;
};

const Container = styled.div<IContainer>`
  width: ${({ size }) => size === 'xs' && '1.5rem'};
  width: ${({ size }) => size === 'sm' && '2rem'};
  width: ${({ size }) => size === 'md' && '5rem'};
  width: ${({ size }) => size === 'lg' && '10rem'};
  height: ${({ size }) => size === 'xs' && '1.5rem'};
  height: ${({ size }) => size === 'sm' && '2rem'};
  height: ${({ size }) => size === 'md' && '5rem'};
  height: ${({ size }) => size === 'lg' && '10rem'};
  border: 3px solid #f5f5f5;
  border-top-color: ${({ theme }) => theme.spnrBorTop};
  border-radius: 50%;
  animation: rotate 0.6s linear infinite;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
