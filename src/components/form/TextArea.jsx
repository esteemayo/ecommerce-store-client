import styled from 'styled-components';
import PropTypes from 'prop-types';

import FormError from './FormError';

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

const StyledTextArea = styled.textarea`
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: 1.5rem;
  width: 100%;
  height: 10rem;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.bgInput};
  color: ${({ theme }) => theme.textInput};
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.inputOut};
  overflow: hidden;
  resize: none;
  caret-color: ${({ theme }) => theme.inputCaret};
  transition: all 0.3s ease;

  &:focus {
    background-color: transparent;
  }

  &::-webkit-input-placeholder {
    font-weight: 300;
    font-size: 1.5rem;
  }
`;

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.object,
  rest: PropTypes.any,
};

export default TextArea;
