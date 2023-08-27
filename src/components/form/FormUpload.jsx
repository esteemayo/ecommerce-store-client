import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormUpload = ({ id, label, ...rest }) => {
  return (
    <FormGroup>
      <input {...rest} id={id} type='file' />
      <Label htmlFor={id}>{label}</Label>
    </FormGroup>
  );
}

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;

    &:focus + ${Label} {
      outline: 3px solid ${({ theme }) => theme.fileInput};
      outline-offset: 3px;
    }

    & + ${Label} {
      color: ${({ theme }) => theme.textFile};
      display: inline-block;
      text-decoration: none;
      padding: 3px;
      border-bottom: 1px solid ${({ theme }) => theme.fileInput};
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.fileInput};
        color: ${({ theme }) => theme.textCat};
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
        -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
      }
    }
  }
`;

const Label = styled.label`
  display: inline-block;
  font-weight: 600;
  font-size: 1.6rem;
  color:  ${({ theme }) => theme.textLabel};
`;

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus + ${Label} {
    outline: 3px solid ${({ theme }) => theme.fileInput};
    outline-offset: 3px;
  }

  & + ${Label} {
    color: ${({ theme }) => theme.textFile};
    display: inline-block;
    text-decoration: none;
    padding: 3px;
    border-bottom: 1px solid ${({ theme }) => theme.fileInput};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.fileInput};
      color: ${({ theme }) => theme.textCat};
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
`;

FormUpload.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rest: PropTypes.any,
};

export default FormUpload;
