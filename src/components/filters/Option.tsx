import styled from 'styled-components';
import { FC } from 'react';

interface OptionProps {
  value?: string | number | readonly string[];
}

const Option: FC<OptionProps> = ({ value }) => {
  return <StyledOption value={value}>{value}</StyledOption>;
};

const StyledOption = styled.option`
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.bgProdCard};
  color: inherit;
`;

export default Option;
