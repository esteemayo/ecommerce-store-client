import styled from 'styled-components';
import FormError from './FormError';

const FormInput = ({ name, type = 'text', label, error, ...rest }) => {
  return (
    <FormGroup key={id}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        {...rest}
        id={name}
        type={type}
        name={name}
      />
      {error && <FormError message={error} />}
    </FormGroup>
  );
}

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Label = styled.label`
  display: inline-block;
  font-weight: 600;
  font-size: 1.4rem;
  color:  ${({ theme }) => theme.textLabel};
`;

const Input = styled.input`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.bgInput};
  color: #999;
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.inputOut};
  caret-color: ${({ theme }) => theme.inputCaret};
  transition: all 0.3s ease;

  &:focus {
    background-color: transparent;
  }

  &::-webkit-input-placeholder {
    font-weight: 300;
    font-size: 1.5rem;
    color: #bbb;
  }
`;

export default FormInput;
