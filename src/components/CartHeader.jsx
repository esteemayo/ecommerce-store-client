import styled from 'styled-components';

const CartHeader = () => {
  return (
    <Container>
      CartHeader
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem 0.5rem 5rem;
  margin-bottom: 3rem;
`;

export default CartHeader;
