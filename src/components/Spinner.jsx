import styled from 'styled-components';

const Spinner = ({ size }) => {
  return (
    <Container size={size}>&nbsp;</Container>
  );
}

const Container = styled.div`
  
`;

export default Spinner;
