import styled from 'styled-components';
import PropTypes from 'prop-types';

const CancelButton = ({ text, onClick }) => {
  return (
    <Button type='button' onClick={onClick}>
      {text}
    </Button>
  );
}

const Button = styled.button`
  display: inline-block;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.4rem;
  width: 50%;
  padding: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textModalBtn};
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  outline-color: #eee;
  cursor: pointer;
`;

CancelButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CancelButton;
