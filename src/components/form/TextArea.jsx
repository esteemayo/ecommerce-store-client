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
`;

const StyledTextArea = styled.textarea`
  
`;

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.object,
  rest: PropTypes.any,
};

export default TextArea;
