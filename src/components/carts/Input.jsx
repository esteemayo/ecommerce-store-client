import styled from 'styled-components';

import FormError from '../form/FormError';
import { FormGroup } from '../form/FormGroup';

const Input = ({ name, label, type = 'text', error, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        {...rest}
        id={name}
        name={name}
        type={type}
      />
      {error && <FormError message={error} />}
    </FormGroup>
  );
}

const Label = styled.label`
  
`;

const StyledInput = styled.input`
  
`;

export default Input;
