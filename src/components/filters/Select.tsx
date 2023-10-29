import { FC } from 'react';

import { Label } from './Label';
import { StyledSelect } from './StyledSelect';
import { Filter } from './Filter';

import { FilterSelect } from '@/types';

const Select: FC<FilterSelect> = ({
  name,
  page,
  value,
  label,
  options,
  ...rest
}) => {
  return (
    <Filter>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect {...rest} id={name} name={name} value={value} page={page}>
        {options}
      </StyledSelect>
    </Filter>
  );
};

export default Select;
