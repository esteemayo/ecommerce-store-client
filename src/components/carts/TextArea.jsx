import styled from 'styled-components';
import { FormGroup } from '../form/FormGroup';
import { Label } from './Input';

const TextArea = ({ name, label, error, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <StyledTextArea
        {...rest}
        id={name}
        name={name}
      />
    </FormGroup>
  );
}

const StyledTextArea = styled.textarea`
  
`;

export default TextArea;
