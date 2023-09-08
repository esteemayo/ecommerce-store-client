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
  
`;

const Label = styled.label`
  
`;

const StyledTextArea = styled.textarea`
  
`;

export default TextArea;
