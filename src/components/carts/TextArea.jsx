import styled from 'styled-components';

import FormError from '../form/FormError';
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
      {error && <FormError message={error} />}
    </FormGroup>
  );
}

const StyledTextArea = styled.textarea`
  
`;

export default TextArea;
