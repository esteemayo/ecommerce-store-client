import { FC } from 'react';

import { FormGroup } from '../form/FormGroup';
import FormError from '../form/FormError';
import { Label, Option, StyledSelect } from '../form/Select';

import { CountrySelectProps } from '@/types';

const CountrySelect: FC<CountrySelectProps> = ({
  data,
  name,
  label,
  error,
  ...rest
}) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect {...rest} id={name} name={name}>
        <Option value=''>Select your country</Option>
        {data.map((item) => {
          const { flag, label } = item;
          return (
            <Option key={flag} value={label}>
              {flag} {label}
            </Option>
          );
        })}
      </StyledSelect>
      {error && <FormError message={error} />}
    </FormGroup>
  );
};

export default CountrySelect;
