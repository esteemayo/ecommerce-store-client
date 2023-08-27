import styled from 'styled-components';

const FormButton = ({ label }) => {
  return (
    <Button type='submit'>
      {label}
    </Button>
  );
}

const Button = styled.button`
  
`;

export default FormButton;
