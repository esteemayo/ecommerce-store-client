import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextArea = ({ name, label }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
    </FormGroup>
  );
}

const FormGroup = styled.div`
  
`;

const Label = styled.label`
  
`;

export default TextArea;
