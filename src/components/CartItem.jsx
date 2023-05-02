import Image from 'next/image';
import styled from 'styled-components';

const CartItem = () => {
  return (
    <Container>
      <Left>
        <ImageContainer>
          <Image src='/img/img-10.jpg' width={120} height={120} alt='' />
        </ImageContainer>
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
  width: 12rem;
  height: 12rem;
  background-color: #f9f9f9;
  border-radius: 3px;
`;

const Right = styled.div`
  flex: 1;
`;

export default CartItem;
