import styled from 'styled-components';

const CartItem = () => {
  return (
    <Container>
      <Left>
        Left
      </Left>
      <Right>
        Right
      </Right>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 3;
`;

const ImageContainer = styled.div`
  
`;

const Right = styled.div`
  flex: 1;
`;

export default CartItem;
