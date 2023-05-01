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
  
`;

const ImageContainer = styled.div`
  
`;

const Right = styled.div`
  
`;

export default CartItem;
