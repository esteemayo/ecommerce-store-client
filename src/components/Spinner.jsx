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
  height: ${({ size }) => size === 'xs' && '1rem'};
  height: ${({ size }) => size === 'sm' && '2rem'};
  height: ${({ size }) => size === 'md' && '5rem'};
  height: ${({ size }) => size === 'lg' && '10rem'};
  border: 3px solid #f5f5f5;
  border-top-color: #979797;
`;

export default Spinner;
