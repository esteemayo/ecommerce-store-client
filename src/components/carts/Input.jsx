import styled from 'styled-components';
import { FormGroup } from '../form/FormGroup';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
    </FormGroup>
  );
}

const Label = styled.label`
  
`;

const StyledInput = styled.input`
  
`;

export default Input;
