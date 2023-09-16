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
  border: none;
  display: inline-block;
  width: 100%;
  height: 10rem;
  font-family: inherit;
  font-weight: lighter;
  font-size: 1.5rem;
  padding: 1.5rem 1rem;
`;

export default TextArea;
