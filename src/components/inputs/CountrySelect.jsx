import styled from 'styled-components';

import { Label } from '../form/Select';
import { FormGroup } from '../form/FormGroup';

const CountrySelect = ({ name, label, error, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
    </FormGroup>
  );
}

export default CountrySelect;
