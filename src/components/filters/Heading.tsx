import styled from 'styled-components';
import { FC } from 'react';

import { FilterHeading } from '@/types';

const Heading: FC<FilterHeading> = ({ title }) => {
  return <StyledHeading>{title}</StyledHeading>;
};

const StyledHeading = styled.h1`
  display: inline-block;
  font-weight: 600;
  font-size: 2.25rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

export default Heading;
