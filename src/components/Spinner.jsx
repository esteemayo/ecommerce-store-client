import styled from 'styled-components';

const Spinner = ({ size }) => {
  return (
    <Container size={size}>&nbsp;</Container>
  );
}

const Container = styled.div`
  width: ${({ size }) => size === 'xs' && '1rem'};
  width: ${({ size }) => size === 'sm' && '2rem'};
  width: ${({ size }) => size === 'md' && '5rem'};
  width: ${({ size }) => size === 'lg' && '10rem'};
`;

export default Spinner;
