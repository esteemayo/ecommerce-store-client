import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  display: inline-block;
  width: 5rem;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.textLabel};
`;

const StyledInput = styled.input`
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textInput};
  border: 2px solid ${({ theme }) => theme.modalInputBorder};
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.inputOut};
  caret-color: ${({ theme }) => theme.inputCaret};

  @media only screen and (max-width: 18.75em) {
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
  }

  &::placeholder {
    font-weight: 300;
    font-size: 1.5rem;
    color: #bbb;
  }
`;

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.object,
  rest: PropTypes.any,
};

export default Input;
