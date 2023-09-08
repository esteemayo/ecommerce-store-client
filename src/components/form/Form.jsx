import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = ({ type, children, onSubmit }) => {
  return (
    <StyledForm type={type} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 2rem 0;

  @media only screen and (max-width: 64em) {
    margin: ${({ type }) => type === 'login' && '1.8rem 0'};
  }
`;

Form.propTypes = {
  children: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
