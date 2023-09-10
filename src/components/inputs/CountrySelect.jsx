import styled from 'styled-components';

import { FormGroup } from '../form/FormGroup';
import { Label, Option, StyledSelect } from '../form/Select';

const CountrySelect = ({ name, label, error, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect {...rest} id={name} name={name}>
        <Option value=''>Select your country</Option>
        <Option value=''></Option>
      </StyledSelect>
    </FormGroup>
  );
}

export default CountrySelect;
