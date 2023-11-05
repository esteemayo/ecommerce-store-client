'use client';

import styled from 'styled-components';
import { FC } from 'react';

interface HeadingProps {
  title: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return <Header>{title}</Header>;
};

const Header = styled.h4`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

export default Heading;
