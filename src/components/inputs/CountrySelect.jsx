import styled from 'styled-components';

import { FormGroup } from '../form/FormGroup';
import { Label, Option, StyledSelect } from '../form/Select';
import FormError from '../form/FormError';

const CountrySelect = ({
  data,
  name,
  label,
  error,
  ...rest
}) => {
  console.log(data)
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect {...rest} id={name} name={name}>
        <Option value=''>Select your country</Option>
        {data.map((item) => {
          const { flag, label } = item
          return (
            <Option key={flag} value={label}>
              {flag} {label}
            </Option>
          )
        })}
      </StyledSelect>
      {error && <FormError message={error} />}
    </FormGroup>
  );
}

export default CountrySelect;
