import styled from 'styled-components';
import { FC } from 'react';

import { OptionProps } from '@/types';

const Option: FC<OptionProps> = ({ value }) => {
  return <StyledOption value={value}>{value}</StyledOption>;
};

const StyledOption = styled.option`
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.bgProdCard};
  color: inherit;
`;

export default Option;
