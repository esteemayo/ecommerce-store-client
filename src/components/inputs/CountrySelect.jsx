import styled from 'styled-components';

import { FormGroup } from '../form/FormGroup';
import { Label, Option, StyledSelect } from '../form/Select';
import FormError from '../form/FormError';

const CountrySelect = ({ name, label, error, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect {...rest} id={name} name={name}>
        <Option value=''>Select your country</Option>
        <Option value=''></Option>
      </StyledSelect>
      {error && <FormError message={error} />}
    </FormGroup>
  );
}

export default CountrySelect;
