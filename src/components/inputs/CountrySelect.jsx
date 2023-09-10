import styled from 'styled-components';

import { Label, StyledSelect } from '../form/Select';
import { FormGroup } from '../form/FormGroup';

const CountrySelect = ({ name, label, error, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect {...rest} id={name} name={name}></StyledSelect>
    </FormGroup>
  );
}

export default CountrySelect;
