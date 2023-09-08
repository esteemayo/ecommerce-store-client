import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const FormGroup = styled.div`
  
`;

const Label = styled.label`
  
`;

const StyledTextArea = styled.textarea`
  
`;

export default TextArea;
