'use client';

import styled from 'styled-components';
import { FC } from 'react';

import { SubmenuHeadingProps } from '@/types';

const Heading: FC<SubmenuHeadingProps> = ({ title }) => {
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
