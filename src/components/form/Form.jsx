import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = ({ children, onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  
`;

Form.propTypes = {
  children: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
